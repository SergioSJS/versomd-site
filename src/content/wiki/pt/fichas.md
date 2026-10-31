---
title: "Fichas"
description: "Um exemplo de cada layout de ficha `statblock`, com dados e contadores que gravam na nota, e o editor de layouts. Um exemplo completo, o Fractal, está na Campanha Fractal."
order: 26
group: rpg
slug: "fichas"
twin: "statblocks"
source: "demo-vault/26 - Fichas.md"
updated: "2026-10-20"
---
Uma ficha de monstro, de personagem ou de facção sem sair da nota. Aqui você vê **um exemplo de cada layout que vem com o Verso** — 40 no total — e aprende a usá-los. O que a ficha guarda é **Markdown puro**: um bloco de código que qualquer editor lê.

Ela é um recurso com chave própria: **Ajustes › RPG & Mesa Solo › Dados e RPG › Fichas** (veja [Oráculos e Criação de Mundos](/wiki/oraculos-e-criacao-de-mundos/)). Desligada, cada ficha vira um bloco de código.

---

## O que é um bloco `statblock`

Um bloco de código com a linguagem `statblock` desenha uma ficha a partir do YAML que ele guarda. As chaves são as do plugin **Fantasy Statblocks** do Obsidian (`name`, `ac`, `hp`, `stats`, `traits`, `actions`…): um bloco escrito para o plugin aparece igual aqui, e um escrito aqui aparece lá. Sem o plugin, o Obsidian mostra o código — o arquivo é sempre o mesmo texto.

O desenho vem do **layout**, escolhido com `layout:` pelo id ou pelo nome (maiúsculas e acentos não importam). Sem `layout:`, vale o primeiro da lista. Um layout que não existe desenha o padrão e avisa na própria ficha.

Cada exemplo abaixo traz o seu `layout:` na primeira linha. **Experimente:** troque o id por outro da lista e veja a mesma ficha mudar de cara. O botão **Ver código** / **Ver ficha** alterna entre o YAML e o desenho.

---

## Um exemplo de cada layout

Em ordem: personagem e adversário lado a lado, sistema por sistema. Os avisos de licença de cada um estão em **Ajustes › Aplicação › Créditos e agradecimentos**.

### Criatura d20 e D&D 5e (SRD)

O formato do plugin Fantasy Statblocks, e a ficha de personagem e de monstro do SRD de D&D 5e da Wizards of the Coast (5.1 e 5.2.1, CC-BY 4.0).

**Criatura d20 — o layout padrão, sem sistema** (`layout: d20-creature`)

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

**D&D 5e — personagem** (`layout: dnd5e-character`)

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

**D&D 5e — monstro** (`layout: dnd5e-monster`)

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

### Pathfinder 2e e Starfinder 2e

Sistemas da Paizo sob a Licença ORC.

**Pathfinder 2e — personagem** (`layout: pf2e-character`)

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

**Pathfinder 2e — criatura** (`layout: pf2e-creature`)

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

**Starfinder 2e — criatura** (`layout: sf2e-creature`)

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

D20 narrativo, com o dado de escalada (Escalation Die) e os Ícones; o texto aberto vem sob a OGL 1.0a.

**13th Age — personagem** (`layout: 13th-age-character`)

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

**13th Age — monstro** (`layout: 13th-age-monster`)

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

Movimentos 2d6 em fantasia clássica.

**Dungeon World — personagem** (`layout: dungeon-world-character`)

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

**Dungeon World — monstro** (`layout: dungeon-world-monster`)

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

Assaltos numa cidade sombria; inclui facção, bando e o relógio, que é um contador à parte.

**Blades in the Dark — personagem (Scoundrel)** (`layout: blades-scoundrel`)

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

**Blades in the Dark — bando (Cohort)** (`layout: blades-cohort`)

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

**Blades in the Dark — facção** (`layout: blades-faction`)

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

**Blades in the Dark — relógio** (`layout: blades-clock`)

```statblock
layout: blades-clock
name: The Bluecoats close in
type: Danger
clock: 2
clock_size: 6
description: Ticks when the crew leaves a witness.
```

### Fate

Aspectos e a escada de Fate; o capanga é um adversário descartável.

**Fate Condensed — personagem** (`layout: fate-condensed-character`)

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

**Fate Condensed — PNJ menor** (`layout: fate-condensed-npc`)

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

**Fate Accelerated — personagem** (`layout: fate-accelerated-character`)

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

**Fate Accelerated — capanga** (`layout: fate-accelerated-mook`)

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

Aventura de camundongos com inventário de espaços.

**Mausritter — personagem** (`layout: mausritter-character`)

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

**Mausritter — criatura** (`layout: mausritter-creature`)

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

RPG de votos, solo ou cooperativo, com trilhas de progresso.

**Ironsworn — personagem** (`layout: ironsworn-character`)

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

