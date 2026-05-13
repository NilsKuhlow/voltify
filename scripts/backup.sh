#!/usr/bin/env bash
# Voltify-Backup
# Kopiert den aktuellen App-Stand nach ../Voltify_Backups/<timestamp>_<tag>/
# .git wird nicht mitkopiert (zu groß, wenig sinnvoll für Snapshots).
#
# Aufruf direkt:        scripts/backup.sh                   # tag = "manual"
# Mit eigenem Tag:      scripts/backup.sh phase2-fragen
# Als Pre-Push-Hook:    scripts/install-hooks.sh installiert den Hook,
#                        der dieses Skript automatisch vor jedem `git push`
#                        mit tag = "pre-push" ausführt.
set -euo pipefail

SRC="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DEST_ROOT="$(cd "${SRC}/.." && pwd)/Voltify_Backups"
ts="$(date +%Y-%m-%d_%H%M%S)"
TAG="${1:-manual}"
DEST="${DEST_ROOT}/${ts}_${TAG}"

mkdir -p "${DEST_ROOT}"
cp -r "${SRC}" "${DEST}"
# .git und Backups-eigene Pfade nicht in Snapshot
rm -rf "${DEST}/.git"
echo "[backup] -> ${DEST}"
