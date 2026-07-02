# Site — Fabricio Corrêa Odontologia

Site institucional (Vite + React + TypeScript + Tailwind v4). Duas páginas: Início e
Entre em contato, com CTAs de WhatsApp/telefone reais e conteúdo portado do site anterior.

## Rodando localmente

```bash
npm install
npm run dev      # http://localhost:5173 (ou próxima porta livre)
npm run build    # build de produção em dist/
```

## Onde mexer

- `src/data/content.ts` — todo o texto do site (telefone, endereço, depoimentos, serviços). Editar aqui, não espalhado pelos componentes.
- `src/components/placeholders/` — `HeroPlaceholder` e `CaseImagePlaceholder` usam fotos mockup do Unsplash (`public/img/hero-clinic.jpg`, `public/img/case-01.jpg`...`case-10.jpg`). Trocar os arquivos por fotos reais da clínica quando houver, mantendo os mesmos nomes.
- `src/index.css` — paleta (navy/sky/ink) e fontes (Fraunces + Inter), via `@theme` do Tailwind v4.
- `src/pages/` — `Home.tsx` e `Contato.tsx`, cada uma monta as seções de `src/components/sections/`.

## Deploy

Publicado via GitHub Pages, com deploy automático a cada push na `main`
(`.github/workflows/deploy.yml`). Fluxo simples: sem branches de staging, `main` é produção.

URL: `https://kaerealarcon.github.io/dr-fabricio-correa-rp/`

Detalhes importantes por causa do GitHub Pages ser um "project page" (serve num subcaminho,
não na raiz do domínio):

- `vite.config.ts` tem `base: '/dr-fabricio-correa-rp/'`
- `App.tsx` passa `basename={import.meta.env.BASE_URL}` pro `BrowserRouter`
- `npm run build` copia `dist/index.html` pra `dist/404.html` no final — sem isso, acessar
  `/contato` direto (ou dar F5 nela) cai em 404, porque o GitHub Pages não sabe que essa
  rota existe (é o React Router que resolve, só depois que o `index.html` carrega)

**Se um domínio próprio for apontado pro Pages no futuro** (`odontofabricio.com.br`): trocar
`base` pra `/` em `vite.config.ts` e adicionar `public/CNAME` com o domínio.

**Passo manual único** (já feito ou a fazer uma vez só): em Settings → Pages do repo no
GitHub, "Source" precisa estar em "GitHub Actions" — sem isso o workflow builda mas não
publica.

## Pendências conhecidas

- Fotos do hero e da galeria de implantes são mockups do Unsplash (uso editorial/placeholder) — trocar por fotos reais da clínica/Dr. Fabricio assim que houver.
- Domínio próprio ainda não apontado pro GitHub Pages (ver seção Deploy acima).
