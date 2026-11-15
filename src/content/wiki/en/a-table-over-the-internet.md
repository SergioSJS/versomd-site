---
title: "A Table over the Internet"
description: "Verso on your computer turns into a server: a Cloudflare link (testing mode) or your own address, invitations, sitting at the table, read links and who gets in how."
order: 30
group: server
slug: "a-table-over-the-internet"
twin: "mesa-pela-internet"
source: "demo-vault-en/30 - A Table over the Internet.md"
updated: "2026-11-04"
---
Do you want to play with people who are not at your home, without renting a server or knowing about networks? Verso on your computer can **turn into a server** for a few hours: you turn it on, send the players a **link**, they come in through the browser and play at the [Table](/en/wiki/the-table/), as on a UniVerso ([Verso on a Server](/en/wiki/verso-on-a-server/)). It is the same idea as running Foundry on your computer: **the computer has to stay on and awake** while the table runs.

It is **one feature**, **Turn into a server**, with two boxes: serving **on your network** (the phones you [pair](/en/wiki/verso-on-phone-and-tablet/)) and serving **by an internet link**. Tick one, the other, or both.

> **Warning: The link is a testing mode**
>
> The link uses a Cloudflare testing service: no guarantee it works, up to 200 requests at once. Verso says so in the box itself. Only people you invite get in, and nobody sees a folder you did not share. **Turn it off when the session ends.**

---

## 1. Turn the link on

1. Open the campaign's folder in Verso and go to **Settings › Turn into a server**.
2. Serve the campaign's folder **from its page**: open the folder's page (or its menu in the tree) and tap **Serve from this computer**. With the server off, Verso asks **Turn the server on and serve this folder?** and does both in one step. You can also tick the folder in **Settings › Turn into a server › Folders served** — none comes ticked —, and all of this works **with the server on**: serving or no longer serving a folder does not turn the server off, so the link stays the same and the players at other tables do not notice. The table can be in the folder or in **any folder inside it**. **Choosing folders** inside it says only what **your phones** see; the players see only what you share or put at a table. A folder of yours that also syncs with a UniVerso can be served from here just the same: what the players change here goes up to the UniVerso through the sync, like any change on this computer. The one thing not served is a folder **someone else** shared with you: its owner serves it.
3. Under **Where to serve**, tick **By an internet link (Cloudflare, testing mode)**. If you do not want to serve phones on your network, leave **On my network** unticked: with the link alone, the computer accepts nothing from your home network.
4. Tap **Turn the server on**. **The first time**, Verso downloads **cloudflared**, Cloudflare's program that opens the link (about 40 MB), and checks its sum before using it. It takes a moment; the panel shows how many MB have come, and **Cancel** stops it right there — nothing turns on afterwards and the half-downloaded file is deleted.
5. When **The link is up.** shows, the panel gives **The table's address**, with **Copy link** and **Show the link's QR**. The status bar now says **Serving · internet link**, and the **Verso icon** in the Mac's menu bar (or Windows' notification area) gains a line **Internet link on**; on Linux there is only the status bar's mark. A new link can take up to a minute to open: if the page does not open at once, wait a moment and try again.

The panel also says:

- **Time left**: *Closes by itself in … h … min*. The link lasts **12 hours**. **Extend by 12 hours** keeps the **same link** for 12 more. Past the 12 hours without extending, the link closes and the panel says so; turn it on again for a new link.
- **A quick link changes each time it turns on.** Send the new one to the people; invitations made before point to the old link.
- If the network blocks UDP: *the link now uses HTTP/2*. It works the same, sometimes a little slower.
- If the link **drops** in the middle of the session (cloudflared stopped), nothing turns it back on by itself: the panel says *Table offline*. Untick and tick the link's box to turn it on again — a quick link comes out different.
- **cloudflared** is Cloudflare's, Apache-2.0 licence; the list is in **Settings › Credits**.

### If it does not turn on

The panel gives the reason in words. The usual ones:

- *Could not download cloudflared from GitHub*: no internet, or GitHub did not answer. Check the connection and try again.
- *The downloaded cloudflared does not match the sum Verso pins*: the file was refused and deleted. Try again later.
- *cloudflared reached Cloudflare neither over QUIC (UDP) nor over HTTP/2*: the network seems to block it. Try another network.
- *Cloudflare gave no link in time*: the testing service may be down. Try again in a moment.

