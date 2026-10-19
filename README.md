# Haunt-OS

A fake facility console for a Halloween haunted-house trailer. Everything on
screen — the transmission, the cameras, the breach map, the patient monitors,
the specimen viewer, the mailbox and the terminal — is a prop.

Live: https://adichiara.github.io/Haunt-OS

## Files

| File | What's in it |
|---|---|
| `index.html` | the console itself (no need to edit) |
| `content.js` | screen text, picture/video/audio file names, terminal commands, glitch settings |
| `subjects.js` | the 8 isolation subjects (Vitals, Terminal, Lab, attachments) |
| `emails.js` | every message in the Mail screen, plus the saved attachments |
| `media/` | pictures, videos and audio |

## Changing it

1. Put new pictures or videos in `media/` (jpg, png, webp, mp4, webm).
2. Open `content.js`, `emails.js` or `subjects.js` in a text editor and change
   the text or the file names.
3. Commit and push. The site updates in a minute or two.

### The voiceover

Put an audio file in `media/` named `transmission.mp3` (or change
`transmission.audio` in `content.js` to match your file name). It starts when
"Transmission started." appears and the waveform follows the real voice.
Without it, the waveform runs on a simulated voice.

### Adding mail

Copy any message block in `emails.js` and change it. Messages are sorted by
date automatically, so they can go anywhere in the list. Keep dates in
`YYYY-MM-DD HH:MM` form. `folder` can be `inbox`, `sent`, `archive` or `spam`.

## Notes

- Videos play muted and loop. Short H.264 `.mp4` clips under ~5 MB load fastest.
- Opening `index.html` straight off disk works, but the waveform only follows
  the real voice once the site is served over http(s).
- The link-preview text (when the URL is shared in a message) is in the
  `<meta>` tags at the top of `index.html`.
