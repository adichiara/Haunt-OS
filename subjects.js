/* =====================================================================
   SUBJECTS · the 8 patients on the Vitals screen
   The same records appear in Files (MEDICAL/SUBJECT_xx.rec), in the
   Terminal (type: subjects, or subject 0-14) and on the Lab screen's
   Subject File panel. Keep it to 8 or fewer.

   monitor: how the heart monitor behaves
     flat  = steady, then crashes to flatline
     rean  = dies, then comes back wrong
     feral = frenzied, way too fast
     husk  = no pulse, still moving
   base: the starting numbers the monitor shows (flat and rean use them)
   ===================================================================== */
window.SUBJECTS = [
  { id: '0-14', role: 'Lab technician, Lab B', age: 34, sex: 'M',
    bed: 'Bed 07', bay: 'Isolation Bay 3', admitted: '21:58',
    exposure: 'Bite, left forearm', stage: 'Stage 2', status: 'CRITICAL',
    monitor: 'flat', base: { hr: 74, spo2: 98, resp: 16, bp: '118/76', temp: 37.0 },
    notes: 'First exposure. Bitten during specimen transfer. Asked twice for his mother. Then stopped asking.' },

  { id: '0-17', role: 'Security officer, Checkpoint 2', age: 41, sex: 'F',
    bed: 'Bed 03', bay: 'Isolation Bay 1', admitted: '22:02',
    exposure: 'Scratch, neck', stage: 'Stage 1', status: 'STABLE',
    monitor: 'flat', base: { hr: 68, spo2: 99, resp: 14, bp: '124/80', temp: 37.4 },
    notes: 'Restrained Subject 0-14 alone. Refused sedation. Keeps asking for her sidearm back.' },

  { id: '0-22', role: 'Night custodian', age: 58, sex: 'M',
    bed: 'Bed 04', bay: 'Isolation Bay 1', admitted: '22:06',
    exposure: 'Airborne (vent 7)', stage: 'Stage 3', status: 'DECEASED',
    monitor: 'rean', base: { hr: 72, spo2: 97, resp: 15, bp: '114/72', temp: 38.9 },
    notes: 'Reported knocking in vent 7 at 21:51. Pronounced at 22:31. Monitor still reading.' },

  { id: '0-23', role: 'Graduate intern, Virology', age: 24, sex: 'F',
    bed: 'Bed 05', bay: 'Isolation Bay 2', admitted: '22:08',
    exposure: 'Needlestick', stage: 'Stage 2', status: 'DECEASED',
    monitor: 'rean', base: { hr: 88, spo2: 96, resp: 18, bp: '108/70', temp: 38.2 },
    notes: 'Was labeling samples at the time. Her label read "DEFINITELY NOT THE VIRUS."' },

  { id: '0-27', role: 'Maintenance tech, HVAC', age: 46, sex: 'M',
    bed: 'Bed 02', bay: 'Isolation Bay 1', admitted: '22:12',
    exposure: 'Bite, right hand', stage: 'Stage 3', status: 'AGGRESSIVE',
    monitor: 'feral', base: { hr: 96, spo2: 95, resp: 22, bp: '140/92', temp: 39.6 },
    notes: 'Opened vent 7 to look for rats. Restraints reinforced twice. Do not make eye contact.' },

  { id: '0-29', role: 'Courier, receiving dock', age: 31, sex: 'M',
    bed: 'Bed 08', bay: 'Isolation Bay 3', admitted: '22:15',
    exposure: 'Unknown', stage: 'Stage 3', status: 'AGGRESSIVE',
    monitor: 'feral', base: { hr: 102, spo2: 94, resp: 24, bp: '150/96', temp: 40.1 },
    notes: 'Not on the visitor log. Package he delivered has not been located.' },

  { id: '0-31', role: 'Cafeteria staff', age: 52, sex: 'F',
    bed: 'Bed 09', bay: 'Isolation Bay 4', admitted: '22:19',
    exposure: 'Bite, shoulder', stage: 'Stage 3', status: 'NO PULSE',
    monitor: 'husk', base: { hr: 0, spo2: 0, resp: 0, bp: '--/--', temp: 31.4 },
    notes: 'No pulse since admission. Keeps sitting up.' },

  { id: '0-33', role: 'Research scientist, Lab A', age: 39, sex: 'M',
    bed: 'Bed 10', bay: 'Isolation Bay 4', admitted: '22:27',
    exposure: 'Bite, calf', stage: 'Stage 3', status: 'NO PULSE',
    monitor: 'husk', base: { hr: 0, spo2: 0, resp: 0, bp: '--/--', temp: 30.8 },
    notes: "Dr. Voss's lab partner. She sealed the door on him at 22:38. Tagged as last seen moving." }
];
