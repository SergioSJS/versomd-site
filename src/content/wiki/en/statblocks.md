---
title: "Statblocks"
description: "An example of each `statblock` layout, with dice and counters that write to the note, and the layout editor. A complete example, the Fractal, is in the Fractal Campaign."
order: 26
group: rpg
slug: "statblocks"
twin: "fichas"
source: "demo-vault-en/26 - Statblocks.md"
updated: "2026-10-20"
---
A monster, a character or a faction sheet without leaving the note. Here you see **one example of every layout that ships with Verso** — 40 in all — and learn how to use them. What the statblock stores is **plain Markdown**: a code block any editor can read.

It is a feature with its own switch: **Settings › RPG & Solo Play › Dice and RPG › Statblocks** (see [Oracles and World Building](/en/wiki/oracles-and-world-building/)). Turned off, each statblock becomes a code block.

---

## What a `statblock` block is

A code block with the `statblock` language draws a statblock from the YAML it holds. The keys are those of Obsidian's **Fantasy Statblocks** plugin (`name`, `ac`, `hp`, `stats`, `traits`, `actions`…): a block written for the plugin looks the same here, and one written here looks the same there. Without the plugin, Obsidian shows the code — the file is always the same text.

The look comes from the **layout**, chosen with `layout:` by id or by name (capitals and accents do not matter). Without `layout:`, the first one on the list applies. A layout that does not exist draws the default and says so on the statblock itself.

Each example below carries its `layout:` on the first line. **Try it:** swap the id for another one on the list and watch the same statblock change its look. The **View source** / **View card** button switches between the YAML and the drawing.

---

## One example of each layout

In order: character and adversary side by side, system by system. Each one's license notices are in **Settings › Application › Credits and acknowledgements**.

### d20 creature and D&D 5e (SRD)

The Fantasy Statblocks plugin format, and the character and monster sheets of the D&D 5e SRD by Wizards of the Coast (5.1 and 5.2.1, CC-BY 4.0).

**d20 creature — the default layout, no system** (`layout: d20-creature`)

```statblock
layout: d20-creature
name: Cave Gnawer
size: Small
type: beast
alignment: unaligned
ac: 12
hp: 9
hit_dice: 2d6+2
hp_current: 9
speed: 30 ft., climb 20 ft.
stats: [8, 14, 12, 3, 10, 5]
senses: darkvision 60 ft.
languages: "-"
cr: 1/8
traits:
  - name: Keen nose
    desc: A note of our own for the sample.
actions:
  - name: Bite
    desc: +4 to hit, reach 5 ft. Hit 4 (1d4 + 2) piercing damage.
```

**D&D 5e — character** (`layout: dnd5e-character`)

```statblock
layout: dnd5e-character
name: Mira Vale
species: Halfling
class: Rogue
background: Courier
level: 3
xp: 900
alignment: Neutral
stats: [8, 16, 12, 13, 10, 14]
proficiency_bonus: 2
ac: 14
initiative: +3
speed: 25 ft.
hp: 21
hp_current: 17
hit_dice: 3d8
death_successes: 0
death_failures: 0
passive_perception: 12
skills:
  stealth: 7
  sleight of hand: 5
  perception: 2
languages: Common, Halfling
coins: 12 gp, 4 sp
equipment:
  - Shortsword
  - Satchel of letters
features:
  - name: Quick hands
    desc: A note of your own, not a book's.
notes: Owes a favor to the harbor master.
```

**D&D 5e — monster** (`layout: dnd5e-monster`)

```statblock
layout: dnd5e-monster
name: Reedwalker
size: Medium
type: Humanoid
tags: Marsh
alignment: Neutral
ac: 13
initiative: +2 (12)
hp: 18
hit_dice: 4d8
hp_current: 18
speed: 30 ft., swim 30 ft.
stats: [10, 14, 12, 8, 12, 9]
skills:
  stealth: 4
senses: Passive Perception 11
languages: Common
cr: 1/4
traits:
  - name: Mud-blind
    desc: A trait of our own making.
actions:
  - name: Spear
    desc: Melee Attack Roll +4, reach 5 ft. Hit 4 (1d4 + 2) piercing damage.
```

