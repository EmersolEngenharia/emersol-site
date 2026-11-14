# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/da9ec21d-8221-4445-bfac-4d2aeb9d9849

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/da9ec21d-8221-4445-bfac-4d2aeb9d9849) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Deploy no VPS (Plesk)

A publicação do site institucional fica em [`.github/workflows/deploy-site.yml`](.github/workflows/deploy-site.yml). O Actions gera o `dist/` com Vite e envia essa pasta por rsync/SSH. O job não publica nada enquanto a variável de repositório `DEPLOY_VPS` não estiver definida como `true` — isso vale para push na `main` e para o disparo manual.

`https://emersol.com.br` é a URL canônica. `https://emersol.ai` serve o mesmo build, com canonical, Open Graph, sitemap e robots apontando para o `.com.br`.

### Secrets

Em **Settings → Secrets and variables → Actions → Secrets**, neste repositório:

| Nome | Função |
| --- | --- |
| `VPS_HOST` | IP ou hostname SSH do Plesk |
| `VPS_USER` | usuário SSH com permissão de escrita no destino |
| `VPS_SSH_KEY_B64` | chave privada em base64, numa linha só (formato preferido) |
| `VPS_SSH_KEY` | chave privada em texto; usada somente se `VPS_SSH_KEY_B64` estiver vazio |
| `SITE_VPS_PATH` | diretório do site institucional no VPS |

`VPS_HOST`, `VPS_USER`, `VPS_SSH_KEY_B64` e `VPS_SSH_KEY` usam os mesmos nomes do repositório `EmersolEngenharia/emersoft-emersol-ai`. Secrets de repositório não são herdados: os valores precisam existir aqui também.

`SITE_VPS_PATH` é exclusivo deste site. O destino do Emersoft continua no secret `VPS_PATH` do outro repositório. Um exemplo de docroot institucional é `/var/www/vhosts/emersol.ai/httpdocs`. O workflow interrompe o envio se `SITE_VPS_PATH` estiver vazio ou se o caminho contiver `app.emersol.ai` ou `emersoft`.

### Variável

Em **Settings → Secrets and variables → Actions → Variables**:

| Nome | Função |
| --- | --- |
| `DEPLOY_VPS` | `true` habilita o deploy. Sem esse valor o job é ignorado. |

### Checagem e o que o rsync preserva

Depois do envio, o workflow exige HTTP 200 em `https://emersol.ai` e que o HTML servido traga o canonical `https://emersol.com.br/`. A checagem passa quando o WWW-Root de `emersol.ai` é a pasta de `SITE_VPS_PATH`.

O rsync usa `--delete` e preserva no destino `.well-known/`, `cartao/` e `tmp-announce/`.
