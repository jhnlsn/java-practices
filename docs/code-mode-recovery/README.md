# Code Mode recovery

Recovered on 2026-11-21 from the locally installed Claude Code **2.1.329** and **2.1.330** binaries. Published under `docs/code-mode-recovery` alongside the [functionality specification](../codemode-functionality-spec.md). The feature ships as JavaScript source inside a Bun standalone module graph; the source was extracted directly, without executing the application or reconstructing code from `strings` output.

**The shipped JavaScript and embedded assets are recovered. A standalone replacement with verified end-to-end parity is not established.** Native Bun extensions, permissions, hooks, MCP connections, server policy and model behavior remain host dependencies.

Start with [the source-backed behavior specification](RECOVERED-SPEC.md) and [the functionality coverage report](COVERAGE.md).

| Version | Embedded files | Archived content bytes | Parsed JavaScript modules |
|---|---:|---:|---:|
| 2.1.329 | 3,657 | 72,808,784 | 3,416 |
| 2.1.330 | 3,776 | 74,196,409 | 3,534 |

Every archived file was checked against its binary offset and SHA-256 digest. Every static embedded import and every literal embedded-file reference resolves to an archived file. Neither version contains source maps, so original TypeScript, original names, and original module boundaries cannot be reconstructed exactly.

## Where to look

- `versions/<version>/raw/`: byte-exact embedded sources and assets, including the surrounding host implementation and native assets. These preserve the shipped `/$bunfs/root/` references and are not a portable application checkout.
- `versions/<version>/assets/`: decoded text assets, including generated helper JavaScript and the shell, tool and context TypeScript declarations. Zstandard compression and Latin-1/UTF-16 encoding are decoded here only.
- `versions/<version>/formatted/`: readable versions of feature-marker matches and selected supporting modules. Marker matching includes surrounding application integrations; it is deliberately broader than the REPL alone.
- [329 core](versions/2.1.329/formatted/chunk-xgav7f9x.js) and [330 core](versions/2.1.330/formatted/chunk-v7j43e2p.js): runtime/tool bridge, output handling and lifecycle.
- [330 parser/instrumentation](versions/2.1.330/formatted/chunk-zg2mw0h6.js) and [330 scheduler](versions/2.1.330/formatted/chunk-yaw6xb6n.js).
- [329 symbol index](versions/2.1.329/symbol-index.md), [330 symbol index](versions/2.1.330/symbol-index.md): top-level core bindings and analyst labels. `symbols.json` adds dependency information.
- `manifest.json`: binary digest, source offsets, per-file hashes, encodings and bytecode/source-map metadata.
- `module-graph.json`: static imports, literal embedded references, exports and conservative dependency closure. This closure reaches almost the entire CLI because of shared integrations and entry-point references; it is not a minimal feature boundary.
- `evidence/inputs/`: unchanged copies of the five original home-directory extracts.
- [integrity results](evidence/integrity.json), [test results](evidence/tests.tap), and [structural version map](evidence/core-version-map.json).

## Verify this checkout

The raw and derived extraction is committed here. Dependency directories and publishing scratch files are excluded. The standalone executables themselves are not included. Original copyright notices remain in the recovered files.

```sh
cd docs/code-mode-recovery
npm ci
npm run verify
npm test
```

The verifier checks every archived raw file against its recorded size and SHA-256 and checks the embedded dependency inventory. To repeat the original binary-offset comparison, supply the directory containing both original executables:

```sh
python3 tools/verify.py --binary-dir /path/to/original/versions
```

The existing `evidence/integrity.json`, `evidence/summary.json` and `evidence/tests.tap` retain the original recovery results. A fresh verification prints its own scope and does not overwrite those historical records unless `--report` is supplied. The manifest's `binary` path is portable; source bytes, module offsets and binary digests are preserved.

Upstream Markdown inside the version archives retains its original paths and references. The repository's documentation-reference checker excludes this vendored subtree; the archive verifier checks its bytes instead.

## Reproduce

Requires Python **3.14+** for standard-library Zstandard decoding, Node **25+** as used here, and the original executables for binary extraction.

```sh
cd docs/code-mode-recovery
npm ci
python3 tools/extract_bun.py ~/.local/share/claude/versions/2.1.329 versions/2.1.329
python3 tools/extract_bun.py ~/.local/share/claude/versions/2.1.330 versions/2.1.330
npm run analyze
npm run verify
npm test
```

The extractor recognizes the observed little-endian Mach-O 64-bit Bun graph layout, validates the trailer and pointer bounds, and rejects unexpected paths. It is not a universal Bun executable unpacker. The layout was cross-checked with [Bun's module graph source](https://github.com/oven-sh/bun/blob/main/src/standalone_graph/StandaloneModuleGraph.rs), archived in `evidence/StandaloneModuleGraph.rs`; the binary itself is the authoritative evidence for this recovery.

The tests execute recovered code with explicit test host adapters. They do not call a model, launch agents, change Claude's settings, or send messages. The one actual shell test runs `printf` to verify interpolation quoting. Tests of background results use supplied host records; they do not start background commands.

Recovered source retains its existing notices. This recovery archive does not relicense the recovered application. The installed executable was not modified.