### Pathfinder 2e and Starfinder 2e

Paizo systems under the ORC License.

**Pathfinder 2e — character** (`layout: pf2e-character`)

```statblock
layout: pf2e-character
name: Tamsin Orrel
ancestry: Human
heritage: Skilled
background: Scribe
class: Investigator
level: 2
xp: 400
size: Medium
attributes: [0, 3, 1, 4, 2, 0]
ac: 17
fortitude: 6
reflex: 8
will: 7
perception: 7
hp: 24
hp_current: 24
speed: 25 feet
hero_points: 1
skills:
  society: 7
  occultism: 5
strikes:
  - name: Rapier
    desc: "+7, damage 1d6+3 piercing"
feats:
  - Quick Study
notes: Keeps a ledger of every favor.
```

**Pathfinder 2e — creature** (`layout: pf2e-creature`)

```statblock
layout: pf2e-creature
name: Fenwick Imp
level: 3
size: Tiny
traits: Fiend, Minion
recall_knowledge: 18
perception: 9
senses: darkvision
languages: Common
skills:
  stealth: 10
modifiers: [-3, 3, 1, 0, 1, 2]
ac: 19
fort: 8
ref: 11
will: 7
hp: 30
hp_current: 30
weaknesses: cold iron 3
speed: 20 feet, fly 40 feet
melee:
  - name: claw
    desc: "+11, damage 1d6+2 slashing"
abilities:
  - name: Flicker
    desc: Our own note for the sample.
```

**Starfinder 2e — creature** (`layout: sf2e-creature`)

```statblock
layout: sf2e-creature
name: Dustback Drifter
level: 2
traits: Uncommon, Medium, Beast
perception: 8
languages: none
skills:
  stealth: 7
attribute_modifiers: "Str +2, Dex +3"
ac: 17
fort: 7
ref: 9
will: 5
hp: 28
hp_current: 28
speed: 30 feet
melee:
  - name: sting
    desc: "+9, damage 1d6+4 piercing"
```

### 13th Age

Narrative d20, with the Escalation Die and the Icons; the open text comes under the OGL 1.0a.

**13th Age — character** (`layout: 13th-age-character`)

```statblock
layout: 13th-age-character
name: Odo Brannigan
class: Ranger
level: 2
one_unique_thing: Carries a map of a city that has not been built yet
attributes: [12, 14, 16, 10, 13, 8]
hp: 36
hp_current: 30
ac: 17
pd: 14
md: 12
initiative: +5
recoveries: 6
recoveries_max: 8
backgrounds:
  trapper: 3
  deserter: 2
powers:
  - Our own placeholder power
```

**13th Age — monster** (`layout: 13th-age-monster`)

```statblock
layout: 13th-age-monster
name: Gutter Wretch
size_strength: normal
level: 2
role: Mook
type: humanoid
initiative: +3
attack: "Rusty hook +7 vs AC, 4 damage"
extra_effects: "Natural even hit: our own note"
ac: 17
pd: 14
md: 10
hp: 7
```

### Dungeon World

2d6 moves in classic fantasy.

**Dungeon World — character** (`layout: dungeon-world-character`)

```statblock
layout: dungeon-world-character
name: Bram Ashgrove
class: Ranger
race: Dwarf
race_move: Our own note on a race move
look: Gray braids, a lantern on a pole
alignment: Neutral
level: 1
xp: 0
attributes: [12, 16, 15, 9, 13, 8]
hp: 18
hp_current: 18
armor: 1
damage: d8
load: 10
debilities: none
bonds:
  - Ilsa has saved me before
starting_moves:
  - Hunt and Track
gear:
  - Rations
coin: 3
```

**Dungeon World — monster** (`layout: dungeon-world-monster`)

