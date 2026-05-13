#!/usr/bin/env bash
# Installiert lokale Git-Hooks für das Voltify-Repo.
# Idempotent: bestehende Hooks werden überschrieben (nach Sicherheitsabfrage).
#
# Aufruf:  scripts/install-hooks.sh
set -euo pipefail

if ! git rev-parse --git-dir >/dev/null 2>&1; then
  echo "Fehler: Skript muss innerhalb eines Git-Repos laufen." >&2
  exit 1
fi

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
HOOK_DIR="$(git rev-parse --git-path hooks)"
HOOK="${HOOK_DIR}/pre-push"

if [ -f "${HOOK}" ]; then
  read -r -p "Pre-Push-Hook existiert bereits. Überschreiben? [j/N] " yn
  case "${yn}" in
    j|J|y|Y) ;;
    *) echo "Abgebrochen."; exit 0 ;;
  esac
fi

cat > "${HOOK}" <<EOF
#!/usr/bin/env bash
# Auto-Backup vor jedem Push (umgehbar mit --no-verify).
"${SCRIPT_DIR}/backup.sh" pre-push
EOF
chmod +x "${HOOK}"
echo "Pre-Push-Hook installiert: ${HOOK}"
echo "Backup-Skript: ${SCRIPT_DIR}/backup.sh"
