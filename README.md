# Frostnorth Talent Guild Front-End

A React + Vite + TypeScript front-end for the fantasy-Russian HR agency.

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## Available Scripts

- `npm run dev` – start dev server with HMR
- `npm run build` – build production bundle
- `npm run preview` – preview production build locally
- `npm run lint` – run ESLint

## Stack

- React 18 + Vite
- TypeScript
- TailwindCSS (utility-first styling)
- React Router v6
- Zustand (state management)
- i18next (EN / RU localisation)

## Project Structure

```
src/
  assets/            # images, icons, fonts
  components/        # reusable UI elements
  layouts/           # page shells
  pages/             # route components
  store/             # zustand slices
  locales/           # i18n resources
  App.tsx            # main app router
  main.tsx           # entry point
```

## License

MIT 