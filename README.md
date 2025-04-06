# PosterVote 🎬🗳️

**PosterVote** to interaktywna aplikacja webowa, która pozwala użytkownikom głosować na najlepsze plakaty filmowe. Użytkownicy mogą oddawać głosy "w górę" lub "w dół" na plakaty, a także przejść do dedykowanej zakładki plakatu, gdzie dostępne są szczegóły filmu, możliwość komentowania oraz lajkowania komentarzy.

## 📋 Spis treści

- [Demo](#demo)
- [Funkcje](#funkcje)
- [Technologie](#technologie)
- [Instalacja](#instalacja)
- [Użycie](#użycie)
- [Konfiguracja](#konfiguracja)
- [Przykłady](#przykłady)
- [Wkład](#wkład)
- [Licencja](#licencja)

## Struktura plików

## 📁 Struktura projektu

```bash
📦 project-root/
├── public/
│   ├── posters/
│   │   ├── inception.jpg
│   │   └── pulpfiction.jpg
│   ├── data.js
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── src/
│   ├── app/
│   │   ├── wall/
│   │   │   ├── [slug]/
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── NavbarListElement.tsx
│   │   └── wall/
│   │       ├── Comment.tsx
│   │       ├── CommentsForm.tsx
│   │       ├── CommentsList.tsx
│   │       └── PosterCard.tsx
│   ├── ui/
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── input.tsx
│   ├── lib/
│   │   └── utils.ts
│   └── theme-provider.tsx
├── .gitignore
├── components.json
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
└── tsconfig.json
```




## ✨ Funkcje

- Przeglądanie plakatów filmowych
- Głosowanie na plakaty (głos w górę / w dół)
- Strona szczegółowa dla każdego plakatu z:
  - Informacjami o filmie
  - Sekcją komentarzy
  - Możliwością lajkowania komentarzy
- Stylowy interfejs oparty o Tailwind CSS i ShadCN UI
- Ikony z biblioteki Lucide React

## 🛠 Technologie

Projekt został zbudowany przy użyciu następujących technologii:

- [Next.js](https://nextjs.org/) – framework Reacta
- [Tailwind CSS](https://tailwindcss.com/) – narzędzie do stylowania
- [ShadCN UI](https://ui.shadcn.dev/) – komponenty UI
- [Lucide React](https://lucide.dev/) – nowoczesne ikony SVG

