---
title: "Sincronizar com uma Nuvem"
description: "Uma pasta igual a uma pasta de um Nextcloud (WebDAV) ou de um bucket S3 que você já tem, sem servidor: o formulário, a chave de S3 limitada a uma pasta, a senha no chaveiro e o que esperar."
order: 29
group: server
slug: "sincronizar-com-uma-nuvem"
twin: "syncing-with-a-cloud"
source: "demo-vault/29 - Sincronizar com uma Nuvem.md"
updated: "2026-10-21"
---
Esta nota mostra como manter uma pasta do Verso **igual** a uma pasta de uma nuvem que você **já tem** — um Nextcloud (ou outro servidor WebDAV) ou um bucket S3 — sem instalar servidor nenhum. É a alternativa curta ao [UniVerso](/wiki/verso-num-servidor/): as notas continuam arquivos Markdown na sua pasta, e uma cópia fica na nuvem, para os seus outros computadores.

> **Nota: Só no computador**
>
> Uma pasta ligada a uma nuvem sincroniza **entre computadores com o app desktop**. O celular, o tablet e o navegador não sincronizam com uma nuvem: para eles, use um [UniVerso](/wiki/verso-num-servidor/). Também não há, numa pasta de nuvem, edição ao mesmo tempo, compartilhamento com outras pessoas, papéis nem a lixeira do servidor.

> **Dica: Dropbox, OneDrive e Google Drive**
>
> Aparecem na lista de **Sincronizar com…** como "em breve": dependem de contas de desenvolvedor que ainda não existem. WebDAV e S3 já funcionam.

---

## 1. Como funciona, em três frases

1. Cada arquivo é a unidade: o Verso compara a sua pasta, a nuvem e o que as duas sabiam da última vez, e manda para o outro lado só o que mudou.
2. Cada escrita na nuvem diz **qual versão ela está trocando**. Se outro computador mudou o arquivo no meio tempo, a nuvem recusa e o Verso guarda as duas versões lado a lado — a da nuvem fica com o nome, a deste computador numa cópia "(conflito, nome do computador, data)". Nada se perde.
3. **Por isso o Verso recusa certas nuvens:** quando você conecta, ele escreve e apaga um arquivo de teste (numa pasta `.verso-probe`) para ver se a nuvem obedece a essa regra. Se não obedece, ele diz por quê e **não sincroniza**, em vez de arriscar uma edição sua.

---

## 2. Com um Nextcloud (ou outro WebDAV)

1. No Nextcloud, abra **Configurações › Segurança › Dispositivos e sessões**, escreva "Verso" em **Nome do app** e toque em **Criar nova senha de aplicativo**. Copie a senha: ela só aparece uma vez. (Use essa senha, e não a da sua conta.)
2. Em **Arquivos**, crie uma pasta só para isto, por exemplo `Verso`. (O Verso cria a última pasta do endereço se ela não existir, mas não as de cima.)
3. No Verso, abra a pasta que você quer sincronizar, vá a **Ajustes › Sincronizar** e escolha **Sincronizar com… › WebDAV**.
4. Preencha:
   - **Endereço da pasta**: `https://seu-nextcloud/remote.php/dav/files/SEU_USUARIO/Verso`
   - **Usuário**: o seu nome de usuário no Nextcloud.
   - **Senha**: a senha de aplicativo do passo 1.
5. Toque em **Verificar a nuvem**. O Verso testa e mostra: quantos arquivos já há lá, o espaço livre, o que a primeira sincronização vai fazer e o que acontece quando você apaga um arquivo.
6. Se estiver tudo certo, **Sincronizar esta pasta**.

> **Aviso: HTTPS**
>
> A senha só vai por **https://**. Um endereço `http://` só é aceito se for da **sua rede local** (um NAS, um Raspberry Pi) e se você marcar a caixa que confirma isso: ali a senha viaja sem criptografia pela sua rede.

---

## 3. Com um bucket S3

Serve a Amazon S3 e os serviços compatíveis (MinIO, Cloudflare R2, Wasabi e outros). Alguns serviços **não aceitam** escrita condicional — a documentação da Backblaze B2, por exemplo, não promete isso — e o Verso vai recusá-los na verificação, dizendo o motivo.

### 3.1 Uma chave que só mexe numa pasta de um bucket

