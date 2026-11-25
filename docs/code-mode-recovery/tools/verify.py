#!/usr/bin/env python3
"""Independently verify every recovered byte and every literal embedded reference."""
from pathlib import Path
import hashlib
import json
import argparse

root = Path(__file__).resolve().parents[1]
parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('--binary-dir', type=Path, help='Directory containing the original 2.1.329 and 2.1.330 executables; requires and verifies both when supplied')
parser.add_argument('--report', type=Path, help='Optional path for this verification report; historical evidence is unchanged by default')
args = parser.parse_args()
report = {}
for version in ['2.1.329', '2.1.330']:
    directory = root/'versions'/version
    manifest = json.loads((directory/'manifest.json').read_text())
    binary_path = args.binary_dir/version if args.binary_dir else Path(manifest['binary'])
    if not binary_path.is_absolute():
        binary_path = root/binary_path
    if args.binary_dir and not binary_path.is_file():
        raise FileNotFoundError(binary_path)
    binary = binary_path.read_bytes() if binary_path.is_file() else None
    if binary is not None:
        assert hashlib.sha256(binary).hexdigest() == manifest['binary_sha256'], 'Binary changed'
    verified = 0
    for item in manifest['modules']:
        data = (directory/'raw'/item['path']).read_bytes()
        assert len(data) == item['bytes'], item['path']
        assert hashlib.sha256(data).hexdigest() == item['sha256'], item['path']
        if binary is not None:
            assert data == binary[item['binary_offset']:item['binary_offset']+item['bytes']], item['path']
        verified += 1
    graph = json.loads((directory/'module-graph.json').read_text())
    assert not [m for m in graph['modules'] if 'parseError' in m], 'Source parse failures'
    present = {item['path'] for item in manifest['modules']}
    static = [(m['path'],name) for m in graph['modules'] for name in m.get('imports',[]) if name.startswith('/$bunfs/root/')]
    missing_static = [(source,name) for source,name in static if name[13:] not in present]
    assert not missing_static, missing_static
    assert not graph.get('unresolved', []), 'Unresolved literal embedded references'
    report[version] = dict(verified_modules=verified,verified_bytes=manifest['source_bytes'],
        binary_offsets_checked=binary is not None,
        parsed_javascript_modules=len(graph['modules']),static_embedded_edges=len(static),
        missing_static_imports=missing_static,literal_references_not_in_archive=graph.get('unresolved',[]),
        formatted_modules=len(list((directory/'formatted').glob('*'))),
        source_map_count=sum(1 for m in manifest['modules'] if m['sourcemap_bytes']),
        feature_marker_matches=len(graph['selected']),conservative_dependency_closure=len(graph['closure']))
    del binary
assets = {}
for file in (root/'versions/2.1.329/assets').glob('*prelude*'):
    other = root/'versions/2.1.330/assets'/file.name
    assert file.read_bytes() == other.read_bytes(), file.name
    assets[file.name] = dict(bytes=file.stat().st_size,sha256=hashlib.sha256(file.read_bytes()).hexdigest(),identical_between_versions=True)
report['generated_helpers'] = assets
inventory = json.loads((root/'publication-inventory.json').read_text())
for filename, digest in inventory['files'].items():
    assert hashlib.sha256((root/filename).read_bytes()).hexdigest() == digest, filename
if args.report:
    args.report.write_text(json.dumps(report,indent=2)+'\n')
print(json.dumps({v:{k:x for k,x in r.items() if k!='literal_references_not_in_archive'} for v,r in report.items() if v!='generated_helpers'},indent=2))
