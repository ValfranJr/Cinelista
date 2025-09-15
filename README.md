# 🎬 Cinelista

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![CI/CD](https://github.com/ValfranJr/Cinelista/actions/workflows/main.yml/badge.svg)](https://github.com/ValfranJr/Cinelista/actions)
[![Deploy Vercel](https://img.shields.io/badge/Deploy-Vercel-000?logo=vercel)](https://cinelista-three.vercel.app)

> Aplicação web para explorar e organizar filmes, construída com **Next.js** e a API da **TMDB**.

---

## ✨ Funcionalidades

- 🔎 **Busca de filmes** usando a [API do TMDB](https://developer.themoviedb.org/)
- 🎥 **Exibição de detalhes** (cartaz, título, sinopse, avaliação)
- ⚡ **Performance otimizada** (SSR/SSG do Next.js)
- 🚀 **Deploy contínuo** com GitHub Actions + Vercel

---

## 🧰 Tecnologias

- [Next.js 15](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TMDB API](https://developer.themoviedb.org/)
- [Vercel](https://vercel.com/) (deploy)
- [GitHub Actions](https://docs.github.com/en/actions) (CI/CD)

---

## 🚀 Como rodar o projeto

### 1. Clone o repositório
```bash
git clone https://github.com/ValfranJr/Cinelista.git
cd Cinelista
```

### 2.Instale as dependências
```bash
npm install
```

### 3.Configure o arquivo `.env.local`

TMDB_API_KEY=sua_chave_api_tmdb
TMDB_API_URL=sua_url_api_tmdb
NEXT_PUBLIC_TMDB_API_IMG_URL=sua_url_imagem_tmdb

### 4.Inicie o projeto
```bash
npm run dev
```
Acesse o projeto em http://localhost:3000

### 5.Build e deploy
```bash
npm run build
```

Acesse o projeto em https://cinelista-three.vercel.app

---


