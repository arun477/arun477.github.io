#!/bin/sh
# Install the Hugo version this site is built with (Linux only; on macOS use `brew install hugo`).
set -eu
VERSION=0.167.0

if command -v hugo >/dev/null 2>&1 && hugo version | grep -q "v$VERSION"; then
  exit 0
fi

case "$(uname -m)" in
  x86_64) ARCH=amd64 ;;
  aarch64 | arm64) ARCH=arm64 ;;
  *) echo "unsupported arch: $(uname -m)" >&2; exit 1 ;;
esac

DEST=/usr/local/bin
[ -w "$DEST" ] || DEST="$HOME/.local/bin"
mkdir -p "$DEST"
curl -fsSL "https://github.com/gohugoio/hugo/releases/download/v${VERSION}/hugo_${VERSION}_linux-${ARCH}.tar.gz" \
  | tar -xz -C "$DEST" hugo
"$DEST/hugo" version
