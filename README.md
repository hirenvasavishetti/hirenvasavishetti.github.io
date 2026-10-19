# Hiren Vasavishetti — Portfolio

A responsive, static portfolio built with React, TypeScript, Vite, Tailwind CSS, Motion and Lucide. Original navy-and-white design inspired by the reference site's clear structure and expandable project details; no reference source or assets are copied.

## Local development

Use Node.js 22 LTS and pnpm 10 (the CI version), or pnpm 11.

```sh
pnpm install
pnpm dev
```

Open the URL printed by Vite. `pnpm build` checks TypeScript and builds `dist/`. `pnpm preview` serves that production build. Do not open index.html directly through a file URL.

## Personalise

Edit `src/data.ts` for personal information, social links, email, education, skills, experience, certifications, achievements and project content. Empty links display an explicit unavailable state; they do not send visitors to guessed accounts. Set `email` to an address without `mailto:`. Set GitHub and LinkedIn to complete HTTPS URLs.

Email, LinkedIn and GitHub are configured with the owner-supplied details. There is no CV section or download.

The finance list is labelled as interests, not verified proficiency. Populate skills with confirmed evidence and update `description`, optional `examples` and `footnote`. Supply real dates and credentials before removing placeholder notices.

The acquisition-financing and PepsiCo / Celsius case studies are populated from the existing project chats and supporting local project documentation. Financial figures are dated, conditional model outputs, not realised transaction outcomes. The portfolio currently contains these two projects; future projects can be added to the configuration. Technical skills are displayed as names only: Microsoft Excel, Python, SQLite, Power BI, and the portfolio development stack added at the owner’s request (React, TypeScript, Vite and Tailwind CSS). Professional experience lists the owner-confirmed upcoming Spring Week Work Experience at Almacantar; no dates or completed responsibilities are claimed. The first-person introduction is draft wording based on the supplied interests and education.

## Add a project

Add a `Project` object to the `projects` array in `src/data.ts`. Give it a unique URL-safe `id`, title, summary, category, tags, status, visual type, sections, images and links. Each section has a `title` and a `points` array of bullet-point strings. Cards and case-study dialogs are generated automatically. Supported visual types are `financing`, `valuation` and `analytics`; these are original concept illustrations, not financial outputs.

For screenshots, put images in `public/projects/`, use a relative path such as `./projects/model.webp`, and provide meaningful alt text and a caption. Link only to verified repositories, reports or demos. Set each project’s `notice` to explain its scope, dates and evidence limitations, and optionally add a `takeaway`. These fields appear in the reusable dialog. M&A supporting documents are bundled in `public/projects/pepsico-celsius/`; replace them only alongside a reconciled content update.

## Structure

- `src/data.ts`: editable profile and project content
- `src/App.tsx`: sections, navigation and hash URL state
- `src/components/ProjectCard.tsx`: reusable project card
- `src/components/CaseStudy.tsx`: native accessible modal dialog
- `src/components/ProjectVisual.tsx`: original schematic artwork
- `src/styles.css`: responsive layout and design tokens, with Tailwind utilities
- `.github/workflows/deploy.yml`: GitHub Pages build and deployment

Dialogs have native focus containment, Escape dismissal, focus restoration and a close button. Opening a project adds a `#project/project-id` history entry. Browser Back closes it and Forward reopens it. Direct project URLs work without server rewrites on GitHub Pages. The page includes a skip link, visible focus indicators, semantic landmarks, reduced-motion support and a mobile navigation menu.

## Deploy to GitHub Pages

1. Create or choose a GitHub repository. Copy the contents of this portfolio folder, including `.github`, to the repository root. Do not commit `node_modules` or `dist`.
2. Push the source and `pnpm-lock.yaml` to `main`.
3. In repository Settings → Pages, select **GitHub Actions** as the source.
4. The included workflow installs locked dependencies, builds and deploys `dist/`. Subsequent pushes to `main` deploy automatically. You can also run it from the Actions tab.

`base: './'` supports both `username.github.io` and `username.github.io/repository/`. Hash project links avoid GitHub Pages route 404s. If your default branch is not `main`, change the workflow trigger. A custom domain can be configured through Pages settings and an appropriate `public/CNAME` file.

Repository: https://github.com/hirenvasavishetti/hirenvasavishetti.github.io

GitHub Pages address: https://hirenvasavishetti.github.io/

The included workflow deploys updates from `main`. The public project downloads are the Excel model and pitch-book PDF.

## SEO and performance

Update the title, description and Open Graph fields in `index.html` when the profile changes. Once a public URL exists, add an absolute canonical URL and `og:url`; add an original social preview image if desired. Project dialog titles update the document title, but hash case studies are not separate indexed documents. Fonts are self-hosted and no third-party analytics or remote imagery is loaded. Vite compresses production bundles; use WebP/AVIF and sensible image dimensions for future screenshots.

## Before public launch

- Verify the supplied contact URLs and email.
- Keep project figures reconciled to their supporting files and preserve dated assumptions. Add future projects when their content is ready.
- Confirm education details, skills, experience and credentials.
- Run `pnpm build`, check desktop/mobile navigation, and open/close a project using keyboard and browser history.
- Verify the deployed repository URL and contact links after the first Pages deployment.
