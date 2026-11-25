#!/usr/bin/env python3
"""Recover embedded sources without executing the target (Mach-O arm64 Bun layout)."""
import argparse
import hashlib
import json
from pathlib import Path, PurePosixPath
import struct

def extract(binary, destination):
    binary = Path(binary).resolve()
    data = binary.read_bytes()
    if data[:4] != bytes.fromhex('cffaedfe'):
        raise ValueError('Expected little-endian 64-bit Mach-O')
    cursor = 32
    section = None
    for _ in range(struct.unpack_from('<I', data, 16)[0]):
        command, size = struct.unpack_from('<II', data, cursor)
        if command == 0x19:
            count = struct.unpack_from('<I', data, cursor + 64)[0]
            for i in range(count):
                at = cursor + 72 + i * 80
                if data[at:at+16].rstrip(b'\0') == b'__bun':
                    section_size = struct.unpack_from('<Q', data, at + 40)[0]
                    section = (struct.unpack_from('<I', data, at + 48)[0], section_size)
        cursor += size
    if section is None:
        raise ValueError('No __bun section')
    offset, section_size = section
    length = struct.unpack_from('<Q', data, offset)[0]
    if length + 8 > section_size:
        raise ValueError('Payload outside section')
    base = offset + 8
    payload = memoryview(data)[base:base+length]
    trailer = b'\n---- Bun! ----\n'
    if bytes(payload[-len(trailer):]) != trailer:
        raise ValueError('Bad Bun trailer')
    count_bytes, table_offset, table_size, entry, argv_offset, argv_length, flags = struct.unpack_from('<Q6I', payload, length-48)
    if count_bytes != length - 48 or table_size % 52:
        raise ValueError('Unsupported Bun graph layout')
    def region(start, size):
        if start + size > count_bytes:
            raise ValueError('Region outside payload')
        return bytes(payload[start:start+size])
    out = Path(destination)
    out.mkdir(parents=True, exist_ok=True)
    modules = []
    for index in range(table_size // 52):
        values = struct.unpack_from('<12I4B', payload, table_offset+index*52)
        name = region(*values[:2]).rstrip(b'\0').decode('utf-8')
        prefix = '/$bunfs/root/'
        if not name.startswith(prefix):
            raise ValueError(f'Unexpected module path: {name}')
        relative = PurePosixPath(name[len(prefix):])
        if relative.is_absolute() or '..' in relative.parts:
            raise ValueError('Unsafe module path')
        content = region(*values[2:4])
        target = out / 'raw' / str(relative)
        target.parent.mkdir(parents=True, exist_ok=True)
        target.write_bytes(content)
        modules.append(dict(index=index, name=name, path=str(relative), bytes=len(content),
            binary_offset=base+values[2], sha256=hashlib.sha256(content).hexdigest(),
            encoding=values[12], loader=values[13], module_format=values[14], side=values[15],
            sourcemap_bytes=values[5], bytecode_bytes=values[7], module_info_bytes=values[9]))
        if values[5]:
            target.with_name(target.name+'.embedded.map').write_bytes(region(*values[4:6]))
    manifest = dict(binary=str(binary), binary_sha256=hashlib.sha256(data).hexdigest(),
        section_offset=offset, payload_bytes=length, flags=flags, entry_index=entry,
        modules=modules, source_bytes=sum(m['bytes'] for m in modules))
    (out/'manifest.json').write_text(json.dumps(manifest, indent=2)+'\n')
    from decode_assets import decode
    decode(out)
    print(json.dumps({k:v for k,v in manifest.items() if k!='modules'} | {'module_count':len(modules)}))

if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('binary')
    parser.add_argument('destination')
    args = parser.parse_args()
    extract(args.binary, args.destination)
