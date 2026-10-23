/* =====================================================================
   SUBJECTS · the isolation bay, filling up as the party gets closer
   The same records appear in Vitals, in the Mail screen's saved
   attachments, in the Terminal (subjects, subject 0-14) and on the Lab
   screen's Subject File panel.

   day      how many days before the party this one was admitted.
            They only exist on the screen from that day onward.
   stages   how they change as the days pass. The last entry whose `day`
            is still ahead of today is the one shown, so list them from
            furthest out to nearest.

   monitor: flat  = steady, then crashes to flatline
            rean  = dies, then comes back wrong
            feral = frenzied, way too fast
            husk  = no pulse, still moving
   base:    the starting numbers on the monitor
   ===================================================================== */
window.SUBJECTS = [

  { id: '0-14', day: 4, role: 'Lab technician, Lab B', age: 34, sex: 'M',
    bed: 'Bed 07', bay: 'Isolation Bay 3', exposure: 'Bite, left forearm',
    base: { hr: 74, spo2: 98, resp: 16, bp: '118/76', temp: 37.0 },
    stages: [
      { day: 4, monitor: 'flat',  stage: 'Stage 1', status: 'OBSERVATION',
        notes: 'Bitten during specimen transfer. Says it barely broke the skin. It barely broke the skin.' },
      { day: 2, monitor: 'flat',  stage: 'Stage 2', status: 'CRITICAL',
        notes: 'Fever unresponsive to treatment. Asked twice for his mother. Then stopped asking.' },
      { day: 0, monitor: 'rean',  stage: 'Stage 3', status: 'DECEASED',
        notes: 'Pronounced at 04:12. Monitor reconnected at 04:40 at the request of the night staff.' }
    ] },

  { id: '0-17', day: 3, role: 'Security officer, Checkpoint 2', age: 41, sex: 'F',
    bed: 'Bed 03', bay: 'Isolation Bay 1', exposure: 'Scratch, neck',
    base: { hr: 68, spo2: 99, resp: 14, bp: '124/80', temp: 37.4 },
    stages: [
      { day: 3, monitor: 'flat',  stage: 'Stage 1', status: 'STABLE',
        notes: 'Restrained 0-14 alone. Refused sedation. Keeps asking for her sidearm back.' },
      { day: 1, monitor: 'flat',  stage: 'Stage 2', status: 'CRITICAL',
        notes: 'Still refusing sedation. Still asking. We have stopped saying no out loud.' }
    ] },

  { id: '0-22', day: 2, role: 'Night custodian', age: 58, sex: 'M',
    bed: 'Bed 04', bay: 'Isolation Bay 1', exposure: 'Airborne (vent 7)',
    base: { hr: 72, spo2: 97, resp: 15, bp: '114/72', temp: 38.9 },
    stages: [
      { day: 2, monitor: 'flat',  stage: 'Stage 2', status: 'CRITICAL',
        notes: 'Reported knocking inside vent 7 three weeks running. Ticket closed as rats each time.' },
      { day: 1, monitor: 'rean',  stage: 'Stage 3', status: 'DECEASED',
        notes: 'Pronounced at 22:31. Monitor still reading. Nobody has turned it off.' }
    ] },

  { id: '0-23', day: 2, role: 'Graduate intern, Virology', age: 24, sex: 'F',
    bed: 'Bed 05', bay: 'Isolation Bay 2', exposure: 'Needlestick',
    base: { hr: 88, spo2: 96, resp: 18, bp: '108/70', temp: 38.2 },
    stages: [
      { day: 2, monitor: 'flat',  stage: 'Stage 1', status: 'OBSERVATION',
        notes: 'Was labelling samples at the time. Her label read "DEFINITELY NOT THE VIRUS."' },
      { day: 1, monitor: 'rean',  stage: 'Stage 3', status: 'DECEASED',
        notes: 'Her thesis defence was scheduled for next week. The committee has been notified.' }
    ] },

  { id: '0-27', day: 1, role: 'Maintenance tech, HVAC', age: 46, sex: 'M',
    bed: 'Bed 02', bay: 'Isolation Bay 1', exposure: 'Bite, right hand',
    base: { hr: 96, spo2: 95, resp: 22, bp: '140/92', temp: 39.6 },
    stages: [
      { day: 1, monitor: 'flat',  stage: 'Stage 2', status: 'CRITICAL',
        notes: 'Opened vent 7 to look for the rats. Found what had been making the noise.' },
      { day: 0, monitor: 'feral', stage: 'Stage 3', status: 'AGGRESSIVE',
        notes: 'Restraints reinforced twice. Do not make eye contact. He tracks it.' }
    ] },

  { id: '0-29', day: 1, role: 'Courier, receiving dock', age: 31, sex: 'M',
    bed: 'Bed 08', bay: 'Isolation Bay 3', exposure: 'Unknown',
    base: { hr: 102, spo2: 94, resp: 24, bp: '150/96', temp: 40.1 },
    stages: [
      { day: 1, monitor: 'feral', stage: 'Stage 3', status: 'AGGRESSIVE',
        notes: 'Not on the visitor log. The package he delivered has not been located.' }
    ] },

  { id: '0-31', day: 0, role: 'Cafeteria staff', age: 52, sex: 'F',
    bed: 'Bed 09', bay: 'Isolation Bay 4', exposure: 'Bite, shoulder',
    base: { hr: 0, spo2: 0, resp: 0, bp: '--/--', temp: 31.4 },
    stages: [
      { day: 0, monitor: 'husk', stage: 'Stage 3', status: 'NO PULSE',
        notes: 'No pulse since admission. Keeps sitting up. Staff have stopped laying her back down.' }
    ] },

  { id: '0-33', day: 0, role: 'Research scientist, Lab A', age: 39, sex: 'M',
    bed: 'Bed 10', bay: 'Isolation Bay 4', exposure: 'Bite, calf',
    base: { hr: 0, spo2: 0, resp: 0, bp: '--/--', temp: 30.8 },
    stages: [
      { day: 0, monitor: 'husk', stage: 'Stage 3', status: 'NO PULSE',
        notes: 'Lab A lead. The comms room door was sealed on him at 22:38. Tagged as last seen moving.' }
    ] }
];
