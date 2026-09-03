#!/usr/bin/env python3
"""Fail the build if markdown docs reference repo files that don't exist.

Scans every .md file in the repo for path-like references anchored at a
known top-level directory (docs/, examples/, scripts/, .github/) and checks
each referenced file exists. This is the drift guard for the repo's rule that
docs link to canonical code: a moved or renamed file must update the docs in
the same commit.
"""

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
EXTENSIONS = "java|kts|kt|sql|yaml|yml|toml|md|xml|py"
PATTERN = re.compile(rf"(?:docs|examples|scripts|\.github)/[A-Za-z0-9_./-]+\.(?:{EXTENSIONS})\b")

SKIP_DIRS = {".git", "build", ".gradle", ".claude"}


def markdown_files():
    for path in ROOT.rglob("*.md"):
        if not SKIP_DIRS.intersection(part for part in path.parts):
            yield path


def main() -> int:
    checked = 0
    missing = []
    for md in markdown_files():
        for ref in sorted(set(PATTERN.findall(md.read_text(encoding="utf-8")))):
            checked += 1
            if not (ROOT / ref).exists():
                missing.append(f"{md.relative_to(ROOT)} -> {ref}")

    print(f"checked {checked} doc references")
    if missing:
        print("MISSING files referenced from docs:")
        for entry in missing:
            print(f"  {entry}")
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
