/* =====================================================================
   MAIL · everything in the Mail screen
   Edit, save, refresh. Add as many messages as you like.

   Each message:
     folder:  inbox | sent | spam | archive
     date:    'YYYY-MM-DD HH:MM' for a fixed message that is always
              there (the backstory). These always show as already read.
     day:     OR, instead of `date`, how many days before the party it
              arrives. 7 means it lands 7 days out, 0 is party day. Its
              date is worked out for you. It shows as NEW on the day it
              arrives, as read after that, and does not exist before.
     from:    who it's from (a role or an office, not a person)
     addr:    their email address
     to:      who it's addressed to
     subject: the subject line
     date:    'YYYY-MM-DD HH:MM'  (24-hour clock)
     unread:  true shows it in bold with a dot
     flag:    true shows a red marker
     files:   names of attachments listed on the message (just labels)
     endCard: true adds a button that plays the party end card
     body:    the message. Use backticks `...` for more than one line.
              Wrap words in [[double brackets]] to black them out.

   The sidebar also lists SAVED ATTACHMENTS (the `attachments` list at the
   bottom of this file) for things that aren't emails. Medical records for
   the subjects in subjects.js are added to that list automatically.
   ===================================================================== */
window.EMAILS = {

  account: { name: 'PRINCIPAL INVESTIGATOR', addr: 'pi.sublevel-b@exresfac.org', org: 'ExResFac Mail' },

  folders: [
    { id: 'inbox',   name: 'Inbox' },
    { id: 'sent',    name: 'Sent' },
    { id: 'archive', name: 'Archive' },
    { id: 'spam',    name: 'Spam' }
  ],

  messages: [

  /* ---------- a newsletter the PI never quite unsubscribed from ---------- */

  { folder: 'archive', date: '2026-01-16 06:00', from: 'BRAINZ!', addr: 'digest@brainz-weekly.org',
    to: 'Principal Investigator', subject: 'BRAINZ! #184 — the word problem',
    body:
`BRAINZ!  ·  Issue 184
BRAINZ! is a weekly digest newsletter about current topics raised by
the Ambulatory Former Human (AFH) research and intellectual
communities.
Seven groups. Twelve minutes. Week of 12 January.

SETAFH · Society for the Ethical Treatment of Ambulatory Former Humans
  Position paper on the Z-word dropped Tuesday. Their line, not ours:
  every word we have was coined from behind a barricade. "Shambler"
  describes a limp. "Biter" describes one afternoon. "Walker"
  describes walking, which most of us also do.
  Six hundred replies, no agreement, and one new term that nobody
  likes, including them.

  They have asked us to change our name. We note the request with
  warmth, as we do annually.

GAIT & LOCOMOTION GROUP · why some lurk and some charge
  A member built a chart sorting observed individuals into Shamblers,
  Striders and Sprinters. It is colour-coded. It has a legend.
  The group's researchers pointed out that nothing in the data
  supports three categories, or any categories.
  The chart now has four hundred replies and a Roman numeral.

THE VITAL LINE · skeptics
  Quarterly rebuttal. "The question is not whether they are people.
  The question is why we need them to be." Quoted everywhere this
  week, almost entirely by people arguing against it.

THE FENCE LINE · residents & ordinances
  Millbrook voted 40-38 to keep "zombie" in the ordinance title. Not
  on principle. Changing it means re-notifying every household and
  the clerk is on leave until February.

LOCAL 2200 · containment operators
  The glove failure thread passed eight hundred posts and has become
  a thread about who gets the good gloves.

SECOND LIVES · sighting network
  Mods locked the members' map after somebody geotagged a residential
  address. Third time since October. The apology is longer than the
  rules it apologises for.

BRIEFLY
  · SETAFH asked an Etsy seller to stop printing their slogan on tote
    bags. The seller is a SETAFH member. It is being handled badly.
  · Somebody asked whether they can climb. They can. Briefly. Once.

You are receiving BRAINZ! because you registered at a partner
conference. Manage preferences at the link below.` },

  { folder: 'archive', date: '2026-04-24 06:00', from: 'BRAINZ!', addr: 'digest@brainz-weekly.org',
    to: 'Principal Investigator', subject: 'BRAINZ! #198 — the twelve-week trial',
    body:
`BRAINZ!  ·  Issue 198
BRAINZ! is a weekly digest newsletter about current topics raised by
the Ambulatory Former Human (AFH) research and intellectual
communities.
Eight groups. Week of 20 April.

REACH & REPEAT · rehabilitation network
  Ethics approval came through for the ambulation trial after
  fourteen months. Twelve weeks, forty participants, supervised gait
  work three times a week.
  The stated aim is quality of life. The funding application says
  quality of life nine times and does not define it once, which the
  reviewers flagged and approved anyway.
  Recruitment is reportedly straightforward. Nobody declines.

THE MOAN CORPUS · vocalisation study
  Funding refused. The reviewer's comment has been framed and hung in
  the lab: "What would you do with it if you had it?"
  They are reapplying. The new application answers the question at
  length and the lead investigator describes the answer as "spirited".

GAIT & LOCOMOTION GROUP · why some lurk and some charge
  Field season opened. Early note from the group: individuals
  observed in the morning are consistently quicker than individuals
  observed at night, and it is the same individuals.
  The chart community has been informed and is unwell.

THE FENCE LINE · residents & ordinances
  Two towns now require a warning sign. One requires it on the house,
  one on the gate, and the boundary runs through a cul-de-sac.
  Forty pages and counting. Nobody has mentioned the houses.

LOCAL 2200 · containment operators
  Hazard pay arbitration adjourned to June. Separately, and at
  considerably greater length: still no good gloves.

SECOND LIVES · sighting network
  Launched a merch line. SETAFH, who exist to object to wording,
  objected to the wording. The Vital Line objected to the existence.
  Sales are reportedly strong.

APPETITE WORKING GROUP · feeding behaviour
  Asked a streaming series to add a note clarifying that the cranial
  preference is not documented anywhere. The series added it to the
  end credits, where it appears for one second at double speed.
  The group is calling this a win and we admire that.

BRIEFLY
  · Somebody asked whether it happens to dogs. Nine hundred replies.
    No data. Every member has a theory and a photograph of their dog.
  · Media Watch is moderating comments by hand after the filter kept
    deleting the word they are arguing about.

You are receiving BRAINZ! because you registered at a partner
conference. Manage preferences at the link below.` },

  { folder: 'archive', date: '2026-08-07 06:00', from: 'BRAINZ!', addr: 'digest@brainz-weekly.org',
    to: 'Principal Investigator', subject: 'BRAINZ! #213 — one population and a thermometer',
    body:
`BRAINZ!  ·  Issue 213
BRAINZ! is a weekly digest newsletter about current topics raised by
the Ambulatory Former Human (AFH) research and intellectual
communities.
Eight groups. Week of 3 August.

GAIT & LOCOMOTION GROUP · why some lurk and some charge
  The preprint landed Monday and the community has not stopped since.
  The finding: speed tracks ambient temperature, hours upright, and
  soft-tissue condition at the hip and ankle. It does not track type,
  because there is no type.
  A charger at two in the afternoon is a shambler by midnight. The
  same one. They followed him for nine days.

  The sentence doing the damage: "You are not observing two species.
  You are observing one population and a weather report."

  The chart community has produced a rebuttal chart.

APPETITE WORKING GROUP · feeding behaviour
  Tracked the cranial preference claim to a single 1985 film and
  wrote to the director, who replied, at length, that it was a joke.
  They have published the letter. He has asked them to stop
  publishing the letter.

POST-VITAL MEDIA WATCH · depictions
  Annual footage audit, and the methodology is better than the
  finding. Every clip in the archive was filmed by somebody who
  stayed to keep filming. The archive therefore excludes every
  encounter that ended with a person getting bored and going inside.
  "We do not have a base rate of attack. We have a base rate of
  filmed attack. It is one hundred per cent and it was always going
  to be."

LOCAL 2200 · containment operators
  Four members suspended over a video. The video is of the gloves.

THE FENCE LINE · residents & ordinances
  Millbrook ordinance amended: the sign must now be reflective. The
  thread about sign dimensions is longer than the ordinance, the
  amendment, and the original complaint combined.

SECOND LIVES · sighting network
  Site down two days under the preprint traffic. Back up, slower,
  with a donation banner and a note about bandwidth that is somehow
  also about the mods.

BRIEFLY
  · The dog thread reopened. Still no data. Still everybody's dog.
  · A SETAFH chapter and a Vital Line chapter booked the same
    community hall and agreed to share it, which is the most
    encouraging item in this issue.

You are receiving BRAINZ! because you registered at a partner
conference. Manage preferences at the link below.` },

  { folder: 'sent', date: '2026-08-07 09:12', from: 'Principal Investigator', addr: 'pi.sublevel-b@exresfac.org',
    to: 'BRAINZ!', subject: 'Unsubscribe',
    body:
`Please remove this address.

I did not register at a partner conference. I attended one.` },

  { folder: 'inbox', day: 4, time: '06:00', from: 'BRAINZ!', addr: 'digest@brainz-weekly.org',
    to: 'Principal Investigator', subject: 'BRAINZ! #224 — we have made them better at it',
    body:
`BRAINZ!  ·  Issue 224
BRAINZ! is a weekly digest newsletter about current topics raised by
the Ambulatory Former Human (AFH) research and intellectual
communities.
Nine groups. Week of 26 October.

REACH & REPEAT · rehabilitation network
  Twelve-week ambulation trial reported. Gait quality improved
  measurably. Aggression incidents fell by a third. Three
  participants can now manage stairs.
  Then the finding nobody wanted: the participants who improved most
  are the ones who can now move fastest.
  The ethics panel has split and the minority report is one sentence.
  "We have made them better. We have also made them better at it."

  The speech wing reports three reliably distinguishable
  vocalisations after six months of articulation work. One
  participant may have produced "door". The argument about whether
  that counts is now longer than the study, the trial, and the
  fourteen months of ethics approval that preceded both.

GAIT & LOCOMOTION GROUP · why some lurk and some charge
  Following the summer preprint, the group has asked the community to
  retire the words Shambler, Strider and Sprinter on the grounds that
  all three describe the same individual on different afternoons.
  The chart community has retired nothing. The chart now has tabs.

THE MOAN CORPUS · vocalisation study
  Forty thousand recordings analysed. The moan has consistent
  internal structure, varies reliably between individuals, and
  changes when others are present.
  "We can tell you it is not random. We cannot tell you it is speech.
  We would like more funding and fewer journalists."

APPETITE WORKING GROUP · feeding behaviour
  Forty years of observation and not one verified instance of
  selective cranial preference. Not once. The group has formally
  asked media outlets to stop repeating it.
  This newsletter has been contacted. This newsletter has no comment.

SETAFH · Society for the Ethical Treatment of Ambulatory Former Humans
  Annual Halloween statement, same as every year and a little
  shorter. Since the Z-word paper they have stopped explaining and
  started linking.
  They have also asked us to change our name. They ask every year. We
  remain fond of it.

THE FENCE LINE · residents & ordinances
  Halloween guidance issued in four counties. Two ask residents to
  avoid the costume. One asks them to avoid the decoration. One asks
  them to avoid the subject.

LOCAL 2200 · containment operators
  Two years of this local's board has been one thread about glove
  failures. Management finally issued new gloves. The thread is now
  about the old gloves.

SECOND LIVES · sighting network
  Members' map locked until November 2nd for the seasonal traffic.
  This went down about as well as every other time they have locked
  it, which they knew, and did anyway, and said so.

THE VITAL LINE · skeptics
  "The question is not whether they are people. The question is why
  we need them to be."
  Two years, no proper answer, several thousand loud ones.

BRIEFLY
  · Somebody asked in April whether it happens to dogs. Nine hundred
    replies, no data, every member's own dog entered as evidence.
    This week the thread produced a photograph. It is not conclusive.
    Nothing about it is conclusive. It is a photograph of a dog.
  · Somebody asked what the plural is. Nobody has recovered.

You are receiving BRAINZ! because you registered at a partner
conference. Manage preferences at the link below.` },

  { folder: 'inbox', day: 1, time: '06:00', flag: true, from: 'BRAINZ!', addr: 'digest@brainz-weekly.org',
    to: 'Principal Investigator', subject: 'BRAINZ! — special edition — containment research',
    body:
`BRAINZ!  ·  Special Edition
BRAINZ! is a weekly digest newsletter about current topics raised by
the Ambulatory Former Human (AFH) research and intellectual
communities.

29 October. We are off schedule. The reason is below.

The editor is aware that this week of all weeks our name sits
poorly against the subject matter. It has been raised internally.
It has been raised externally. It is being kept.

A JOINT STATEMENT

  The Society for the Ethical Treatment of Ambulatory Former Humans,
  the Gait & Locomotion Group and the Reach & Repeat rehabilitation
  network agree on almost nothing and have never co-signed anything.
  This week they did. It is four sentences:

    Every facility doing this work holds an exemption on the same
    ground — that the subject was not a living human subject at
    intake. The finding is made once, at the one moment the subject
    cannot object, and never made again.

    We do not dispute the finding. We dispute that making it once
    counts as making it.

  They are asking for redetermination at intervals, by somebody who
  did not do the enrolling.

  We are aware that a portion of this list works at such facilities.
  We have not removed anyone from the distribution. We would rather
  you read it.

THE VITAL LINE declined to sign and published why. For once they are
not the most uncomfortable voice in the room:

  "We have said for four years that these are not people. We have
  never once said that this makes them yours."

Regular issue resumes Monday. The dog thread continues regardless.` },

  /* ---------- the review board ---------- */
  { folder: 'sent', date: '2025-11-04 16:22', from: 'Principal Investigator', addr: 'pi.sublevel-b@exresfac.org',
    to: 'Institutional Review Board', subject: 'Request for exemption determination — Protocol B-07',
    files: ['B-07_exemption_request.pdf'],
    body:
`Submitting for exemption determination under the non-human-subjects
category.

The protocol involves observation of subjects who, at the time of
enrollment, no longer meet the regulatory definition of a living human
subject. Vital signs are absent. Responsiveness to name, to language and
to pain is absent. Ambulation is present.

As the determination of human subject status is made at the point of
enrollment, and as no enrolled subject met that definition at that point,
we believe the protocol falls outside the board's purview.

Supporting documentation attached. Happy to discuss.` },

  { folder: 'inbox', date: '2025-11-19 10:41', unread: false, from: 'Institutional Review Board', addr: 'irb-office@exresfac.org',
    to: 'Principal Investigator', subject: 'RE: Request for exemption determination — Protocol B-07',
    body:
`The board has reviewed your request and has three points of clarification
before a determination can be issued.

1. The protocol states subjects are "not human subjects" but does not
   state what they are. Please complete Section 4b.
2. If subjects cannot consent, and next of kin cannot be reached, and the
   subject is ambulatory, who signs?
3. The board does not currently have a form for this. We are asking the
   university whether to make one.

A revised consent document is required regardless of determination. The
template is on the portal. The portal is down.

Please respond within 30 days.` },

  { folder: 'sent', date: '2025-11-21 08:03', from: 'Principal Investigator', addr: 'pi.sublevel-b@exresfac.org',
    to: 'Institutional Review Board', subject: 'RE: RE: Request for exemption determination — Protocol B-07',
    body:
`Re: point 2 — the subject does sign. Twice, in one case. We have the form.

Re: point 1 — Section 4b now reads "pending classification."

Re: the portal — understood.` },

  { folder: 'inbox', date: '2026-02-02 09:15', unread: false, from: 'Office of Research Compliance', addr: 'compliance@exresfac.org',
    to: 'All Protocol Holders', subject: 'ACTION REQUIRED: Continuing review overdue (Protocol B-07)',
    body:
`Our records indicate continuing review for Protocol B-07 is 46 days
overdue. Enrollment must be suspended until review is complete.

Please confirm that enrollment has been suspended.

This is an automated message. Replies are not monitored.` },

  { folder: 'sent', date: '2026-02-02 09:31', from: 'Principal Investigator', addr: 'pi.sublevel-b@exresfac.org',
    to: 'Office of Research Compliance', subject: 'RE: ACTION REQUIRED: Continuing review overdue (Protocol B-07)',
    body: 'Confirming that enrollment has been suspended. Enrollment is, at this stage, not something we control.' },

  /* ---------- journals ---------- */
  { folder: 'archive', date: '2025-12-08 14:50', from: 'Journal of Applied Biocontainment', addr: 'no-reply@manuscriptdesk.jabc.org',
    to: 'Principal Investigator', subject: 'Submission received — JABC-2025-11847',
    body:
`Thank you for submitting your manuscript:

"Thermoregulatory Collapse and Persistent Ambulation in a Large-Animal
Model: A Prospective Case Series"

Manuscript ID: JABC-2025-11847
Status: With Editor

You may track the status of your submission at any time by logging in.
Please do not log in more than once per day. We can see you.` },

  { folder: 'inbox', date: '2025-12-11 17:02', unread: false, from: 'Journal of Applied Biocontainment', addr: 'editorial@jabc.org',
    to: 'Principal Investigator', subject: 'Decision — JABC-2025-11847',
    body:
`Dear Author,

Thank you for submitting your manuscript to the Journal of Applied
Biocontainment. After an initial assessment, we regret that we are unable
to send it out for review. The subject matter, while interesting, is not
a good fit for our readership.

We receive many more submissions than we can publish and this decision
is not a reflection of the quality of your work.

We wish you success in placing it elsewhere.` },

  { folder: 'inbox', date: '2026-03-17 11:28', unread: false, from: 'Annals of Containment Medicine', addr: 'editorial@annalscm.org',
    to: 'Principal Investigator', subject: 'Reviewer comments — ACM-0442 (Major Revision)',
    files: ['ACM-0442_reviews.pdf'],
    body:
`Three reviews are enclosed. The editor invites a major revision.

REVIEWER 1: Clear, well-powered, an important contribution. Minor edits
only. Recommend acceptance.

REVIEWER 2: The authors appear unfamiliar with the literature, in
particular with the foundational work of [[REDACTED]] (2019), which they
do not cite. The sample size is inadequate. The statistical approach is
inappropriate. The figures are illegible. I question whether the authors
observed what they claim to have observed. I recommend rejection, and
suggest the authors read [[REDACTED]] (2019) before resubmitting
anywhere.

REVIEWER 3: "Looks fine."

Please submit a point-by-point response to all 41 comments.` },

  { folder: 'sent', date: '2026-04-02 23:47', from: 'Principal Investigator', addr: 'pi.sublevel-b@exresfac.org',
    to: 'Annals of Containment Medicine', subject: 'Response to reviewers — ACM-0442',
    files: ['ACM-0442_response_to_reviewers.docx', 'ACM-0442_revised_clean.docx', 'ACM-0442_revised_tracked.docx'],
    body:
`Please find the revised manuscript and our point-by-point response.

We thank the reviewers for their careful reading.

Regarding Reviewer 2's comment on the 2019 work: we have now cited it.
We were unable to locate a copy, as it does not appear to be indexed, or
published, or to exist. We have cited it anyway.` },

  { folder: 'inbox', date: '2026-05-26 08:14', unread: false, from: 'Annals of Containment Medicine', addr: 'editorial@annalscm.org',
    to: 'Principal Investigator', subject: 'Decision — ACM-0442',
    body:
`After consideration of your revision, we regret to inform you that we
are unable to accept the manuscript for publication.

Reviewer 2 has raised additional concerns, including several relating to
material added at Reviewer 2's request.

We appreciate the opportunity to consider your work.` },

  { folder: 'inbox', date: '2026-07-30 13:09', unread: false, flag: true, from: 'Letters in Rapid Pathogenesis', addr: 'office@lrp-letters.org',
    to: 'Principal Investigator', subject: 'ACCEPTED — LRP-1193',
    body:
`We are pleased to inform you that your manuscript

"Sixteen Minutes: Revised Incubation Kinetics for a Novel Transmissible
Agent"

has been accepted for publication.

Please remit the article processing charge of 4,180 USD within 14 days.
Please also complete the colour figure surcharge form, the open access
licence form, and the form confirming you have completed the other two
forms.

Congratulations on this achievement.` },

  { folder: 'sent', date: '2026-08-14 10:55', from: 'Principal Investigator', addr: 'pi.sublevel-b@exresfac.org',
    to: 'Journal of Neurodegenerative Processes', subject: 'Submission — "Loss of Nociceptive Response as an Early Marker of Stage Transition"',
    body:
`Attached please find our manuscript for consideration as a Brief Report.

The work has not been published elsewhere and is not under consideration
elsewhere.

We suggest the following reviewers, and respectfully request the
exclusion of one (named in the cover letter) on grounds of a documented
history.` },

  /* ---------- the spam folder ---------- */
  { folder: 'spam', date: '2026-01-09 03:17', unread: true, from: 'Intl. Congress on Advanced Life Sciences', addr: 'invitations@icals-summit.info',
    to: 'Undisclosed recipients', subject: 'Invitation to be KEYNOTE SPEAKER — ICALS 2026 (Dubai)',
    body:
`Respected Dr. Pricipal Invesitgator,

Greetings of the day!! We have gone through your esteemed article and we
are highly impressed by your eminent contribution in the field of
PODIATRIC SPORTS MEDICINE.

It is our immense pleasure to invite you as KEYNOTE SPEAKER at the 14th
Intl. Congress on Advanced Life Sciences, to be held at a venue to be
confirmed.

Registration: 1,290 USD (speakers), 1,290 USD (non-speakers).
Accommodation, travel, meals and the venue are not included.

Kindly revert with your esteemed confirmation at your earliest.
Awaiting your positive response!!

Warm regards,
Conference Secretariat (Ms.)` },

  { folder: 'spam', date: '2026-01-09 03:19', unread: true, from: 'Intl. Congress on Advanced Life Sciences', addr: 'invitations@icals-summit.info',
    to: 'Undisclosed recipients', subject: 'Gentle Reminder: Invitation to be KEYNOTE SPEAKER — ICALS 2026',
    body: 'Respected Dr. Pricipal Invesitgator,\n\nKindly revert.' },

  { folder: 'spam', date: '2026-02-26 02:44', unread: true, from: 'Open Science Publishing Group', addr: 'billing@osp-group.biz',
    to: 'Principal Investigator', subject: 'INVOICE #88213 — Article Processing Charge OVERDUE',
    body:
`Dear Author,

Our records show an unpaid balance of 2,950 USD for the processing of
your article in the International Journal of Interdisciplinary Studies.

Please remit payment to avoid withdrawal of your published work.

(If you have not submitted an article to us, please disregard this
notice, or pay it anyway to avoid confusion.)` },

  { folder: 'spam', date: '2026-04-11 04:02', unread: true, from: 'Journal of Dental Economics', addr: 'editor-in-chief@jde-openaccess.net',
    to: 'Esteemed Researcher', subject: 'Call for Papers — your expertise is needed!',
    body:
`Dear Esteemed Researcher,

Having read your remarkable paper, we believe your expertise in dental
economics would greatly enrich our special issue.

Rapid peer review (48 hours). Acceptance rate: high.

We also invite you to join our EDITORIAL BOARD. No duties are required.` },

  { folder: 'spam', date: '2026-06-03 01:58', unread: true, from: 'Global Research Awards Committee', addr: 'awards@grac-recognition.org',
    to: 'Principal Investigator', subject: 'You have been SELECTED — Scientist of the Year 2026',
    body:
`Congratulations! Following a rigorous selection process, you have been
selected for the Scientist of the Year award.

To claim your award, please complete the nomination form and remit the
administration fee of 495 USD.

Plaque, certificate and digital badge included. Shipping extra.` },

  { folder: 'spam', date: '2026-09-22 05:31', unread: true, from: 'IT Helpdesk', addr: 'it-support@exresfac-secure-mail.org',
    to: 'Principal Investigator', subject: 'URGENT: Your mailbox storage is FULL — action required within 24h',
    body:
`Dear User,

Your mailbox has exceeded its storage quota of 99.9%. You will be unable
to send or receive messages.

CLICK HERE TO VALIDATE YOUR ACCOUNT AND RESTORE SERVICE

Failure to validate within 24 hours will result in permanent deletion of
all messages.

Thank you,
IT Helpdesk Team` },

  /* ---------- the building ---------- */
  { folder: 'inbox', date: '2026-09-29 02:14', unread: false, flag: true, from: 'Freezer Monitoring (automated)', addr: 'alarms@exresfac.org',
    to: 'Sublevel B Distribution', subject: 'ALARM: Unit B-03 (-80C) temperature excursion',
    body:
`UNIT:        B-03
LOCATION:    SUBLEVEL B, LAB B
SET POINT:   -80.0 C
CURRENT:     -61.4 C
CONDITION:   DOOR AJAR
DURATION:    00:22:08

This is the fourth notification. Acknowledge in the portal.` },

  { folder: 'inbox', date: '2026-09-29 02:51', unread: false, from: 'Freezer Monitoring (automated)', addr: 'alarms@exresfac.org',
    to: 'Sublevel B Distribution', subject: 'RESOLVED: Unit B-03 (-80C) temperature excursion',
    body: 'UNIT B-03 has returned to set point.\n\nDuration of excursion: 00:58:51.\nContents: see attached inventory.\nInventory: not attached.' },

  { folder: 'inbox', date: '2026-08-19 15:33', unread: false, from: 'Core Imaging Facility', addr: 'core-imaging@exresfac.org',
    to: 'Principal Investigator', subject: 'Booking conflict — Confocal 2, Thursday 09:00-17:00',
    body:
`Your lab has booked Confocal 2 for eight consecutive hours on Thursday.

Another group has raised this with us. Per the shared-use policy, blocks
over four hours require justification.

Please also note that the previous user has reported finding the stage
"sticky." We would ask all users to clean up after sessions.

We are not accusing anyone.` },

  { folder: 'inbox', date: '2026-08-20 09:02', unread: false, from: 'Core Imaging Facility', addr: 'core-imaging@exresfac.org',
    to: 'Principal Investigator', subject: 'RE: Booking conflict — Confocal 2',
    body: 'Thank you for the justification. "It is moving and we would like to see why" has been accepted.' },

  { folder: 'inbox', date: '2026-07-02 11:47', unread: false, from: 'Purchasing', addr: 'purchasing@exresfac.org',
    to: 'Principal Investigator', subject: 'Backorder notice — PO 44817',
    body:
`The following item is on backorder:

  ITEM:  Nitrile gloves, size M, 100ct (case of 10)
  LEAD:  16 weeks
  NOTE:  Manufacturer reports "unprecedented demand"

Substitution available: size XS or size XXL.

Please confirm which you would like.` },

  { folder: 'inbox', date: '2026-06-15 08:00', unread: false, from: 'Environmental Health & Safety', addr: 'ehs@exresfac.org',
    to: 'All Laboratory Personnel', subject: 'OVERDUE: 4 required training modules',
    body:
`Our records indicate the following modules are overdue for personnel in
your area:

  - Bloodborne Pathogens (annual)         OVERDUE 211 days
  - Biosafety Level 4 Practices (annual)  OVERDUE 184 days
  - Emergency Egress & Assembly           OVERDUE 184 days
  - Workplace Civility                    OVERDUE 9 days

Laboratory access may be suspended for personnel with overdue modules.

Each module takes approximately 45 minutes. The civility module takes
two hours.` },

  { folder: 'inbox', date: '2026-05-04 16:20', unread: false, from: 'Facilities', addr: 'facilities@exresfac.org',
    to: 'All Staff', subject: 'Autoclave 2 out of service',
    body:
`Autoclave 2 is out of service pending repair. Estimated return: 3 weeks.

Please route all loads to Autoclave 1.

Please do not route all loads to Autoclave 1 at the same time.` },

  { folder: 'inbox', date: '2026-10-06 07:45', unread: true, from: 'Environmental Health & Safety', addr: 'ehs@exresfac.org',
    to: 'Sublevel B Distribution', subject: 'Biosafety cabinet certification due — BSC-7, BSC-9',
    body:
`Annual certification for BSC-7 and BSC-9 expires in 11 days.

Cabinets may not be used for work with infectious material after the
expiration date.` },

  /* ---------- funding and sponsor ---------- */
  { folder: 'inbox', date: '2026-03-02 12:11', unread: false, from: 'Office of Sponsored Programs', addr: 'osp@exresfac.org',
    to: 'Principal Investigator', subject: 'Resubmission deadline — 14 days',
    body:
`A reminder that the resubmission deadline is in 14 days. Internal
routing closes 5 business days prior, which is in 7 days, which is
Tuesday.

Required at routing: budget, budget justification, facilities statement,
data management plan, biosketches, and the one-page summary of what
changed since the last submission.

Reviewer 2 on the last submission was also one of your journal reviewers.
We are not permitted to tell you that.` },

  { folder: 'inbox', date: '2026-09-11 10:28', unread: false, from: 'Program Office', addr: 'program-office@fundingbody.gov',
    to: 'Principal Investigator', subject: 'Annual report — clarification on scope',
    body:
`Thank you for the annual report.

The report describes several lines of work that do not appear in the
approved aims. Specific Aim 2 was a characterization study. The report
describes containment.

Please clarify whether this represents a change in scope, and if so,
submit a prior-approval request.

We would also note the budget shows a significant increase in the line
item for restraints. Please provide a justification.` },

  { folder: 'inbox', date: '2026-10-07 09:40', unread: true, flag: true, from: 'Sponsor Liaison — Contract 4417', addr: 'liaison@hbr-industrial.com',
    to: 'Principal Investigator', subject: 'Milestone 6 deliverable — now 32 days late',
    body:
`Milestone 6 was due 32 days ago. We have not received the deliverable or
a revised schedule.

Per section 11.2, continued delay without written notice permits us to
withhold the quarterly payment.

We understand that research timelines are uncertain. We also understand
that we have a board meeting on the 14th.

Please advise today.` },

  { folder: 'sent', date: '2026-10-07 18:52', from: 'Principal Investigator', addr: 'pi.sublevel-b@exresfac.org',
    to: 'Sponsor Liaison — Contract 4417', subject: 'RE: Milestone 6 deliverable — now 32 days late',
    body:
`A revised schedule will follow this week.

The delay relates to the agent behaving differently than modelled at
every timepoint after 40 minutes. We would rather be late than wrong.

I would welcome a conversation about the schedule generally.` },

  /* ---------- inbox life ---------- */
  { folder: 'inbox', date: '2026-10-12 06:00', unread: true, from: 'IT Service Desk', addr: 'no-reply@exresfac.org',
    to: 'Principal Investigator', subject: 'Your password expires in 3 days',
    body:
`Your network password will expire in 3 days.

New passwords must be at least 14 characters and must include an
uppercase letter, a lowercase letter, a number, a symbol, and must not
resemble any of your previous 24 passwords.

Passwords may not be written down.` },

  { folder: 'inbox', date: '2026-10-13 11:15', unread: true, from: 'All-Staff', addr: 'all-staff@exresfac.org',
    to: 'All Staff', subject: 'Parking lot C resurfacing — October 20 to November 3',
    body:
`Lot C will be closed for resurfacing. Please use Lot A or Lot D.

Lot A is permit-only. Lot D is closed.

Thank you for your flexibility.` },

  { folder: 'inbox', date: '2026-10-13 11:31', unread: true, from: 'Reply-All', addr: 'staff-member-1@exresfac.org',
    to: 'All Staff', subject: 'RE: Parking lot C resurfacing — October 20 to November 3',
    body: 'Please remove me from this list.' },

  { folder: 'inbox', date: '2026-10-13 11:33', unread: true, from: 'Reply-All', addr: 'staff-member-2@exresfac.org',
    to: 'All Staff', subject: 'RE: RE: Parking lot C resurfacing — October 20 to November 3',
    body: 'Me too please.' },

  { folder: 'inbox', date: '2026-10-13 11:38', unread: true, from: 'Reply-All', addr: 'staff-member-3@exresfac.org',
    to: 'All Staff', subject: 'RE: RE: RE: Parking lot C resurfacing — October 20 to November 3',
    body: 'STOP REPLYING ALL' },

  { folder: 'inbox', date: '2026-10-13 11:39', unread: true, from: 'Reply-All', addr: 'staff-member-4@exresfac.org',
    to: 'All Staff', subject: 'RE: RE: RE: RE: Parking lot C resurfacing — October 20 to November 3',
    body: 'Sorry, ignore, wrong list.' },

  { folder: 'inbox', date: '2026-10-14 08:05', unread: true, from: 'Human Resources', addr: 'hr@exresfac.org',
    to: 'All Staff', subject: 'Reminder: Fall Wellness Challenge — log your steps!',
    body:
`There is still time to join the Fall Wellness Challenge!

Participants who log 10,000 steps per day for four weeks will be entered
into a drawing for a 25 USD gift card.

Sublevel B personnel: the step tracker does not receive signal below
grade. Please estimate.` },

  { folder: 'inbox', date: '2026-10-15 13:22', unread: true, from: 'Building Services', addr: 'bldg-services@exresfac.org',
    to: 'All Staff', subject: 'Break room refrigerator will be emptied Friday',
    body:
`The break room refrigerator will be emptied at 5:00 PM Friday. Anything
remaining will be discarded.

Please note that items labelled as laboratory samples will also be
discarded, as the refrigerator is not a laboratory refrigerator.

Several items are not labelled at all. One is labelled "DEFINITELY NOT
THE VIRUS." It will be discarded.` },

  { folder: 'inbox', date: '2026-10-16 09:30', unread: true, from: 'Lab A Coordination', addr: 'lab-a-coord@exresfac.org',
    to: 'Sublevel B Distribution', subject: 'Quick question',
    body: 'Do you have a minute?' },

  { folder: 'inbox', date: '2026-10-16 15:44', unread: true, from: 'Training & Development', addr: 'learning@exresfac.org',
    to: 'All Staff', subject: 'Lunch & Learn: "Managing Difficult Conversations" — Thursday 12:00',
    body:
`Join us Thursday for a Lunch & Learn on managing difficult conversations.

Lunch is not provided.

This session is mandatory for supervisory staff and strongly encouraged
for everyone else.` },

  { folder: 'inbox', date: '2026-10-17 08:12', unread: true, from: 'Calendar', addr: 'calendar@exresfac.org',
    to: 'Principal Investigator', subject: 'Invitation: Weekly Sync (recurring) — Mon 09:00, 60 min',
    body:
`You have been invited to a recurring meeting.

  WHEN:     Mondays, 09:00 - 10:00
  WHERE:    Conference Room 2 / remote
  AGENDA:   (none provided)
  ATTENDEES: 23

Accept  ·  Decline  ·  Propose New Time` },

  { folder: 'inbox', date: '2026-10-17 16:50', unread: true, from: 'Recruiter', addr: 'talent@apex-biosolutions-recruiting.com',
    to: 'Principal Investigator', subject: 'Exciting opportunity matching your background!',
    body:
`Hi there,

I came across your profile and was really impressed by your experience.

I'm working with a fast-growing client in the biotech space looking for a
Senior Scientist. Competitive comp, great culture, hybrid.

Would you be open to a quick 15-minute chat this week?` },

  { folder: 'inbox', date: '2026-10-18 07:58', unread: true, from: 'Lab A Coordination', addr: 'lab-a-coord@exresfac.org',
    to: 'Principal Investigator', subject: 'Per my last email',
    body: 'Following up on the below. Per my last email, do you have a minute?' },

  /* ---------- the countdown ----------
     These arrive one day at a time. `day` is how many days before the
     party. Copy a block, change the day, and it slots into place.     */

  { folder: 'inbox', day: 5, time: '09:14', from: 'Maintenance', addr: 'maintenance@exresfac.org',
    to: 'Sublevel B Distribution', subject: 'Work order 4471 closed — vent 7',
    body:
`Attended. No fault found. Ductwork sound, dampers operating, no
obstruction visible from the access hatch.

Noise reported by night staff is consistent with rodent activity.
Bait stations placed.

Closing as resolved. Please reopen if the noise persists.` },

  { folder: 'inbox', day: 5, time: '07:32', from: 'Air Handling (automated)', addr: 'alarms@exresfac.org',
    to: 'Sublevel B Distribution', subject: 'Advisory: particulate deviation — Sublevel B',
    body:
`ZONE:      SUBLEVEL B
READING:   0.41 (threshold 0.30)
DURATION:  6 h 20 m
SOURCE:    UNDETERMINED

Advisory only. No action required at this level.
Filters were replaced 9 days ago.` },

  { folder: 'inbox', day: 5, time: '16:48', from: 'Lab B Floor Lead', addr: 'lab-b-floor@exresfac.org',
    to: 'Principal Investigator', subject: 'B-07 overnight plate counts',
    body:
`The overnight counts are wrong. I ran them twice.

Either the incubator is miscalibrated or the doubling time has dropped
by an order of magnitude since Friday.

I would like someone to check my arithmetic before I put this anywhere
official.` },

  { folder: 'sent', day: 4, time: '08:05', from: 'Principal Investigator', addr: 'pi.sublevel-b@exresfac.org',
    to: 'Lab B Floor Lead', subject: 'RE: B-07 overnight plate counts',
    body: 'Your arithmetic is fine.\n\nRun it again tonight. Alone, and on the sealed bench.' },

  { folder: 'inbox', day: 4, time: '13:27', from: 'Security', addr: 'security@exresfac.org',
    to: 'Sublevel B Distribution', subject: 'Door sensor fault — Lab B',
    body:
`The Lab B door is reporting OPEN while physically closed. Engineering
has been notified.

In the meantime the access log for that door should be treated as
unreliable. Please badge in as normal regardless.` },

  { folder: 'inbox', day: 4, time: '06:51', from: 'Occupational Health', addr: 'occhealth@exresfac.org',
    to: 'Principal Investigator', subject: 'Exposure report — Lab B (1 of 1)',
    body:
`An exposure incident was logged at 04:40.

Personnel admitted to isolation for observation as a precaution. The
wound is minor. Standard protocol is 48 hours.

We anticipate a routine discharge.` },

  { folder: 'inbox', day: 4, time: '11:02', from: 'Environmental Health & Safety', addr: 'ehs@exresfac.org',
    to: 'All Laboratory Personnel', subject: 'Reminder: respirator fit testing this week',
    body:
`Fit testing is available Tuesday and Wednesday in the training room.

Testing is required annually for all personnel working in Level 3 and
Level 4 spaces.

Sublevel B personnel: your scheduled slot conflicts with the all-hands
meeting. Please attend both.` },

  { folder: 'inbox', day: 3, time: '09:40', from: 'Security Systems (automated)', addr: 'alarms@exresfac.org',
    to: 'Sublevel B Distribution', subject: 'Camera offline — CAM 3 (Utility Corridor)',
    body:
`CAM 3 (Utility Corridor) has stopped reporting. Last frame 09:38. This
is the camera covering the Vent 7 access, which is the third fault
raised on that run this month.

A service request has been raised. Current queue time for non-critical
camera faults is 6 weeks.` },

  { folder: 'inbox', day: 3, time: '15:19', from: 'Lab B Floor Lead', addr: 'lab-b-floor@exresfac.org',
    to: 'Principal Investigator', subject: 'Ran it again. Alone. Sealed bench.',
    body:
`Doubling time is down by a factor of nine from the figures in the
protocol.

The culture is also no longer confined to the medium. There is growth
on the underside of the plate lid.

I have sealed Lab B. Nobody in or out until you have seen this.` },

  { folder: 'inbox', day: 3, time: '07:15', from: 'Occupational Health', addr: 'occhealth@exresfac.org',
    to: 'Principal Investigator', subject: 'Exposure report — Lab B (2 of 2)',
    body:
`A second exposure was logged overnight during restraint of the first
patient.

Both are now in isolation. The second declined sedation and has asked
repeatedly for the return of her duty weapon.

Observation extended to 96 hours.` },

  { folder: 'spam', day: 3, time: '02:58', from: 'World Summit on Emerging Pathogens', addr: 'secretariat@wsep-global.info',
    to: 'Undisclosed recipients', subject: 'Final Call — Abstract deadline EXTENDED (3rd extension)',
    body:
`Dear Dr. Pricipal Invesitgator,

Due to overwhelming response, the abstract deadline has been extended
for the third time.

Submit your esteemed abstract today and receive a 5% early-bird
discount on the registration fee of 1,490 USD.

Topics of interest include but are not limited to: all topics.` },

  { folder: 'inbox', day: 2, time: '05:44', from: 'Occupational Health', addr: 'occhealth@exresfac.org',
    to: 'Principal Investigator', subject: 'Isolation census — 4 occupied',
    body:
`Bay occupancy has doubled overnight. Two further admissions:

  - night custodian, airborne exposure, vent 7
  - graduate intern, needlestick

We are now at 4 of 6 beds. Please advise whether to open Bay 2.

The custodian has asked whether the knocking in vent 7 was ever
investigated. I did not have an answer for him.` },

  { folder: 'sent', day: 2, time: '08:30', from: 'Principal Investigator', addr: 'pi.sublevel-b@exresfac.org',
    to: 'Facility Director', subject: 'Request: evacuate and seal Sublevel B',
    files: ['B-07_incident_summary.pdf'],
    body:
`I am requesting immediate evacuation of Sublevel B and a hard seal of
the level pending external review.

Incubation is now under one hour. Four personnel are in isolation. The
agent is no longer confined to Lab B and I can no longer account for
its route.

I am aware of what this does to the quarter. I am asking anyway.` },

  { folder: 'inbox', day: 1, time: '10:12', from: 'Facility Director', addr: 'director@exresfac.org',
    to: 'Principal Investigator', subject: 'RE: Request: evacuate and seal Sublevel B',
    body:
`Request reviewed and denied.

An evacuation at this stage would trigger notification requirements we
are not in a position to meet before the end of the quarter, and the
sponsor review is on the 14th.

Continue containment at the local level. Keep it off email.

I have every confidence in your team.` },

  { folder: 'inbox', day: 1, time: '18:55', from: 'Lab B Floor Lead', addr: 'lab-b-floor@exresfac.org',
    to: 'Principal Investigator', subject: 'The custodian',
    body:
`He stopped breathing at 22:31 last night.

The monitor is still counting. Slower than a heartbeat should be, and
in a rhythm I have not seen before.

I have not turned it off. I would like instructions.` },

  { folder: 'inbox', day: 1, time: '04:03', from: 'Containment Systems (automated)', addr: 'alarms@exresfac.org',
    to: 'Sublevel B Distribution', subject: 'Seal integrity 61% — Sublevel B',
    body:
`PRIMARY SEAL:   61% (threshold 85%)
SECONDARY SEAL: 88%
AIR HANDLING:   RECIRCULATING
VENT 7 DAMPER:  OPEN — MANUAL OVERRIDE AT PANEL

The manual override was engaged at 03:51 from inside the level.` },

  { folder: 'inbox', day: 1, time: '12:30', from: 'Human Resources', addr: 'hr@exresfac.org',
    to: 'All Staff', subject: 'Halloween costume guidelines',
    body:
`A reminder that costumes are welcome but must not include:

  - masks that obscure the face at badge readers
  - fake blood on or near laboratory spaces
  - anything resembling personal protective equipment

Sublevel B personnel are exempt from the third item for obvious
reasons.

Prizes will be awarded for best costume.` },

  { folder: 'inbox', day: 0, time: '03:21', from: 'Security Systems (automated)', addr: 'alarms@exresfac.org',
    to: 'Sublevel B Distribution', subject: 'Multiple cameras offline — Sublevel B',
    body:
`The following feeds have stopped reporting within the last 40 minutes:

  CAM 5   Lab A
  CAM 7   Specimen Storage
  CAM 11  Armory

No fault is reported on the network path. The cameras are receiving
power.

Service request raised.` },

  { folder: 'inbox', day: 0, time: '19:47', from: 'Lab A Night Lead', addr: 'lab-a-night@exresfac.org',
    to: 'Sublevel B Distribution', subject: 'Who is on tonight',
    body:
`I need an honest count of who is actually on the level tonight.

Not the roster. The roster says twenty-three. I have seen nine people
since this morning and I have heard more than nine moving around.

Reply with your name and where you are.` },

  /* ---------- party day ---------- */

  { folder: 'inbox', day: 0, time: '20:41', from: 'Lab A Night Lead', addr: 'lab-a-night@exresfac.org',
    to: 'Sublevel B Distribution', subject: 'Vent 7 — noise again',
    body:
`Third night running. Maintenance closed the ticket as rats.

It is rhythmic. Rats are not rhythmic.

Logging it again. Someone please look at it before I do.` },

  { folder: 'inbox', day: 0, time: '21:33', flag: true, from: 'Lab B Floor Lead', addr: 'lab-b-floor@exresfac.org',
    to: 'Sublevel B Distribution', subject: 'Subject in Bay 1 — core temp readings',
    body:
`Bay 1 core temp has climbed 2.1 C in 40 minutes with no fever response
elsewhere. Monitor is reporting a pulse I cannot find by hand.

I have asked for a second opinion. I would like a third.

Who is still on site?` },

  { folder: 'inbox', day: 0, time: '21:49', flag: true, from: 'Lab A Night Lead', addr: 'lab-a-night@exresfac.org',
    to: 'Sublevel B Distribution', subject: 'RE: Subject in Bay 1 — core temp readings',
    body: 'I am going to the seal room. Do not open Lab B until I call back.\n\nIf I do not call back in ten minutes, do not open Lab B at all.' },

  { folder: 'inbox', day: 0, time: '22:04', flag: true, from: 'Containment Systems (automated)', addr: 'alarms@exresfac.org',
    to: 'All Personnel — Sublevel B', subject: 'CONTAINMENT FAILURE — SUBLEVEL B — ISOLATION PROTOCOL ENGAGED',
    body:
`PRIMARY SEAL FAILURE DETECTED 21:58.
ISOLATION PROTOCOL ENGAGED 21:59.
ISOLATION PROTOCOL FAILED 22:04.

ALL EXITS SEALED. LEVEL 5 OVERRIDE REQUIRED.

PERSONNEL ARE INSTRUCTED TO SHELTER IN PLACE AND AWAIT INSTRUCTION.

NO FURTHER INSTRUCTION IS SCHEDULED.` },

  { folder: 'inbox', day: 0, time: '22:47', flag: true, endCard: true,
    from: 'Emergency Coordination', addr: 'emergency-coord@exresfac.org',
    to: 'Principal Investigator', subject: 'RESCUE ORDER — AUTHORIZED',
    files: ['rescue_order_signed.pdf'],
    body:
`A team has been assembled and authorized to enter Sublevel B.

They are volunteers. They have masks. Their armaments are foam-based.
They are very enthusiastic.

Objective: recover personnel. Contain what can be contained.

Hold your position. They are coming.` }

  ],

  /* ---------- saved attachments (not emails) ----------
     These show in the sidebar under SAVED ATTACHMENTS.           */
  attachments: [

  { name: 'B-07_handling_protocol_rev4.txt', text:
`SPECIMEN B-07 · HANDLING PROTOCOL · REV 4

1. Double gloves. Face shield. No exceptions.
2. Never handle B-07 alone.
3. Never handle B-07 after dark.
4. If B-07 moves toward you, step back and log the time.
5. If B-07 moves toward you a second time, leave the lab.
6. Do not name B-07.

Rev 4 note: rule 6 added following an incident. The name has been
removed from all prior revisions.` },

  { name: 'door_events_B1.log', text:
`21:52  LAB B DOOR        BADGE (TECH)    OPEN
21:55  VENT 7 HATCH      MANUAL          OPEN
21:57  LAB B DOOR        FORCED          ALARM
21:58  CONTAINMENT       SEAL FAILURE    ALARM
21:59  ALL EXITS         LOCKDOWN        SEALED
22:11  ISOLATION BAY 1   BADGE (SEC)     OPEN
22:24  ISOLATION BAY 4   [[UNKNOWN]]      FORCED
22:38  COMMS ROOM        BADGE (PI)      SEALED
22:39  COMMS ROOM        —               SOMETHING KNOCKING` },

  { name: 'staff_roster_sublevel_B.txt', text:
`SUBLEVEL B · ON SITE 21:58 · 23 TOTAL

PRINCIPAL INVESTIGATOR   Virology       ALIVE · COMMS ROOM
LAB TECHNICIAN           Lab B          SUBJECT 0-14
SECURITY OFFICER         Checkpoint 2   SUBJECT 0-17
NIGHT CUSTODIAN          Facilities     SUBJECT 0-22
GRADUATE INTERN          Virology       SUBJECT 0-23
MAINTENANCE TECH         HVAC           SUBJECT 0-27
COURIER                  Receiving      SUBJECT 0-29
CAFETERIA STAFF          Kitchen        SUBJECT 0-31
RESEARCH SCIENTIST       Lab A          SUBJECT 0-33
(14 more)                —              [[UNACCOUNTED FOR]]` },

  { name: 'evac_routes_B1.txt', text:
`EVACUATION ROUTES · LEVEL B1

ROUTE A   Stairwell C to loading dock      BLOCKED
ROUTE B   Freight lift to surface          NO POWER
ROUTE C   Vent 7 crawlway                  DO NOT USE
ROUTE D   Wait for rescue                  RECOMMENDED

Rescue teams enter through the loading dock.
Listen for the foam.` },

  { name: 'power_report_2240.txt', text:
`POWER · LEVEL B1 · AUTO REPORT 22:40

MAIN GRID          OFFLINE
AUX GENERATOR      34% FUEL · 3 h 10 m remaining
LIGHTING           EMERGENCY ONLY
CCTV               4 OF 16 RECORDING
COMMS ROOM         PRIORITY ROUTING
FREEZER, LAB A     ON (please)
COFFEE MACHINE     ON (unexplained)` },

  { name: 'personal_log_2209.txt', text:
`[PERSONAL LOG · 22:09 · TRANSCRIPT]

It is in the air handling now. Vent 7. I told them in February.
Bay 1 stopped breathing twenty minutes ago and the monitor is still
counting. Slower than before. Wrong rhythm.

I am going to the comms room. If this recording survives and I do not:
B-07 is not a virus. It is a [[REDACTED]].

[END OF LOG]` },

  { name: 'sticky_note_monitor_3.txt', text:
`(handwritten, stuck to monitor 3)

Password is NOT "password" anymore.
It's "password2".

(second note, different handwriting)

Whoever wrote the first note is in Isolation Bay 4 now.
Who changes the password?` }

  ]
};