**Ironsworn — inimigo** (`layout: ironsworn-foe`)

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

Old school minimalista, de risco real.

**Cairn — personagem** (`layout: cairn-character`)

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

**Cairn — monstro** (`layout: cairn-monster`)

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

O RPG brasileiro de fantasia clássica.

**Old Dragon 2e — personagem** (`layout: old-dragon-character`)

```statblock
layout: old-dragon-character
name: Caio Brandão
raca: Humano
classe: Guerreiro
alinhamento: Ordem
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
idiomas: Comum
```

**Old Dragon 2e — monstro** (`layout: old-dragon-monster`)

```statblock
layout: old-dragon-monster
name: Lobo das Brumas
tamanho: Médio
alinhamento: Neutralidade
habitat: Florestas frias
qt: 2d4
mv: 12
mo: 7
ca: 13
dv: 2
jp: 14
atq: 1 x MORDIDA +1 (1d6)
descricao: Uma anotação nossa, não do livro.
```

### Fractal

O sistema brasileiro de Igor Téuri e Walter Licínio. O Desafio guarda Reservas, Obstáculos e a marca Quebrado.

**Fractal — personagem** (`layout: fractal-character`)

```statblock
layout: fractal-character
name: Yara do Farol
jogador: Letícia
xp: 4
reserva_1_nome: Coragem
reserva_1_atual: 3
reserva_1_total: 3
reserva_2_nome: Fôlego
reserva_2_atual: 2
reserva_2_total: 4
fatos:
  - name: Guardiã do farol velho
    quebrado: false
  - name: Conhece todos os barcos do porto
    quebrado: true
  - name: Dívida com a capitã Duarte
anotacoes: Procurar a luz que não é do farol.
fatos_aplicaveis: 2
```

**Fractal — Desafio** (`layout: fractal-challenge`)

```statblock
layout: fractal-challenge
name: Krard, o Dragão Negro
descricao: Uma fera de exemplo; o texto é nosso.
obstaculos:
  - name: Escamas negras
    quebrado: true
  - name: "[[Ninho de Krard]]"
    quebrado: false
  - name: Voo sobre o desfiladeiro
    quebrado: false
reserva_1_nome: Vida
reserva_1_atual: 10
reserva_1_total: 10
reserva_1_gatilho: a cada dano sofrido
reserva_1_consequencia: Krard morre
reserva_2_nome: Mana
reserva_2_atual: 3
reserva_2_total: 3
antecipacao: 3
fatos_aplicaveis: 2
```

### World of Darkness 5ª edição (Dark Pack) e Cyberpunk RED (em branco)

Layouts só com **nomes de campos**, sem nenhum texto de regras. Os de World of Darkness saem sob o *Dark Pack* da Paradox: material **não oficial, feito por fãs**, gratuito e sem fins comerciais — por isso cada ficha traz, no rodapé, um aviso curto, e os avisos completos que o acordo exige, com o logotipo do Dark Pack, estão em Créditos e agradecimentos. Os de Cyberpunk RED são fichas **em branco** sob a Homebrew Content Policy da R. Talsorian Games, com um aviso curto no rodapé e o aviso completo dela em Créditos. Os nomes dos campos estão em português de forma provisória, ainda não conferidos com os livros brasileiros. Os pools de dados (regulares e de Fome, Fúria ou Desesperança) rolam pelo botão *Rolar o pool*. Mage: The Ascension não vem embutido — importe um layout seu.

**Vampire: The Masquerade 5e — personagem** (`layout: vtm5-character`)

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

**Vampire: The Masquerade 5e — antagonista** (`layout: vtm5-antagonist`)

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

**Werewolf: The Apocalypse 5e — personagem** (`layout: wta5-character`)

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

**Hunter: The Reckoning 5e — personagem** (`layout: htr5-character`)

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

**Cyberpunk RED — ficha de personagem em branco** (`layout: cpr-blank-character`)

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

**Cyberpunk RED — ficha de PNJ em branco** (`layout: cpr-blank-npc`)

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

### Layouts genéricos, nomeados pela mecânica

Sem sistema nem licença: servem de ponto de partida para o seu próprio.

**Percentil (d100) — personagem** (`layout: percentile-character`)

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

**Movimentos 2d6 — personagem** (`layout: moves-2d6-character`)

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

**Pool de d6 — personagem** (`layout: d6-pool-character`)

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

**Pool por dificuldade — personagem** (`layout: difficulty-pool-character`)

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

**Escada e aspectos — personagem** (`layout: ladder-aspects-character`)

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

**Fatos e contadores** (`layout: facts-trackers`)

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

## Herança: `monster:` e `extends:`