Não use a chave da sua conta. Crie uma chave **só para o Verso**, que enxergue **um bucket e uma pasta dentro dele** e nada mais. Na Amazon (IAM), crie um usuário, uma política com o JSON abaixo e uma chave de acesso para ele. Troque `meu-cofre` pelo nome do seu bucket e `Verso/Campanha` pela pasta:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "ListarSoAPasta",
      "Effect": "Allow",
      "Action": "s3:ListBucket",
      "Resource": "arn:aws:s3:::meu-cofre",
      "Condition": { "StringLike": { "s3:prefix": ["Verso/Campanha/*"] } }
    },
    {
      "Sid": "LerEscreverApagarSoNaPasta",
      "Effect": "Allow",
      "Action": [
        "s3:GetObject",
        "s3:PutObject",
        "s3:DeleteObject",
        "s3:AbortMultipartUpload",
        "s3:ListMultipartUploadParts"
      ],
      "Resource": "arn:aws:s3:::meu-cofre/Verso/Campanha/*"
    },
    {
      "Sid": "SaberSeOBucketGuardaVersoes",
      "Effect": "Allow",
      "Action": "s3:GetBucketVersioning",
      "Resource": "arn:aws:s3:::meu-cofre"
    }
  ]
}
```

O terceiro bloco é opcional: sem ele o Verso não consegue dizer, ao conectar, se o bucket guarda versões anteriores dos arquivos apagados. No MinIO e no Cloudflare R2 o caminho é o mesmo em espírito: crie uma chave ligada a uma política que só liste, leia, escreva e apague nesse bucket e nesse prefixo.

### 3.2 No Verso

1. Abra **Ajustes › Sincronizar** na pasta e escolha **Sincronizar com… › S3**.
2. Preencha:
   - **Endereço do serviço**: vazio para a Amazon S3; para outro serviço, o endereço que ele dá (por exemplo `https://minio.suacasa.lan:9000`).
   - **Região**: por exemplo `sa-east-1` (vazio vale `us-east-1`).
   - **Bucket**: `meu-cofre`.
   - **Pasta dentro do bucket**: `Verso/Campanha`.
   - **ID da chave de acesso** e **Chave secreta**: os da chave do passo 3.1.
   - **O bucket vai no caminho do endereço**: marcado para MinIO e a maioria dos serviços que você hospeda; a Amazon não precisa.
3. **Verificar a nuvem** e, se servir, **Sincronizar esta pasta**.

---

## 4. A senha não fica na pasta

A senha do WebDAV e a chave secreta do S3 vão para o **chaveiro do sistema** (Keychain no macOS, Gerenciador de Credenciais no Windows, GNOME Keyring ou KWallet no Linux), nunca para a pasta, para os ajustes ou para o log. O Verso as envia uma vez, quando você verifica, e a janela esvazia o campo na hora; ela não as lê de volta. **Desconectar** apaga a senha do chaveiro.

> **Nota: No Linux sem chaveiro**
>
> Se o computador não tem um chaveiro rodando, o Verso recusa a sincronização com uma nuvem e explica como instalar um (GNOME Keyring ou KWallet). Ele não guarda a senha em arquivo.

---

## 5. O que esperar

- **A primeira vez nunca apaga nada.** O que só um lado tem vai para o outro; um arquivo diferente nos dois fica duas vezes (a versão da nuvem com o nome, a deste computador ao lado).
- **Quando sincroniza:** ao abrir a pasta, a cada mudança sua (depois de uns segundos, para juntar uma rajada de edições) e a cada cinco minutos. Nunca num laço rápido.
- **Apagar é definitivo na nuvem**, a não ser que o bucket guarde versões — a verificação diz qual é o seu caso. Neste computador, o arquivo apagado vai para a lixeira da pasta, como sempre.
- **Nomes que o serviço não guarda** (como `.part` no Nextcloud) ficam só aqui, listados com o motivo em **Não sincronizados**.
- **Se a nuvem pedir calma** (limite de pedidos), o Verso espera o tempo que ela mandar, ou um tempo crescente, e tenta de novo.
- **Pasta dentro do Dropbox, OneDrive ou iCloud?** Evite: dois sincronizadores mexendo nos mesmos arquivos é arriscado.
- **Para parar:** **Desconectar…** na mesma seção. Os arquivos ficam como estão, aqui e na nuvem.

O nome do seu computador, que aparece na cópia de um conflito, se muda em **Ajustes › Sincronizar › Nome deste computador**, sem precisar de servidor nenhum.

---

Para fechar, veja [Amostras de Cor](/wiki/amostras-de-cor/): o quadradinho da cor ao lado de um código de cor.
