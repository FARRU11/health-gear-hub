# VitalCare Medical - Healthcare Equipment Store

**🔗 Live demo:** [https://farru11.github.io/health-gear-hub/](https://farru11.github.io/health-gear-hub/)

A modern storefront for medical equipment: stethoscopes, blood pressure monitors,
pulse oximeters, thermometers, nebulizers and wheelchairs.

**Features:** product catalog with search and filtering, product detail pages,
shopping cart, responsive layout, SEO metadata.

**Stack:** Vite, React, TypeScript, Tailwind CSS, shadcn/ui, React Router.

## Run locally

```bash
npm install
npm run dev        # http://localhost:8080
```

## Build

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

1. Repo **Settings > Pages > Source: GitHub Actions**.
2. Push to `main`. `.github/workflows/deploy.yml` builds with the correct base path
   and publishes to `https://<username>.github.io/<repo>/`.

> GitHub Pages for **private** repositories requires a paid GitHub plan
> (Pro/Team). On the free plan, make the repository public first.
