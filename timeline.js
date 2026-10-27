/* =====================================================================
   TIMELINE · the facility falls apart on a schedule
   The site works out how many days are left until the party and shows
   that day's state. Nothing needs to be updated by hand.

   DAYS COUNT DOWN. 5 means "5 days before the party". 0 is party day.
   Before the countdown starts, the earliest day below is shown.
   After the party, day 0 is shown forever (it freezes at the worst).

   Each day entry:
     breach    how much of the map is already lost, 0 to 1
     spread    seconds between new rooms falling (smaller = faster)
     lab       early | spread | full
     alert     the wording on the Alert screen
     status    the line under the transmission waveform
     every     seconds between glitches [shortest, longest]
               leave it out and it is worked out from `breach`
     styles    which glitches play; leave out to scale with `breach`

   Only the days you list here matter. A day with no entry uses the last
   entry above it, so you can leave gaps.
   ===================================================================== */
window.TIMELINE = {

  partyDate: '2026-10-30',   // day 0. Change this and everything shifts with it.
  firstDay: 5,               // the countdown starts this many days out — Oct 25

  days: {

     5: { breach: 0,    spread: 998, lab: 2,
          alert:  { title: 'NOTICE', subtitle: 'SENSOR FAULT', line: 'Maintenance ticket raised' },
          status: 'ALL CHANNELS CLEAR' },

     4: { breach: 0.06, spread: 80, lab: 9,
          alert:  { title: 'ADVISORY', subtitle: 'AIR QUALITY DEVIATION', line: 'Monitoring' },
          status: 'MINOR SIGNAL INTERFERENCE' },

     3: { breach: 0.22, spread: 40, lab: 18,
          alert:  { title: 'CAUTION', subtitle: 'CONTAINMENT DEGRADED', line: 'Lab B sealed pending review' },
          status: 'SIGNAL DEGRADED' },

     2: { breach: 0.48, spread: 24, lab: 27,
          alert:  { title: 'WARNING', subtitle: 'CONTAINMENT FAILING', line: 'Evacuation request DENIED' },
          status: 'SIGNAL WEAK' },

     1: { breach: 0.78, spread: 11, lab: 38,
          alert:  { title: 'ALERT', subtitle: 'MULTIPLE SECTORS LOST', line: 'Shelter in place' },
          status: 'SIGNAL FAILING' },

     0: { breach: 0.94, spread: 5, lab: 52,
          alert:  { title: 'ALERT', subtitle: 'CONTAINMENT BREACH', line: 'Quarantine protocol engaged' },
          status: 'LAST KNOWN TRANSMISSION' }
  },

  /* Cameras go dark on their own schedule — see `offAt` on each camera
     in content.js. A camera with offAt: 3 is lost from 3 days out. */

  /* Preview any day without waiting for it: add ?k=TOKEN to the URL.
     The tokens are printed in the browser console when the page loads
     with ?k=list — they are not guessable from the day number, so a
     visitor cannot skip ahead by editing a number in the URL. */
  previewSalt: 'sublevel-b-1031'
};