```statblock
layout: dungeon-world-monster
name: Marsh Lurker
tags: Solitary, Large
attack: "Snap, d8+1 damage"
hp: 10
armor: 1
special_qualities:
  - Looks like driftwood
instinct: To wait
moves:
  - Surface without a sound
```

### Blades in the Dark

Heists in a dark city; includes the faction, the crew and the clock, which is a counter of its own.

**Blades in the Dark — character (Scoundrel)** (`layout: blades-scoundrel`)

```statblock
layout: blades-scoundrel
name: Corvin Mace
playbook: Lurk
alias: Wick
look: Soot-gray coat, no hat
heritage: Akoros
background: Underworld
vice: Gambling
purveyor: A card room by the docks
hunt: 1
study: 1
survey: 2
tinker: 0
finesse: 1
prowl: 3
skirmish: 0
wreck: 0
attune: 0
command: 0
consort: 1
sway: 1
stress: 2
stress_max: 9
trauma: none
harm_1: ""
healing_clock: 0
coin: 2
special_abilities:
  - Our own note on an ability
items:
  - A fine lockpick set
```

**Blades in the Dark — gang (Cohort)** (`layout: blades-cohort`)

```statblock
layout: blades-cohort
name: The Dockside Crew
type: Thugs
scale: 3
quality: 2
edges: Loyal
flaws: Wild
harm: ""
armor: ""
```

**Blades in the Dark — faction** (`layout: blades-faction`)

```statblock
layout: blades-faction
name: The Lamp Guild
tier: III
hold: Strong
status: 0
turf_assets:
  - A lamp-oil warehouse
goals:
  - Own every street lamp in the district
clocks:
  - "Seize the pier: 2 of 6"
```

**Blades in the Dark — clock** (`layout: blades-clock`)

```statblock
layout: blades-clock
name: The Bluecoats close in
type: Danger
clock: 2
clock_size: 6
description: Ticks when the crew leaves a witness.
```

### Fate

Fate's aspects and ladder; the mook is a disposable adversary.

**Fate Condensed — character** (`layout: fate-condensed-character`)

```statblock
layout: fate-condensed-character
name: Sable Quill
high_concept: Disgraced court cartographer
trouble: Everyone owes me, and I owe everyone
relationship: Rival of Master Ostrander
aspects:
  - I never forget a face
  - A map in every pocket
skills:
  lore: 4
  notice: 3
  investigate: 3
  will: 2
  empathy: 2
  stealth: 2
refresh: 3
fate_points: 3
stunts:
  - Our own placeholder stunt
stress_physical: 0
stress_physical_max: 3
stress_mental: 1
stress_mental_max: 4
```

**Fate Condensed — minor NPC** (`layout: fate-condensed-npc`)

```statblock
layout: fate-condensed-npc
name: Harbor Watchman
aspect: Bored but not blind
skills:
  fight: 2
  notice: 1
stress: 0
stress_max: 2
```

**Fate Accelerated — character** (`layout: fate-accelerated-character`)

```statblock
layout: fate-accelerated-character
name: Juno Park
high_concept: Smuggler with a conscience
trouble: Always one debt away from trouble
aspects:
  - Friends in low places
careful: 1
clever: 2
flashy: 0
forceful: 1
quick: 3
sneaky: 2
refresh: 3
fate_points: 3
stress: 1
```

**Fate Accelerated — mook** (`layout: fate-accelerated-mook`)

```statblock
layout: fate-accelerated-mook
name: Gate Thugs
aspects:
  - Too many to fight in a doorway
skilled_at: Intimidating, blocking
bad_at: Thinking ahead
stress: 0
stress_max: 2
```

### Mausritter

Mouse adventure with a slot-based inventory.

**Mausritter — character** (`layout: mausritter-character`)

```statblock
layout: mausritter-character
name: Pippin Thistledown
birthsign: The Reaper
coat: Brown, spotted
physical_detail: Torn ear
background: Hedge-witch
level: 1
xp: 0
str: 9
dex: 12
wil: 7
hp: 3
hp_current: 3
pips: 15
hit_dice: 1d6
grit: 0
paws:
  - Sword
  - Torch
body:
  - Light armor
pack:
  - Rations
  - Rope
```

