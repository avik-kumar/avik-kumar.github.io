# avik-kumar.github.io

Personal portfolio of Avik Kumar, built with [Astro](https://astro.build) and deployed to GitHub Pages. `STARTER.md` is the product and design brief.

## Development

Requires Node.js 22.22 or newer.

| Command           | Action                                                  |
| ----------------- | ------------------------------------------------------- |
| `npm install`     | Install dependencies                                    |
| `npm run dev`     | Start the dev server at `http://localhost:4321`         |
| `npm run build`   | Type-check and build the production site into `dist/`   |
| `npm run preview` | Serve the production build locally                      |
| `npm run check`   | Type-check `.astro` and `.ts` files                     |

The dev server also serves a design reference at `/styleguide/`; it is never generated in production builds.

## Deployment

Every push to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages. The repository's **Settings → Pages → Source** must be set to **GitHub Actions**.

The site is configured as a user site served from the domain root (`site` in `astro.config.mjs`). To serve it from a repository subpath instead, add `base: '/<repo-name>'` to `astro.config.mjs`. Internal links go through `withBase()` in `src/lib/url.ts`, so no other changes are needed.

## Updating content

- **Contact links, email, résumé path, navigation:** `src/site.config.ts`.
- **Résumé:** replace `public/resume.pdf`.
- **Projects:** one Markdown file per project in `src/content/projects/`. The frontmatter schema lives in `src/content.config.ts`; the filename becomes the URL slug.
- **Drafts:** set `draft: true` in a project's frontmatter to show it in `npm run dev` but exclude it from production.

## Placeholder markers

Mark unverified facts with `[[TODO: ...]]` while drafting. The production build fails if any marker reaches the output, so nothing unverified is published by accident. Markers inside drafts are fine because drafts are never built.
