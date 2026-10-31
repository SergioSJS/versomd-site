---
title: "Syncing with a Cloud"
description: "A folder kept the same as a folder in a Nextcloud (WebDAV) or an S3 bucket you already have, with no server: the form, the S3 key limited to one folder, the password in the keychain and what to expect."
order: 29
group: server
slug: "syncing-with-a-cloud"
twin: "sincronizar-com-uma-nuvem"
source: "demo-vault-en/29 - Syncing with a Cloud.md"
updated: "2026-10-21"
---
This note shows how to keep a Verso folder **the same as** a folder in a cloud you **already have** — a Nextcloud (or another WebDAV server) or an S3 bucket — without installing any server. It is the short alternative to the [UniVerso](/en/wiki/verso-on-a-server/): your notes stay Markdown files in your folder, and a copy sits in the cloud for your other computers.

> **Note: Computers only**
>
> A folder tied to a cloud syncs **between computers running the desktop app**. The phone, the tablet and the browser do not sync with a cloud: for them, use a [UniVerso](/en/wiki/verso-on-a-server/). A cloud folder also has no simultaneous editing, no sharing with other people, no roles and no server bin.

> **Tip: Dropbox, OneDrive and Google Drive**
>
> They show in the **Sync with…** list as "coming soon": they depend on developer accounts that do not exist yet. WebDAV and S3 work now.

---

## 1. How it works, in three sentences

1. Each file is the unit: Verso compares your folder, the cloud and what the two knew the last time, and sends to the other side only what changed.
2. Every write to the cloud says **which version it is replacing**. If another computer changed the file meanwhile, the cloud refuses and Verso keeps both versions side by side — the cloud's under the name, this computer's in a "(conflict, computer name, date)" copy. Nothing is lost.
3. **That is why Verso refuses some clouds:** when you connect, it writes and deletes a test file (in a `.verso-probe` folder) to see whether the cloud obeys that rule. If it does not, Verso says why and **does not sync**, rather than risk an edit of yours.

---

## 2. With a Nextcloud (or another WebDAV)

1. In Nextcloud, open **Settings › Security › Devices & sessions**, type "Verso" under **App name** and press **Create new app password**. Copy the password: it shows only once. (Use this password, not your account's.)
2. In **Files**, make a folder just for this, for example `Verso`. (Verso makes the last folder of the address if it does not exist, but not the ones above it.)
3. In Verso, open the folder you want to sync, go to **Settings › Sync** and choose **Sync with… › WebDAV**.
4. Fill in:
   - **The folder's address**: `https://your-nextcloud/remote.php/dav/files/YOUR_USER/Verso`
   - **User**: your Nextcloud user name.
   - **Password**: the app password from step 1.
5. Press **Check the cloud**. Verso tests and shows: how many files are there already, the free space, what the first sync will do, and what happens when you delete a file.
6. If all is well, **Sync this folder**.

> **Warning: HTTPS**
>
> The password goes only over **https://**. An `http://` address is accepted only if it is on **your local network** (a NAS, a Raspberry Pi) and you tick the box that confirms it: there the password travels unencrypted across your network.

---

## 3. With an S3 bucket

This fits Amazon S3 and compatible services (MinIO, Cloudflare R2, Wasabi and others). Some services **do not accept** conditional writes — Backblaze B2's documentation, for one, does not promise them — and Verso will refuse them at the check, saying why.

### 3.1 A key that touches only one folder of a bucket

Do not use your account's key. Make a key **just for Verso**, which sees **one bucket and one folder inside it** and nothing else. On Amazon (IAM), make a user, a policy with the JSON below and an access key for that user. Replace `my-vault` with your bucket's name and `Verso/Campaign` with the folder:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "ListOnlyTheFolder",
      "Effect": "Allow",
      "Action": "s3:ListBucket",
      "Resource": "arn:aws:s3:::my-vault",
      "Condition": { "StringLike": { "s3:prefix": ["Verso/Campaign/*"] } }
    },
    {
      "Sid": "ReadWriteDeleteOnlyInTheFolder",
      "Effect": "Allow",
      "Action": [
        "s3:GetObject",
        "s3:PutObject",
        "s3:DeleteObject",
        "s3:AbortMultipartUpload",
        "s3:ListMultipartUploadParts"
      ],
      "Resource": "arn:aws:s3:::my-vault/Verso/Campaign/*"
    },
    {
      "Sid": "KnowWhetherTheBucketKeepsVersions",
      "Effect": "Allow",
      "Action": "s3:GetBucketVersioning",
      "Resource": "arn:aws:s3:::my-vault"
    }
  ]
}
```

The third block is optional: without it Verso cannot say, when connecting, whether the bucket keeps earlier versions of deleted files. On MinIO and Cloudflare R2 the way is the same in spirit: make a key tied to a policy that only lists, reads, writes and deletes in that bucket and that prefix.

### 3.2 In Verso

1. Open **Settings › Sync** on the folder and choose **Sync with… › S3**.
2. Fill in:
   - **The service's address**: empty for Amazon S3; for another service, the address it gives (for example `https://minio.yourhome.lan:9000`).
   - **Region**: for example `sa-east-1` (empty means `us-east-1`).
   - **Bucket**: `my-vault`.
   - **Folder inside the bucket**: `Verso/Campaign`.
   - **Access key ID** and **Secret key**: the ones from the key of step 3.1.
   - **The bucket goes in the address's path**: ticked for MinIO and most services you host; Amazon does not need it.
3. **Check the cloud** and, if it will do, **Sync this folder**.

---

## 4. The password is not in the folder

The WebDAV password and the S3 secret key go to the **system's keychain** (Keychain on macOS, Credential Manager on Windows, GNOME Keyring or KWallet on Linux), never to the folder, the settings or the log. Verso sends them once, when you check, and the window empties the field at once; it never reads them back. **Disconnect** deletes the password from the keychain.

> **Note: On Linux with no keyring**
>
> If the computer has no keyring running, Verso refuses to sync with a cloud and explains how to install one (GNOME Keyring or KWallet). It does not keep the password in a file.

---

## 5. What to expect

- **The first time never deletes anything.** What one side alone has goes to the other; a file that differs on both is kept twice (the cloud's version under the name, this computer's beside it).
- **When it syncs:** when the folder opens, after each change of yours (after a few seconds, to gather a burst of edits) and every five minutes. Never in a fast loop.
- **Deleting is final in the cloud**, unless the bucket keeps versions — the check says which is yours. On this computer, the deleted file goes to the folder's bin, as always.
- **Names the service does not keep** (such as `.part` on Nextcloud) stay only here, listed with the reason under **Not synced**.
- **If the cloud asks for calm** (a request limit), Verso waits as long as it says, or a growing time, and tries again.
- **A folder inside Dropbox, OneDrive or iCloud?** Avoid it: two syncers working on the same files is risky.
- **To stop:** **Disconnect…** in the same section. The files stay as they are, here and in the cloud.

Your computer's name, which shows in a conflict's copy, is changed in **Settings › Sync › This computer's name**, with no server needed.

---

To finish, see [Colour Swatches](/en/wiki/colour-swatches/): the small square of the colour beside a colour code.