**Mausritter — creature** (`layout: mausritter-creature`)

```statblock
layout: mausritter-creature
name: Marsh Heron
hp: 15
hp_current: 15
str: 15
dex: 15
wil: 10
armour: 1
attacks: d6 swipe, d8 bite
wants: A quiet pond
```

### Ironsworn / Starforged

A vow-based RPG, solo or co-op, with progress tracks.

**Ironsworn — character** (`layout: ironsworn-character`)

```statblock
layout: ironsworn-character
name: Sigrun Hale
edge: 2
heart: 3
iron: 2
shadow: 1
wits: 1
health: 5
spirit: 5
supply: 4
momentum: 2
background_vows:
  - Swear to find the lost caravan
assets:
  - Our own placeholder asset
gear:
  - A rope and a lantern
```

**Ironsworn — foe** (`layout: ironsworn-foe`)

```statblock
layout: ironsworn-foe
name: Hollow Warden
nature: Horror
rank: 3
progress: 4
progress_max: 10
summary: A sample entry of our own.
features:
  - Cold to the touch
drives:
  - Keep the door shut
tactics:
  - Waits at thresholds
```

### Cairn

Minimalist old school, with real risk.

**Cairn — character** (`layout: cairn-character`)

```statblock
layout: cairn-character
name: Edda Roan
background: Fisher
age: 31
str: 11
dex: 9
wil: 13
hp: 4
hp_current: 4
armor: 0
gold: 12
inventory:
  - Net
  - Knife
virtue: Patient
vice: Stubborn
```

**Cairn — monster** (`layout: cairn-monster`)

```statblock
layout: cairn-monster
name: Cave Stalker
hp: 6
hp_current: 6
armor: 1
str: 12
dex: 10
wil: 8
attack: claws (d6)
descriptor: Thin and pale
quirk_or_tactic: Strikes from above
```

### Old Dragon 2e

The Brazilian classic fantasy RPG.

**Old Dragon 2e — character** (`layout: old-dragon-character`)

```statblock
layout: old-dragon-character
name: Caio Brandão
raca: Human
classe: Fighter
alinhamento: Law
atributos: [15, 12, 14, 9, 10, 11]
ca: 13
ba: 1
bac: 3
bad: 1
jpd: 14
jpc: 12
jps: 15
mv: 9
pv: 11
pv_atual: 11
idiomas: Common
```

**Old Dragon 2e — monster** (`layout: old-dragon-monster`)

```statblock
layout: old-dragon-monster
name: Mist Wolf
tamanho: Medium
alinhamento: Neutrality
habitat: Cold forests
qt: 2d4
mv: 12
mo: 7
ca: 13
dv: 2
jp: 14
atq: 1 x BITE +1 (1d6)
descricao: A note of our own, not a book's.
```

### Fractal

The Brazilian system by Igor Téuri and Walter Licínio. The Challenge holds Reserves (*Reservas*), Obstacles (*Obstáculos*) and the Broken (*Quebrado*) mark.

**Fractal — character** (`layout: fractal-character`)

```statblock
layout: fractal-character
name: Yara of the Lighthouse
jogador: Letícia
xp: 4
reserva_1_nome: Courage
reserva_1_atual: 3
reserva_1_total: 3
reserva_2_nome: Breath
reserva_2_atual: 2
reserva_2_total: 4
fatos:
  - name: Keeper of the old lighthouse
    quebrado: false
  - name: Knows every boat in the harbor
    quebrado: true
  - name: Owes a debt to Captain Duarte
anotacoes: Look for the light that is not the lighthouse's.
fatos_aplicaveis: 2
```

**Fractal — Challenge** (`layout: fractal-challenge`)

