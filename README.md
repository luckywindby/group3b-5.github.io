# Campus Compass — CPT208 Process Portfolio

> A Human-Centred Campus Tour and Navigation Web App for XJTLU Students and Visitors

This repository hosts the **process portfolio** for the Campus Compass project, built as part of the CPT208 Human-Centric Computing coursework. The portfolio documents our motivation, user research, ideation, technical implementation, early evaluation, and reflections — all presented in a bilingual (English / 中文) single-page application.

## ✨ Features

- **Bilingual Support** — Full English and Chinese content with one-click language switching
- **Component-based Architecture** — Built with React 19 + Vite 6 for maintainability
- **Responsive Design** — Adapts seamlessly from desktop to mobile
- **Scroll-aware Navigation** — Active section highlighting as users scroll through the portfolio
- **Evidence Tagging** — Visual indicators for repo-backed, poster-derived, and pending evidence

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 |
| Build Tool | Vite 6 |
| Styling | Vanilla CSS with CSS variables |
| Language System | React Context + localStorage |
| Deployment | GitHub Pages (static `dist/`) |

## 📁 Project Structure

```
├── index.html                 # Vite entry point
├── package.json
├── vite.config.js             # base: './' for GitHub Pages
├── src/
│   ├── main.jsx               # React mount
│   ├── App.jsx                # Root component
│   ├── index.css              # Global styles (~830 lines)
│   ├── i18n/
│   │   └── LanguageContext.jsx # EN/ZH context provider
│   ├── components/
│   │   ├── T.jsx              # <T en="..." zh="..." /> bilingual text
│   │   ├── Header.jsx         # Sticky nav + scroll highlight
│   │   ├── Footer.jsx
│   │   └── UI.jsx             # Reusable primitives (Chip, Badge, etc.)
│   ├── sections/
│   │   ├── HeroSection.jsx
│   │   ├── MotivationSection.jsx
│   │   ├── RequirementsSection.jsx
│   │   ├── IdeationSection.jsx
│   │   ├── ImplementationSection.jsx
│   │   ├── EvaluationSection.jsx
│   │   └── ReflectionSection.jsx
│   └── assets/                # Images (poster, buildings, icons)
└── dist/                      # Production build output (gitignored)
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm (comes with Node.js)

### Install & Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
# Create optimised production build
npm run build

# Preview the production build locally
npm run preview
```

The output goes to the `dist/` directory, ready for static hosting.

## 🌐 Deployment (GitHub Pages)

The project uses `base: './'` in `vite.config.js` for relative asset paths. To deploy:

1. Run `npm run build`
2. Push the contents of `dist/` to your GitHub Pages branch, or configure GitHub Actions to build and deploy automatically.

## 👥 Team

| Member | Student ID | Main Role |
|--------|-----------|-----------|
| Binyu Li | 2364567 | System development, HCI design, visual refinement |
| Haoyan Xu | 2359977 | Icon design, visual layout, poster production |
| Shaozhen Tian | 2364327 | Coordinate collection, route verification |
| Yifan Jin | 2361014 | Coordinate collection, route verification |

## 📄 License

This project is part of the CPT208 coursework at Xi'an Jiaotong-Liverpool University (XJTLU).
