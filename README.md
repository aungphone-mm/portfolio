# Full Stack Developer Portfolio 🚀

A sleek, performant, and modern web developer portfolio built with Next.js 14, React, and Framer Motion. 
Features English & Burmese (Myanmar) language toggling and a beautiful glassmorphic UI.

## ✨ Features

- **Modern Glassmorphic UI**: Beautiful blurry glass cards, animated orbs, and smooth gradients.
- **Language Toggle (EN/MY)**: Built-in localization support directly swapping English to Burmese seamlessly across all components with context providers.
- **Project Filtering**: Categorized project showcase (Full Stack, AI, Analytics, etc).
- **Smooth Animations**: Powered by `framer-motion` for springy reveals, hover states, and smooth scrolling.
- **Contact API Route**: Built-in Next.js App Router API `POST` endpoint simulating contact form submission with loading, success, and error UI states.
- **Fully Responsive**: Crafted carefully for desktop, tablet, and mobile viewing.
- **SEO Optimized**: Metadata API integration for OpenGraph and Twitter cards.

## 🛠️ Tech Stack

- **Framework**: [Next.js (App Router)](https://nextjs.org/)
- **Library**: [React 19](https://react.dev/)
- **Styling**: Pure CSS Modules (`/app/globals.css` with CSS custom properties)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: Inter (English) & Padauk (Burmese) via Google Fonts

## 🚀 Getting Started

First, install the dependencies using `npm`:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the portfolio!

## 📁 Project Structure

```bash
├── src/
│   ├── app/           # Next.js App Router (pages, layout, globals.css, API routes)
│   ├── components/    # Reusable UI components (Hero, Navbar, Projects, Contact, etc.)
│   ├── context/       # React Context Providers (LanguageContext)
│   ├── data/          # Constant data definitions (portfolioData.js)
│   └── lib/           # Utility functions and dictionaries (translations.js)
```

## 📝 Customization

1. **Content**: Edit `src/data/portfolioData.js` to change projects, links, and contact details.
2. **Translations**: Edit `src/lib/translations.js` to change text or add a new language layer.
3. **Theme**: Modify CSS variables in `src/app/globals.css` to instantly change the coloring scheme across the entire platform.

---
_Crafted with ❤️ and lots of coffee._