Como no Fantasy Statblocks, uma ficha pode **partir de outra** e mudar só o que for diferente. No Verso o "bestiário" são as suas **notas comuns**: uma criatura é qualquer bloco `statblock` com aquele `name:` (ou o primeiro bloco da nota com aquele título, ou o frontmatter de uma nota com `statblock: true`). Se houver duas, vale o `name:` escrito exatamente igual, depois o título da nota, depois a ordem do caminho.

- `monster: Goblin` pega a criatura chamada Goblin; as chaves do bloco **vencem** as dela.
- `extends: [[Goblin]]` faz o mesmo a partir de **outra nota**; `extends:` aceita uma lista (a primeira da lista vence a segunda, e cada base pode ter a sua própria base).
- Nas listas que o layout desenha como traços (`traits`, `actions`…) valem os nomes: um traço com o mesmo nome **troca** o da base; `traits+:` **soma**, `traits-:` **tira** e `traits~:` **muda** um que já existe.
- É só leitura: nada é gravado na nota-base. Edite a base e a ficha que parte dela se redesenha. Uma base que não existe, um círculo (A parte de B, B parte de A) ou mais de 8 níveis aparecem como aviso na própria ficha.

**Goblin — a base**

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

**Goblin Rei — parte do Goblin** (note o link *baseado em Goblin*)

```statblock
monster: Goblin
name: Goblin Rei
hp: 21
hp_current: 21
cr: 1
traits+:
  - name: Coroa de ferro
    desc: A trait of our own, added to the Goblin's.
```

---

## Usando as fichas

- **Dados.** Um valor como `+4 to hit` ou `4 (1d4 + 2)` tem um **dado** ao lado. O modificador de cada atributo — o `(+2)` — é ele mesmo o botão: um clique rola, e o resultado abre por cima da ficha, sem empurrar nada e **sem ser gravado na nota** (Esc, o × ou um clique fora fecha). Num servidor, quem rola é o servidor e todos da sala veem.
- **Bloco de rolagem.** Um layout de sistema tem um botão como *Rolar (Fractal)*: ele pergunta, por exemplo, quantos fatos se aplicam e mostra o resultado como o sistema lê. Experimente na ficha do Fractal acima.
- **Contadores.** Os botões − e + de *PV atuais*, as caixas de estresse e as do relógio gravam **só aquele número** no YAML (`hp_current`, `stress`…); comentários, aspas e ordem ficam. Abra o modo **Fonte** e confira. Com o teclado, `Tab` chega ao grupo, as setas mudam o valor, `Home` zera e `End` enche. Se um valor deixar de ser número ou passar do máximo, a ficha mostra como está e o botão **Corrigir**.
- **Quebrado.** Nos Obstáculos do Fractal cada item tem a marca **Quebrado**: um botão que risca o item e grava `quebrado: true` no YAML, com a contagem *N de M quebrados* no título.
- **Links.** Um `[[link]]` dentro de um Obstáculo abre a nota. O exemplo completo, com o mundo, a personagem, três Desafios encaixados e um diário de sessão, está na pasta **Campanha Fractal**: comece por Mundo.

---

## Seus próprios layouts

Em **Ajustes › RPG & Mesa Solo › Fichas e Templates**:

- Os layouts **embutidos** não mudam. **Duplicar para a pasta** cria uma cópia em `.verso/layouts/` — um arquivo da pasta, que sincroniza: quem abre a pasta vê a ficha igual.
- **Editar** (ou o lápis, *Editar este layout*, no canto de uma ficha) abre o **editor de layout**: a árvore de blocos à esquerda e a ficha à direita, redesenhada a cada mudança. Clique num bloco para abrir as opções dele — as chaves que lê, o rótulo em português e em inglês, quando se esconde. **Adicionar bloco** lista cada tipo com uma linha do que faz. Mova arrastando pela alça ou com `Alt`+setas (`Alt`+→ põe dentro do grupo acima, `Alt`+← tira); `⌘Z` desfaz. Editar um embutido cria antes uma cópia na pasta, e o editor avisa.
- **+ Novo layout** começa do zero. **Salvar** grava em `.verso/layouts/`; se outra pessoa mudou o layout enquanto você editava, nada é gravado por cima — você escolhe carregar a versão dela ou salvar a sua como cópia.
- **Copiar JSON** leva um layout para onde você quiser; **Importar JSON…** traz um do Verso ou do Fantasy Statblocks. Do plugin, o que era código (JavaScript) fica de fora — nada de um layout roda como código — e o Verso lista o que deixou de fora.

Um bloco com o YAML inválido mostra o código como está; enquanto você digita, a ficha mantém a última versão lida.

---

Agora aprenda o oráculo e o assistente de projeto em [Oráculos e Criação de Mundos](/wiki/oraculos-e-criacao-de-mundos/). Volte às regras de rolagens em [Dados e Tabelas Sorteadas](/wiki/dados-e-tabelas-sorteadas/), ou à [Página Inicial](/wiki/bem-vindo-ao-verso/).
