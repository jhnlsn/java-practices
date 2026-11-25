#!/usr/bin/env python3
"""Decode embedded text without changing the byte-exact raw archive."""
import json
from pathlib import Path
from compression import zstd

def decode(directory):
    directory = Path(directory)
    assets = directory/'assets'
    assets.mkdir(exist_ok=True)
    count = 0
    for item in json.loads((directory/'manifest.json').read_text())['modules']:
        name = item['path']
        if not (name.endswith('.zst') or item['loader'] == 13):
            continue
        content = (directory/'raw'/name).read_bytes()
        if name.endswith('.zst'):
            content = zstd.decompress(content)
            name = name[:-4]
        else:
            content = content.decode('utf-16-le' if item['encoding'] == 2 else 'latin1').encode('utf-8')
        target = assets/name
        target.parent.mkdir(parents=True, exist_ok=True)
        target.write_bytes(content)
        count += 1
    return count

if __name__ == '__main__':
    import sys
    for directory in sys.argv[1:]:
        print(directory, decode(directory), 'decoded text assets')
