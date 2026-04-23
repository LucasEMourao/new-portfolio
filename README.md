# Portfolio

[Deploy](https://portfolio-lucasemourao-projects.vercel.app/)

Portfolio pessoal de Lucas E. Mourao com foco em sistemas, IA aplicada, automacao e produtos web. O projeto apresenta uma homepage de posicionamento, uma secao de habilidades e uma vitrine de cases com destaque para projetos full stack, arquitetura e automacao.

## Destaques

- Hero com narrativa profissional e CTAs para projetos, GitHub e CV
- Tema claro/escuro com persistencia em `localStorage`
- Secao de projetos orientada a dados, pronta para escalar
- Projeto em destaque (`OpenCut`) e grade de cases com UX hibrida no mobile
- Metadados de SEO, Open Graph, `robots.txt` e `sitemap.xml`

## Stack

- React + Vite
- React Router DOM
- Styled Components
- Framer Motion
- ESLint
- vite-plugin-image-optimizer

## Scripts

```bash
npm run dev
npm run lint
npm run build
npm run preview
```

## Estrutura

```bash
src/
├── assets/
├── components/
├── data/
├── pages/
├── routes/
├── style/
└── themes/
```

## Publicacao

O projeto esta configurado para deploy na Vercel com fallback de SPA em [vercel.json](./vercel.json).

## Status

Versao atual com `lint` e `build` validados.