---

## 2. Invite the players

First, check **Settings › Account**, which is there while the server is on: **Your name for the players** is how the table sees you in the chat, the rolls and the list. It starts as this computer's user name; change it and tap **Save name**. Account also has the language and **Where you come in as the owner** (this window and the paired phones). There is no password: your click in the app is the proof that it is you.

You invite from the **folder's page**, as on a UniVerso, in the window of the served folder (section 3 below):

1. **A table:** in the table's card, **Invite players › Make link**. Above the button, **Hosted on** says where the table is: *this computer* with the address the invitation will carry (the internet link, if it is on; else your network's), or the **UniVerso** the window is on. **A folder with no table:** **Share…** in the folder's menu, type the person's e-mail and the role (**reads** or **edits**), then **Share**; no account has that e-mail yet, so the dialog offers **Make an invitation link**. Either way the link shows **once**: copy it and send it to the person however you like. It is good for **7 days** and for **one person only**.
2. The player opens the link, makes the account with **any e-mail of theirs** (**nothing is sent**: the e-mail is only a sign-in name), a name and a password, and then signs in at the table address.
3. In **Settings › Turn into a server**, the **Invitations** list shows every invitation of this server (waiting, accepted by…, ended, expired) and **End** closes one still waiting.

With the link box unticked, an invitation goes out with your **network's** address: only someone on it can open it, and the browser will complain about the computer's certificate — the same warning as [pairing a phone](/en/wiki/verso-on-phone-and-tablet/#pair-the-phone-with-your-computer); accept it only on a network you trust.

Whoever comes in sees only what you shared, with the role you gave. How to run the table (releasing notes, players, rights) is in [Running a Table](/en/wiki/running-a-table/).

**For whoever was invited:** the sign-in page reminds you to open the invitation's link **first** and make the account. If the table does not answer, the window says **The table is offline** — the game master's computer may have been turned off or gone to sleep, or the link ended — with **Try again**, and tries by itself every 30 seconds. If the game master sent a new link, just open it.

---

## 3. Your window at the table

There is no button to sit at the table. With the server on and the window's folder served, a folder's menu (right-click, or touch and hold) has **Make this folder a table**, and the list's background has **Make the whole folder a table** — as on a UniVerso. Choosing it makes the window a client of your own server, as the owner, and the table is made there: the Table, the campaign and the invitations, as on a UniVerso. **Share…** and the read link do the same. A served folder that **already has** a table is sat at as soon as you open it, or as soon as you turn the server on with it open. The table can be in any folder inside it, and each player sees only her table's folder.

On the table's card, **Copy the table's link** copies its address to send to players who already have an account: the internet link's, while it is on; otherwise your network's, and Verso says that one opens only on your network.

**Stop serving** is on the folder's page and in the tree's background menu. First Verso says how many players lose access until you serve it again. **The table, its chat and rolls are kept**: serve the folder again and the same table comes back, with the same people. If the server **stops**, or you stop serving the folder the window sits at, the window goes back to the computer's folder by itself and says so. Next time, Verso opens the computer's folder, never the table.

### Take the table to the other server

A folder served from here that also syncs with a UniVerso is in both places, but **a table lives on one server**. In the table's dialog, **Move to another server › Move this table to …** takes it to the other one (from the computer to the UniVerso, or back). First Verso asks and says what happens:

- **There** the table starts with **every note hidden and no players**: invite them again. The window goes there and opens the new table's dialog.
- **Here** the table closes to its players. Whoever opens it reads *The table moved to another server. The game master took this table to another server. Ask them for a new invitation.* Its chat, rolls and rights stay here until you **undo** this table.
- **Undoing the old table** makes it an ordinary folder here and **takes out the players it had**: they lose access to this folder on this server. Whoever has a place in the folder outside the table stays.

### Share a folder

In the window of the served folder, **Share…** in a folder's menu gives it to a person you invited, with the role **reads** or **edits** (never **owner**). The click in the app counts as your confirmation: no password is asked. The share stays from one session to the next, and you revoke it in the same dialog. It holds in a folder served only in part too: the folders chosen in it are what your phones see, and any folder inside it can be shared or made a table. Players and phones share nothing here.

### Read links

Under **Read links**, **Turn read links on** starts **off**. On, you make a link in a note's or a folder's menu **in the window of the served folder**, and whoever has it reads, with no account and without editing. Turning it off **closes every link at once**; on again reopens the ones you did not revoke. A link opens only what it shows, in a folder served whole or in part.

---

## 4. Your own address, which does not change

The quick link changes every time. If you have your own **domain**, you can have a fixed address, like `table.yourdomain.com`, and **without the 12-hour limit**. You need a **Cloudflare** account with the domain added to it (the free plan will do). Under **Use my own address**:

1. **Own a domain and add it to Cloudflare** — once, by hand. **How to add a domain to Cloudflare** leads to their page.
2. **Sign in to Cloudflare**: the browser opens, you sign in and pick the domain. Verso waits up to 10 minutes. If the browser does not open, the panel shows the page to open by hand.
3. Type the **Address** (`table.yourdomain.com`: lowercase letters, numbers and hyphens, with a dot) and tap **Set up**. Verso makes the tunnel and the DNS record; it can take a few minutes to open everywhere.

Then tick **Use my address for the link (instead of a quick link)** with the link off. The same address works in every session.

- **Remove my address** deletes the tunnel at Cloudflare (the DNS record may stay there; delete it in the dashboard if you like). If Cloudflare cannot be asked, **Forget on this computer only** clears it here, and the tunnel stays there until you delete it.
- With **Keep on when the app starts**, your own address comes back when the app opens; the quick link never does.

---

## 5. Accounts, passwords and other apps

- **Password or passkey:** on your **network**, people sign in with the **password**. A **passkey** only works through the internet link. A passkey made on a **quick link goes away with it**; on **your own address**, it stays.
- **People invited:** the list shows who accepted an invitation — name, e-mail, the folders they reach and when they were last seen. Nothing is sent by e-mail, so whoever forgot their password asks you: **New password** makes a link that works **once, for 24 hours**, and is shown only then — copy it and send it yourself; the person's sessions end at once, and the old password works until they make the new one. **End sessions** disconnects their browser, apps and tokens (the password stays). **Remove** asks first and deletes the account: they lose everything they reached here, and their apps and tokens stop at once (the notes stay); you can invite them again later. Turn the server on before asking for a new password: the link needs an address.
- **Other people's Verso apps:** someone you invited can connect their own Verso (**Settings › Servers**) and sync the folder shared with them. Use the **link's address**: on the network, their Verso does not trust your computer's certificate and does not connect. The list shows each app with its name and the person, and **End** disconnects it. On a phone, the **Verso app** (Android, iPhone, iPad) connects and syncs like the computer's, through the link's address; the phone's **browser** opens the window without keeping a copy.
- **Tokens:** whoever has an account can make, in the browser, a personal token for a program of theirs; it reaches only that account's folders, and never opens anything of the computer's owner.
- **Your own phone or browser, away from home:** with the link on, **Pair a phone** shows the link's QR (with the network on too, a button switches between the network's QR and the link's). On the phone, open the QR — or the link's sign-in page, **Pair this phone with a code** — and type the code. It works only **while Pair is open on the computer** (2 minutes, 3 tries in all); otherwise the link does not even try the code. In **Was it you?**, the computer says the request came **through the link** and from which address. A device paired through a **quick link** leaves with that link (when it closes, changes or the server stops); through **your own address** it stays.

---

## 6. Stop

**Stop serving** (in the section, the status bar or the icon's menu) turns everything off at once: the link, the network and the seated window. Closing the app does the same. If the computer sleeps, the table drops: the players see **The table is offline**.

---

If you would rather have a server that stays on by itself, see [Verso on a Server](/en/wiki/verso-on-a-server/) and [Installing the server on a NAS or a VPS](/en/wiki/installing-the-server-on-a-nas-or-a-vps/).

Previous: [Verso on Phone and Tablet](/en/wiki/verso-on-phone-and-tablet/) · Next: [Verso on a Server](/en/wiki/verso-on-a-server/) · [Home Page](/en/wiki/welcome-to-verso/) · Verso Tour
