/* =====================================================================
   CONTAINMENT TERMINAL · CONTENT FILE
   All the words, pictures, videos and audio on the page come from here.
   Edit, save, refresh.

   - Text goes in quotes '...' or backticks `...`. If your text has an
     apostrophe in it, use "double quotes" or backticks.
   - Media paths are relative to index.html, e.g. 'media/cam1.jpg'.
       Images: .jpg .png .webp    Video: .mp4 .webm    Audio: .mp3 .m4a
     Videos play muted and loop. Short loops (5–10 s, under ~5 MB) load
     fastest on phones.
   - Keep a street address off a public page.
   - If the page goes blank after an edit, a comma or quote is usually
     missing. Open the browser console (F12) to see the line number.
   ===================================================================== */
window.CONTENT = {

  /* ---------- names in the title bars ---------- */
  brand: { name: 'Haunt-OS v3.7.4', securityName: 'SECURITY SYSTEM' },

  /* ---------- the tap-to-connect screen (needed so the audio can play) ---------- */
  connect: {
    kicker: 'INCOMING TRANSMISSION',
    title:  'CHANNEL 07 · SUBLEVEL B',
    button: 'Connect',
    note:   'Sound on.'
  },

  /* ---------- Transmission screen ----------
     audio: your voiceover file. It starts when "Transmission started."
            appears, and the waveform follows it. '' = simulated voice.
     feed:  picture or video in the left panel. '' = uses camera 1.      */
  transmission: {
    audio: 'media/transmission.mp3',

    /* liveFrom: the day the signal comes up, counting down to the party.
       5 = live from the very first day. 4 = dead on day 5, live from day 4
       on. -1 = the channel never comes up. Until it does the screen reads
       NO SIGNAL, the waveform sits flat, and the audio file is never even
       requested. offLine1/offLine2 are what it says while it's dead.     */
    liveFrom: 2,
    offLine1: 'No carrier found.',
    offLine2: 'Nothing is transmitting on this channel.',

    feed: '', feedLabel: 'CAM 03',
    bootLines: ['> initializing uplink', '> searching for carrier...', '> carrier locked · routing to all frequencies'],
    connected: 'Connection established.',
    started:   'Transmission started.',
    routing:   ['Mic 1 · Channel A', 'Gain -6 dB · Encryption OFF', 'Relay ALL FREQUENCIES']
  },

  /* ---------- Security cameras ----------
     Every camera in the list on the left of the Cameras screen. Tapping one
     shows it in its own spot in the 2x2 viewer, so there's nothing to pick:
       1st, 5th, 9th, 13th camera  -> top left
       2nd, 6th, 10th, 14th        -> top right
       3rd, 7th, 11th, 15th        -> bottom left
       4th, 8th, 12th, 16th        -> bottom right
     (add slot: 1-4 to a camera to override that.)
     The first camera in each spot is what shows when the screen opens.
     src:  image or video. '' = that camera is offline (SIGNAL LOST).
     flip: true mirrors the picture. zoom: 1.3 crops in tighter.
     offAt: N makes the camera go dark N days before the party.
     (Handy for reusing one still as a "different" camera.)            */
  cams: [
    { label: 'CAM 01', sub: 'Corridor A',     src: 'media/cam1.jpg' },
    { label: 'CAM 02', sub: 'Lab Entry',      src: 'media/cam6.jpg' },
    { label: 'CAM 03', sub: 'Storage',        src: 'media/cam3.jpg' },
    { label: 'CAM 04', sub: 'Secondary',      src: 'media/cam8.jpg', offAt: 0 },
    { label: 'CAM 05', sub: 'Lab A',          src: 'media/cam9.jpg', offAt: 0 },
    { label: 'CAM 06', sub: 'Decon Bay',      src: 'media/cam11.jpg' },
    { label: 'CAM 07', sub: 'Specimen Vault', src: 'media/cam2.jpg', zoom: 1.3, offAt: 1 },
    { label: 'CAM 08', sub: 'Freight Lift',   src: '' },
    { label: 'CAM 09', sub: 'Corridor B',     src: 'media/cam5.jpg', offAt: 0 },
    { label: 'CAM 10', sub: 'Isolation Bay',  src: 'media/cam10.jpg', offAt: 0 },
    { label: 'CAM 12', sub: 'Generator Room', src: 'media/cam13.jpg', offAt: 0 },
    { label: 'CAM 13', sub: 'Vent 7 Access',  src: 'media/cam4.jpg', flip: true, zoom: 1.7, offAt: 3 },
    { label: 'CAM 14', sub: 'Stairwell C',    src: 'media/cam12.jpg', offAt: 1 },
    { label: 'CAM 15', sub: 'Comms Hall',     src: 'media/cam7.jpg' },
    { label: 'CAM 16', sub: 'Loading Dock',   src: 'media/cam1.jpg', flip: true, zoom: 1.15 }
  ],

  /* How often the camera pictures are repainted. Real CCTV is not smooth,
     and a lower rate costs much less on phones. 0 = every frame.        */
  cctvFps: 15,

  /* the group names under the camera list. Each loads its cameras at once. */
  camGroups: [
    { name: 'LAB A',       cams: ['CAM 05', 'CAM 10'] },
    { name: 'LAB B',       cams: ['CAM 02', 'CAM 07'] },
    { name: 'STORAGE',     cams: ['CAM 03', 'CAM 12'] },
    { name: 'CORRIDORS',   cams: ['CAM 01', 'CAM 09', 'CAM 14', 'CAM 15'] },
    { name: 'EXTERIOR',    cams: ['CAM 08', 'CAM 16'] },
    { name: 'ALL CAMERAS', cams: ['CAM 01', 'CAM 02', 'CAM 03', 'CAM 04'] }
  ],

  /* ---------- Map ----------
     The floor plan is fixed (the facility only has the one), so there is
     nothing to set here but the wording.                               */
  map: {
    title: 'Facility Map',
    footer: 'Level B1 // Research Wing',
    events: ['MOTION DETECTED', 'DOOR FORCED', 'CONTAINMENT FAILURE', 'AIR PRESSURE DROP',
             'BIOHAZARD SENSOR TRIPPED', 'BULKHEAD OVERRIDE', 'LIFE SIGNS IRREGULAR', 'VENT SEAL FAILURE']
  },

  /* ---------- Alert screen (also the box on the map) ---------- */
  alert: { title: 'ALERT', subtitle: 'CONTAINMENT BREACH', line: 'Quarantine protocol engaged' },

  /* ---------- Vitals: the 8 subjects live in subjects.js ---------- */

  /* ---------- Lab. Tap the specimen to change stage, tap a side panel to switch it.
     media:   image or video instead of the animated cell ('' = animated cell)
     grade:   tint for that media: green | mono | red
     overlay: track | multi | lock | scan | measure | none
     panels:  the two side panels to start with. Choose from:
              dna, culture, subject, tanks, serum, telem                 */
  lab: {
    title: 'Specimen 07-B // Live Imaging',
    media: 'media/lab3.mp4', grade: 'green', overlay: 'track',
    panels: ['dna', 'serum']
  },

  /* ---------- End card (the RESPOND tab) ---------- */
  endCard: {
    kicker: 'INCOMING TRANSMISSION',
    head:   'The rescue teams have been assembled.',
    s1name: "Logan's Rescue Party",
    s1when: 'Friday 10.30.2026 \u00b7 6\u201310 PM',
    s2name: 'Student Mentees',
    s2when: 'Saturday 10.31.2026 \u00b7 5\u20138 PM'
  },

  /* ---------- Mail screen ----------
     All the messages and saved attachments live in emails.js.       */

  /* ---------- Terminal screen ----------
     Built-in commands: help, mail, ls, open, cat, subjects, subject, status, clear.
     quick: the tap buttons under the terminal (for phones).
     commands: your own. Each one:
       cmd:    what to type (one word)
       text:   what it prints (use \n or backticks for more lines)
       about:  short description shown in HELP
       listed: true = shown in HELP, false = hidden (an easter egg)
       goto:   optional screen to jump to after printing:
               tx, cctv, map, alert, vitals, lab, files (mail), end   */
  terminal: {
    welcome: 'Type HELP for a list of commands.',
    quick: ['help', 'mail', 'ls', 'subjects', 'lockdown'],
    commands: [
      { cmd: 'lockdown', listed: true,  about: 'check lockdown status', goto: 'alert',
        text: 'LOCKDOWN ACTIVE SINCE 21:59.\nALL EXITS SEALED. OVERRIDE REQUIRES LEVEL 5.\nYOU ARE LEVEL 0.' },
      { cmd: 'vent7',    listed: true,  about: 'vent 7 sensor readout', goto: 'map',
        text: 'VENT 7 · AIRFLOW 0.0 m/s · TEMP 39.1 °C\nACOUSTIC SENSOR: rhythmic knocking, 2 per second.' },
      { cmd: 'hello',    listed: false, text: '...hello? Is someone there? — V' },
      { cmd: 'coffee',   listed: false, text: 'The coffee machine is the only thing still working down here. Nobody knows why.' },
      { cmd: 'rats',     listed: false, text: 'They are not rats.' },
      { cmd: 'exit',     listed: false, text: 'There is no exit.' },
      { cmd: 'sudo',     listed: false, text: 'Nice try.' },
      { cmd: 'joshua',   listed: false, text: 'Greetings Professor Falken...\n\nShall we play a game?' },
      { cmd: 'Joshua',   listed: false, text: 'Greetings Professor Falken...\n\nShall we play a game?' },
      { cmd: 'login',    listed: true, text: '\nPASSWORD: ' },
      { cmd: 'password2',  listed: false, text: '\nLOGIN SUCCESSFUL.\nSee video comments for more info ;)' }  
    ]
  },

  /* ---------- Glitches ----------
     auto:   true = random glitches on their own (screen changes always glitch).
     styles: which ones to use. Any of:
             shift, rgb, roll, stutter, flash, flicker, punch, crt
     every:  seconds between auto glitches, [shortest, longest].       */
  glitches: {
    auto: true,
    styles: ['shift', 'rgb', 'roll', 'stutter', 'flash', 'flicker', 'punch', 'crt'],
    every: [4, 10]
  },

  /* ---------- bottom menu labels ---------- */
  nav: { tx: 'Transmission', cctv: 'Cameras', map: 'Map', alert: 'Alert', vitals: 'Vitals', lab: 'Lab',
         files: 'Mail', term: 'Terminal', end: 'Respond' }
};