```statblock
layout: fractal-challenge
name: Krard, the Black Dragon
descricao: A sample beast; the text is our own.
obstaculos:
  - name: Black scales
    quebrado: true
  - name: "[[Krard's Nest]]"
    quebrado: false
  - name: Flight over the gorge
    quebrado: false
reserva_1_nome: Life
reserva_1_atual: 10
reserva_1_total: 10
reserva_1_gatilho: each time damage is taken
reserva_1_consequencia: Krard dies
reserva_2_nome: Mana
reserva_2_atual: 3
reserva_2_total: 3
antecipacao: 3
fatos_aplicaveis: 2
```

### World of Darkness 5th edition (Dark Pack) and Cyberpunk RED (blank)

Layouts with **field names** only, and no rules text at all. The World of Darkness ones come under Paradox's *Dark Pack*: **unofficial, fan-made** material, free and non-commercial — so each statblock carries a short notice in its footer, and the full notices the agreement requires, with the Dark Pack logo, are in Credits and acknowledgements. The Cyberpunk RED ones are **blank** sheets under R. Talsorian Games' Homebrew Content Policy, with a short notice in the footer and its full notice in Credits. The dice pools (regular, and Hunger, Rage or Desperation) roll with the *Roll the pool* button. Mage: The Ascension does not ship built in — import a layout of your own.

**Vampire: The Masquerade 5e — character** (`layout: vtm5-character`)

```statblock
layout: vtm5-character
name: Ilse Varga
concept: A sample of our own
clan: Sample clan
generation: 12
attributes_physical:
  strength: 2
  dexterity: 3
  stamina: 2
attributes_social:
  charisma: 3
  manipulation: 2
  composure: 3
attributes_mental:
  intelligence: 2
  wits: 3
  resolve: 2
skills_physical:
  stealth: 2
  brawl: 1
skills_social:
  persuasion: 2
skills_mental:
  investigation: 3
hunger: 2
hunger_max: 5
health: 5
health_superficial: 1
health_aggravated: 0
willpower: 5
willpower_superficial: 2
humanity: 7
stains: 0
blood_potency: 1
touchstones_convictions:
  - A sample touchstone
```

**Vampire: The Masquerade 5e — antagonist** (`layout: vtm5-antagonist`)

```statblock
layout: vtm5-antagonist
name: A sample antagonist
difficulty: 3
pools:
  physical: 5
  social: 3
  mental: 4
notes: A note of our own, not a book's.
```

**Werewolf: The Apocalypse 5e — character** (`layout: wta5-character`)

```statblock
layout: wta5-character
name: Rook Hale
concept: A sample of our own
tribe: Sample tribe
auspice: Sample auspice
form: Homid
attributes_physical:
  strength: 3
  dexterity: 2
  stamina: 3
attributes_social:
  charisma: 2
  manipulation: 1
  composure: 2
attributes_mental:
  intelligence: 2
  wits: 3
  resolve: 3
skills_physical:
  athletics: 2
  survival: 3
renown:
  first: 1
  second: 0
rage: 1
rage_max: 5
health: 6
health_superficial: 0
health_aggravated: 0
willpower: 6
willpower_superficial: 1
willpower_aggravated: 0
touchstones:
  - A sample touchstone
```

**Hunter: The Reckoning 5e — character** (`layout: htr5-character`)

```statblock
layout: htr5-character
name: Maren Oyelaran
concept: A sample of our own
creed: Sample creed
cell: The sample cell
drive: Sample drive
attributes_physical:
  strength: 2
  dexterity: 2
  stamina: 3
attributes_social:
  charisma: 2
  manipulation: 2
  composure: 3
attributes_mental:
  intelligence: 3
  wits: 2
  resolve: 3
skills_mental:
  investigation: 3
edges:
  - A sample edge
desperation: 2
desperation_max: 5
danger: 1
health: 6
health_superficial: 1
health_aggravated: 0
willpower: 6
willpower_superficial: 0
willpower_aggravated: 0
```

**Cyberpunk RED — blank character sheet** (`layout: cpr-blank-character`)

