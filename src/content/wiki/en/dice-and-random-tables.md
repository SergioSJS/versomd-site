---
title: "Dice and Random Tables"
description: "`dice:` in a note rolls dice, a table or list with `^id` draws a row; nothing is written, and in a shared note everyone sees it."
order: 25
group: rpg
slug: "dice-and-random-tables"
twin: "dados-e-tabelas-sorteadas"
source: "demo-vault-en/25 - Dice and Random Tables.md"
updated: "2026-10-14"
---
A `dice:` code in a note is a **die**: in **Reading** and in **Edit**, away from the cursor line, it shows up as a button. One click — or `Tab` to it and `Enter` — rolls it and shows the result on a card beside it: the total, each die, and what was added, with **Roll again**. It is the same form as Obsidian's Dice Roller plugin, so a vault that already uses the plugin rolls here, and a note written here rolls there.

**Nothing is written to the note.** Rolling, rolling again and closing the card leave the file as it was: open the note in **Source** mode and see that the code is still just code.

**Writing a die.** In **Edit**, type `/` and pick **Dice roll** (or type `/dice`): Verso writes `` `dice: 1d20` `` on the line with the notation **selected** — type `2d6+3` over it and you are done. The item shows only while the **Dice** feature is on.

---

## Rolling

- Sword attack: `dice: 1d20+5`
- Damage: `dice: 2d6+3`
- Ability score, the lowest of four dice dropped: `dice: 4d6dl1`
- With advantage, the higher of two d20s: `dice: 2d20kh1`
- Fudge dice, from Fate: `dice: 4dF`
- Sums and differences: `dice: 1d12+1d10-1d4+2`
- An exploding die — on a 6, roll another and add it: `dice: 3d6!`
- Percentile, a d100: `dice: d%`

Verso reads dice (`2d6`; `d20` is just one), sums and differences of dice and numbers, **keep** and **drop** with a count (`kh2` keeps the 2 highest, `kl1` the lowest, `dh1` drops the highest, `dl1` the lowest), the fudge die (`dF`), the percentile (`d%`, a d100) and the die that **explodes** (`!` right after the die: on the highest face it rolls one more, which can explode again, up to 100 extra dice in one roll). Spaces do not count: `dice: 3d4 + 3` is `3d4+3`.

A form Verso does not read stays **code**, and never turns into another roll: `dice: 1d20*2` down here is just code.

`dice: 1d20*2`

With a screen reader, the button is named *Roll 1d20+5*, and the result is spoken: *1d20+5: 17 — 12 plus 5*.

---

## Random tables

A table or a list with a `^id` is a **random table**. A `dice:` code with a link to it draws a row:

Who shows up on the road? `dice: [[25 - Dice and Random Tables#^encontros]]`

| d6 | Encounter |
| --- | --- |
| 1–2 | A guard patrol, suspicious |
| 3–4 | A merchant with his cart stuck in the mud |
| 5 | Starving wolves, and Captain Ruy arrives to help |
| 6 | Nothing; just the wind |

^encontros

The first column has a **die in the header** (`d6`, `d100`, `2d6`): each row says which ranges pick it (`1–2`, `5`, `01–05`, `96–00`), like in a printed table. The links in the drawn row open with a click.

In a table with no die in the header, or in a list, every row has the same chance:

The weather today: `dice: [[25 - Dice and Random Tables#^tempo]]`

- Blazing sun
- Light drizzle
- Fog until noon
- Storm at night

^tempo

---

## In a shared note

In a [UniVerso](/en/wiki/verso-on-a-server/), with other people in the same note, the one who rolls is the **server**: nobody picks their own number. Everyone in the note sees the roll with the name of who rolled — *Ana rolled* — and whoever joins later sees the room's latest rolls. With no connection, the die rolls in this window and the card says that nobody else saw it.

---

## The game master's secret

A callout of the `secret` kind keeps what only whoever writes the note should see. Type `/` in Edit and choose **Secret**, or write:

> **Secret: What the players don't know**
>
> The innkeeper is the baron's sister, and the cellar opens onto the harbor tunnel.

