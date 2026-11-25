# Como pôr o site online (grátis, com GitHub Pages)

O site é esta pasta `site`. O resultado vai ficar num endereço como **https://TEU-USER.github.io**.

> Não uses o botão "Upload files" do site do GitHub: só aceita ficheiros até 25 MB e os teus vídeos são maiores. Usa o **GitHub Desktop**, que já tens instalado.

## 1. Criar conta no GitHub
1. Vai a https://github.com e cria uma conta.
2. O nome de utilizador vai aparecer no endereço do site. Por exemplo, com `sotam3d` o site fica em `sotam3d.github.io`.

## 2. Criar o repositório com o GitHub Desktop
1. Abre o **GitHub Desktop** e faz login (File → Options → Accounts).
2. Escolhe **File → Add local repository…** e seleciona esta pasta `site`.
3. Vai aparecer "This directory does not appear to be a Git repository". Carrega em **create a repository**.
   - Name: `TEU-USER.github.io` (exatamente o teu username seguido de `.github.io`)
   - Carrega em **Create repository**.
4. Carrega em **Publish repository**, desmarca **"Keep this code private"** e confirma.
   - O upload dos vídeos pode demorar alguns minutos.

## 3. Ativar o GitHub Pages
1. No GitHub (browser), abre o repositório → **Settings** → **Pages**.
2. Em "Build and deployment", escolhe Source: **Deploy from a branch**, Branch: **main** e pasta **/ (root)**, e carrega em **Save**.
3. Espera 1 a 2 minutos e abre `https://TEU-USER.github.io`.

## Atualizar o site depois
1. Muda os ficheiros (ou pede ao Claude para os mudar).
2. No GitHub Desktop escreve uma mensagem curta (ex.: "novo projeto"), carrega em **Commit to main** e depois em **Push origin**.
3. Ao fim de 1 a 2 minutos o site está atualizado.

## Adicionar um projeto novo
- Imagem: põe o ficheiro em `assets/img/` e copia um bloco `<button class="tile" …>` no `index.html`.
- Vídeo: põe em `assets/video/` e copia um bloco `<article class="video-card">`.
- Tenta manter os vídeos abaixo dos 20–30 MB. Com o HandBrake (grátis), o preset "Fast 1080p30" costuma chegar.
