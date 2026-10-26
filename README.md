# Haunt-OS

A fake facility console for a Halloween haunted-house trailer. Everything on
screen — the transmission, the cameras, the map, the patient monitors, the
specimen viewer, the mailbox and the terminal — is a prop.

Live: https://adichiara.github.io/Haunt-OS

## Files

| File | What's in it |
|---|---|
| `index.html` | the console itself (no need to edit) |
| `content.js` | screen text, picture/video/audio file names, terminal commands, glitch settings |
| `subjects.js` | the 8 isolation subjects (Vitals, Terminal, Lab, attachments) |
| `emails.js` | every message in the Mail screen, plus the saved attachments |
| `timeline.js` | the countdown — how the facility falls apart day by day |
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

The channel starts dead. `transmission.liveFrom` in `content.js` is the day
the signal comes up, counting down to the party:

| `liveFrom` | What happens |
|---|---|
| `5` | live from the very first day |
| `4` | dead on day 5, live from day 4 on — how it is set now |
| `-1` | the channel never comes up |

While it is dead the screen reads NO SIGNAL, the waveform sits flat, and the
audio file is never even requested. `offLine1` and `offLine2` are the two
lines it shows instead.

### Adding mail

Copy any message block in `emails.js` and change it. Messages are sorted by
date automatically, so they can go anywhere in the list. Keep dates in
`YYYY-MM-DD HH:MM` form. `folder` can be `inbox`, `sent`, `archive` or `spam`.

## The countdown

The site works out how many days are left until the party and shows that
day's state. Nothing has to be updated by hand.

- Party day is `partyDate` in `timeline.js`. Change it and the whole schedule
  moves with it. `firstDay` is how many days ahead the countdown starts — 5,
  so it opens on Oct 25 and runs one step a day to Oct 30. Before Oct 25 it
  sits on the day 5 state.
- Each day brings more of the map lost, more subjects in isolation, more
  cameras dark, worse alerts and more frequent glitches.
- Mail with a `day:` arrives that many days before the party. It shows as NEW
  on its day and as read afterwards.
- After the party it stays frozen on the final state.

The day comes from the web server's clock rather than a number in the
address, so a visitor cannot skip ahead by editing the URL. The calendar date
is then worked out in the visitor's own time zone, so someone several hours
ahead of Eastern may tick over to the next day before you do.

To look at a day early, add that day's `?k=TOKEN` to the URL. Open
`index.html` from your own computer and the full list of links is printed in
the browser console (F12).

## Notes

- Videos play muted and loop. Short H.264 `.mp4` clips under ~5 MB load
  fastest. Export around 960x540 at 12–15 fps — the camera panes are 800x400,
  so a 1080p clip is decoded and thrown away, and the browser decodes every
  frame in the file whatever the screen does. `cctvFps` in `content.js` sets
  how often the pictures are repainted (15 by default, 0 = every frame).
- A camera with a clip shows ACQUIRING over static until that clip has played
  through once, then switches to the picture. The first pass is the slow one,
  so this gets it out of the way and looks like the system coming online.
- Opening `index.html` straight off disk works, but the waveform only follows
  the real voice once the site is served over http(s).
- The link-preview text (when the URL is shared in a message) is in the
  `<meta>` tags at the top of `index.html`.

### If a clip came from Kling

Kling writes H.264 with a single keyframe for the whole clip. Browsers cope,
but DaVinci Resolve fails on it with "Error decoding full resolution media"
at a seemingly random frame, on a file that is not actually damaged. Convert
before editing — any all-intra codec fixes it:

```
ffmpeg -i in.mp4 -c:v dnxhd -profile:v dnxhr_hq -pix_fmt yuv422p \
  -fps_mode cfr -r 24 -c:a pcm_s16le out.mov
```

Keep the frame rate and frame count the same as the original and Resolve's
Replace Selected Clip will swap the media without disturbing the edit.