In a [UniVerso](/en/wiki/verso-on-a-server/), whoever may only **read** the note gets it **without** this block — on screen, in search, in links and tags, in what syncs to their device, in a live note. Whoever can edit sees everything, with a padlock and *Hidden from readers*; the **View as a reader** button, beside Reading and Edit, shows the note the way a reader receives it, and **See the whole note** goes back. In a folder on this computer nothing is hidden, and the block says *Visible to anyone with the file*.

> **Warning: Not encryption**
>
> Whoever can edit the note sees the secret — otherwise they would erase it on the next edit. So does whoever has the file: Obsidian, a computer that syncs as an editor, a copy handed over by hand. The secret is hidden from the server's readers, not encrypted; and a reader knows the note changed only when what they see changes.

---

## Without a note

In the command palette (`⌘⇧P`), **Roll dice…** opens a roller: type the notation, `Enter`, and the result appears. It writes nothing either.

---

## 3D dice

Want to watch the dice fall? In **Settings › RPG & Solo Play › Dice and RPG**, turn on **3D dice**. It starts **off**, even with the *Everything* shortcut: it is the heaviest feature, on the battery too. On, when you roll — from a `dice:` button or from the roller — real dice (d4, d6, d8, d10, d12, d20, and the percentile as two d10) fall onto the screen and settle; only then does the card with the result appear.

The number is **already drawn** before the dice fall, by the window's cryptographic generator or, in a room, by the server; the fall only stages it, and the die lands showing exactly that number. That is why a screen reader says the result at once, without waiting, and the card with the text always exists.

- **The dice stay on the table**, as in Rolai, until you touch something: a click anywhere that is not a button or a dialog, `Esc` or the next roll takes them away. They do not hold the click: the page stays usable underneath. While they fall, `Esc` or a click also skips the fall.
- **Roll duration:** in *Dice and RPG*, **Fast**, **Normal** or **Slow** changes how fast the dice fall.
- **Dice sound:** a **Dice sound** switch, off by default, plays the sound of each hit of the dice on the table and on each other, with Rolai's recordings (public domain); the timbre follows the die's material (plastic, wood or metal).
- **Saved rolls:** in the dice tray of the Table, every line of a note that holds a `dice:` code (e.g. `` - Bia's attack: `dice: 1d20+7` ``) becomes a button that puts the roll in the field; see [The Table](/en/wiki/the-table/), under *Saved rolls*.
- **No animation:** if the system asks for less motion, or the roll has more than 20 dice or an exploding die (`!`), only the card shows.
- **In a room**, each person sees the dice fall only if *their* 3D dice feature is on; the others see the card.
- The 3D engine is downloaded only on the first 3D roll and kept for offline use, with the sounds if you turn them on.
- **Appearance:** just below the switch, on the same page, as in Rolai: the **size** (70% to 160%; 100% is a die about 70 pixels across on a laptop), **three colour sets** (1, 2 and 3 — a roll uses 1; a dice profile can give a group 2 or 3) and, for the chosen set, the **style** (Verso's own, Emerald, Bone, Obsidian, Blood, Abyssal, Ice, Scales, Tavern), the **body**, **number** and **outline** colours, the **texture** (Plain, Marble, Speckles, Glitter, Stars, Astral sky, Clouds, Fire, Water, Ice, Paper, Wood, Steel, Stained glass, Skulls, Dragon, Leopard, Tiger, Lizard, Feather — the original images of 3DDiceRoller, shipped with the app) and the **material** (Automatic, Plastic, Metal, Wood, Glass, Matte). If the number is too close to the body colour, Verso warns you (contrast below 3:1). **Roll to test** rolls a d20 and two d6, one in each set. It is for this device only: in a room, each person sees the roll with *their own* dice.

---

Next, see the visual statblocks in [Statblocks](/en/wiki/statblocks/), and the oracle for solo play and for building campaigns in [Oracles and World Building](/en/wiki/oracles-and-world-building/). Go back to the [Home Page](/en/wiki/welcome-to-verso/) or open the Verso Tour.
