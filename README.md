# Chariot website (prototype)

Astro, with three.js for the halftone wheel. The homepage turns a bronze wheel (one spoke per project) as you scroll; each project page opens on a 3×3 project sheet that slides to the next project.

```bash
npm install
npm run dev     # http://localhost:4321
npm run build
```

## Adding a project

Add one file to `src/content/projects/`. The homepage, the wheel's spoke count, the dock and the project sheet all update from it.

```yaml
---
title: The Ken
summary: One line, shown on the homepage and the sheet.
order: 5                     # position on the wheel
kind: publication            # product | web | publication | brand
disciplines: [Product design, Visual design]
color: "#B8472E"             # tints the sheet and its halftone
year: 2023                   # optional
poster: https://…/cover.png  # centre of the sheet, homepage poster, dock icon
pieces:                      # optional; fill the four halftone cells and the gallery
  - { src: https://…/1.png, label: Reading }
live: https://…              # optional
featured: true               # on the homepage wheel
---

## The brief
## What we did
## What changed
```

The write-up is optional. A project with no body still gets a full sheet from its poster and pieces.

## Giving a project its own page

Set `presentation: custom` in its file and add `src/pages/work/<id>.astro`. The shared sheet then skips it, and the dock and homepage still link to it. `the-ken.astro` is the first one: The Ken presented as an edition of The Ken, using `data-progress` sections (see `src/scripts/scroll.ts`) for the scroll-linked motion.

## Notes

- Images are hotlinked from the current Framer site for now. Move them into the repo (or object storage) before launch.
- The image halftone is pure CSS, so it works on any image. The wheel's halftone is a shader.
- Sound is off until the visitor turns it on. Arrow keys move between projects.