```statblock
layout: cpr-blank-character
name: A sample runner
role: Sample role
role_rank: 4
stats:
  INT: 6
  REF: 7
  DEX: 6
  TECH: 5
  COOL: 7
  WILL: 6
  MOVE: 5
  BODY: 6
  EMP: 5
  LUCK: 6
skills_awareness:
  Perception: 4
skills_social:
  Conversation: 3
hit_points: 30
hit_points_max: 35
armor_body: 7
weapons:
  - name: A sample weapon
    desc: 3d6
notes: A note of our own.
```

**Cyberpunk RED — blank NPC sheet** (`layout: cpr-blank-npc`)

```statblock
layout: cpr-blank-npc
name: A sample NPC
stats:
  REF: 6
  DEX: 6
  BODY: 6
hit_points: 25
hit_points_max: 25
armor_body: 4
weapons:
  - name: A sample weapon
    desc: 2d6
notes: A note of our own.
```

### Generic layouts, named after the mechanic

No system and no license: they serve as a starting point for your own.

**Percentile (d100) — character** (`layout: percentile-character`)

```statblock
layout: percentile-character
name: Nadia Orlov
description: A sample investigator of our own.
characteristics:
  strength: 50
  dexterity: 65
  intelligence: 75
hp: 11
hp_max: 12
skills:
  library use: 60
  spot hidden: 45
possessions:
  - A notebook
```

**2d6 moves — character** (`layout: moves-2d6-character`)

```statblock
layout: moves-2d6-character
name: Rook
playbook: Scavenger
stats:
  cool: 1
  hard: 0
  sharp: 2
harm: 1
harm_max: 6
luck: 2
luck_max: 7
xp: 1
xp_max: 5
moves:
  - name: Find a way
    desc: When you search, roll +sharp. A placeholder of our own.
```

**d6 pool — character** (`layout: d6-pool-character`)

```statblock
layout: d6-pool-character
name: Tove Lind
archetype: Salvager
attributes:
  strength: 3
  agility: 4
  wits: 4
  empathy: 2
skills:
  stealth: 2
  crafting: 3
health: 4
health_max: 4
resolve: 3
resolve_max: 4
specialties:
  - Wire splicing
gear:
  - Pry bar
```

**Difficulty pool — character** (`layout: difficulty-pool-character`)

```statblock
layout: difficulty-pool-character
name: Kestrel
description: A sample runner of our own.
pools:
  melee: 6
  stealth: 8
  hacking: 5
health: 7
health_max: 9
gear:
  - Burner phone
```

**Ladder and aspects — character** (`layout: ladder-aspects-character`)

```statblock
layout: ladder-aspects-character
name: Tess Ardent
aspects:
  - Reluctant lighthouse keeper
  - The sea owes me one
ladder:
  watching: 3
  climbing: 2
  talking: 1
stunts:
  - Our own placeholder stunt
refresh: 3
fate_points: 3
stress: 0
stress_max: 3
```

**Facts and trackers** (`layout: facts-trackers`)

```statblock
layout: facts-trackers
name: The Old Bridge
type: Location
description: A sample card of our own.
health: 3
health_max: 6
clock: 1
clock_size: 4
facts:
  - Toll collected at dusk
  - Nobody remembers who built it
notes: Roll 1d6 when the toll goes unpaid.
```

---

## Inheritance: `monster:` and `extends:`

As in Fantasy Statblocks, a statblock can **start from another one** and change only what differs. In Verso the "bestiary" is your **ordinary notes**: a creature is any `statblock` block with that `name:` (or the first block of the note with that title, or the frontmatter of a note with `statblock: true`). If there are two, the `name:` written exactly the same wins, then the note's title, then the path order.

- `monster: Goblin` takes the creature named Goblin; the block's keys **win** over its own.
- `extends: [[Goblin]]` does the same from **another note**; `extends:` accepts a list (the first on the list wins over the second, and each base may have a base of its own).
- In the lists the layout draws as traits (`traits`, `actions`…), names count: a trait with the same name **replaces** the base's; `traits+:` **adds**, `traits-:` **removes** and `traits~:` **changes** one that already exists.
- It is read-only: nothing is written to the base note. Edit the base and the statblock that starts from it redraws. A base that does not exist, a circle (A starts from B, B starts from A) or more than 8 levels show up as a warning on the statblock itself.

