#!/usr/bin/env bash
# Run before you push:  bash tools/check.sh
#
# A single stray apostrophe in content.js takes the whole site down with
# "content.js did not load", because the browser stops at the first syntax
# error and nothing after it exists. This catches that in two seconds.
#
# Apostrophes are the usual culprit. 'That's' ends the string early.
# Use "double quotes" or `backticks` for any text with an apostrophe in it.

cd "$(dirname "$0")/.." || exit 1
fail=0

echo "syntax"
for f in content.js subjects.js emails.js timeline.js; do
  if out=$(node --check "$f" 2>&1); then
    printf '  ok       %s\n' "$f"
  else
    printf '  BROKEN   %s\n' "$f"
    echo "$out" | sed -n '1,4p' | sed 's/^/           /'
    fail=1
  fi
done

echo "media referenced but missing"
miss=0
while read -r r; do
  [ -z "$r" ] && continue
  if [ ! -e "$r" ]; then printf '  MISSING  %s\n' "$r"; miss=1; fail=1; fi
done < <(for f in content.js subjects.js emails.js; do
           perl -0pe 's{/\*.*?\*/}{}gs' "$f" 2>/dev/null
         done | grep -ohE "media/[A-Za-z0-9_.\-]+\.(png|jpg|jpeg|webp|mp4|webm|mp3|m4a)" \
         | grep -v 'transmission\.mp3' | sort -u)
[ "$miss" = 0 ] && echo "  ok       every referenced file is present"

if [ ! -e media/transmission.mp3 ]; then
  echo "  note     media/transmission.mp3 absent — the waveform uses the simulated voice"
fi

echo "media present but unreferenced"
extra=0
while read -r f; do
  base=$(basename "$f")
  grep -qF "$base" content.js subjects.js emails.js 2>/dev/null || { printf '  unused   %s\n' "$base"; extra=1; }  # not a failure
done < <(find media -maxdepth 1 -type f \( -name '*_cam.jpg' -o -name '*.mp4' \) 2>/dev/null | sort)
[ "$extra" = 0 ] && echo "  ok       nothing orphaned"

if [ "$fail" = 0 ]; then echo; echo "PASS — safe to push"; else echo; echo "FAIL — fix the above first"; fi
exit $fail