**Goblin — the base**

```statblock
layout: d20-creature
name: Goblin
size: Small
type: humanoid
alignment: neutral evil
ac: 15
hp: 7
hit_dice: 2d6
hp_current: 7
speed: 30 ft.
stats: [8, 14, 10, 10, 8, 8]
senses: darkvision 60 ft.
languages: Common, Goblin
cr: 1/4
traits:
  - name: Nimble Escape
    desc: A trait of our own making.
actions:
  - name: Scimitar
    desc: +4 to hit, reach 5 ft. Hit 5 (1d6 + 2) slashing damage.
```

**Goblin King — starts from the Goblin** (note the *based on Goblin* link)

```statblock
monster: Goblin
name: Goblin King
hp: 21
hp_current: 21
cr: 1
traits+:
  - name: Iron crown
    desc: A trait of our own, added to the Goblin's.
```

---

## Using statblocks

- **Dice.** A value like `+4 to hit` or `4 (1d4 + 2)` has a **die** beside it. Each ability's modifier — the `(+2)` — is itself the button: one click rolls, and the result opens on top of the statblock, pushing nothing aside and **not written to the note** (Esc, the × or a click outside closes it). On a server, the server does the rolling and everyone in the room sees it.
- **Roll block.** A system layout has a button like *Roll (Fractal — Risk roll)*: it asks, for example, how many facts apply and shows the result the way the system reads it. Try it on the Fractal statblock above.
- **Trackers.** The − and + buttons of *PV atuais*, the stress boxes and the clock's boxes write **only that number** into the YAML (`hp_current`, `stress`…); comments, quotes and order stay. Open **Source** mode and check. With the keyboard, `Tab` reaches the group, the arrows change the value, `Home` empties and `End` fills. If a value stops being a number or goes past the maximum, the statblock shows it as it is and the **Repair** button.
- **Broken.** In Fractal's Obstacles each item has the **Broken** mark (*Quebrado* in the game's own words): a button that strikes the item through and writes `quebrado: true` into the YAML, with the count *N of M broken* in the title.
- **Links.** A `[[link]]` inside an Obstáculo opens the note. The complete example, with the world, the character, three nested Challenges and a session log, is in the **Fractal Campaign** folder: start with World.

---

## Your own layouts

In **Settings › RPG & Solo Play › Statblock Templates**:

- **Built-in** layouts do not change. **Duplicate into the folder** makes a copy in `.verso/layouts/` — a file of the folder, which syncs: whoever opens the folder sees the same statblock.
- **Edit** (or the pencil, *Edit this layout*, in the corner of a statblock) opens the **layout editor**: the block tree on the left and the statblock on the right, redrawn at every change. Click a block to open its options — the keys it reads, the label in Portuguese and in English, when it hides. **Add block** lists each type with a line on what it does. Move by dragging the handle or with `Alt`+arrows (`Alt`+→ puts it inside the group above, `Alt`+← takes it out); `⌘Z` undoes. Editing a built-in one first makes a copy in the folder, and the editor tells you.
- **+ New layout** starts from scratch. **Save** writes to `.verso/layouts/`; if someone else changed the layout while you were editing, nothing is overwritten — you choose to load their version or save yours as a copy.
- **Copy JSON** takes a layout wherever you like; **Import JSON…** brings one from Verso or from Fantasy Statblocks. From the plugin, whatever was code (JavaScript) is left out — nothing in a layout runs as code — and Verso lists what it left out.

A block with invalid YAML shows the code as it is; while you type, the statblock keeps the last version it read.

---

Now learn the oracle and the project wizard in [Oracles and World Building](/en/wiki/oracles-and-world-building/). Go back to the dice rules in [Dice and Random Tables](/en/wiki/dice-and-random-tables/), or to the [Home Page](/en/wiki/welcome-to-verso/).
