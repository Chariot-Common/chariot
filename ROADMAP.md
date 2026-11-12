# Chariot website: roadmap

The plan for the new withchariot.com, one task at a time.
Each task has a one-line **what**, a short **detail** and what we **need from the team**.
Status: ✅ done · 🔨 in progress · ⬜ to do · ⏸ waiting on the team

**The idea in one line:** every project is shown as *what Chariot made*, never the client's product.
A website is the website, a brand is the mark and its uses, a product is the interface, a design
system is its parts. The object at rest, the hover acts it out in the client's own look, and the
same object carries into the case page.

---

## 1. Homepage

| # | Task | Status |
|---|---|---|
| 1.1 | White homepage at `/` | ✅ |
| 1.2 | The wheel on white | ✅ |
| 1.2b | Hero: night to dawn to day | ✅ |
| 1.3 | Skyway object | ✅ |
| 1.4 | The Ken object | ✅ |
| 1.5 | Stoa object | ✅ |
| 1.6 | Alai object | ✅ |
| 1.7 | Paper Planes object | 🔨 next |
| 1.8 | HealthFlex object | ⬜ |
| 1.9 | Value Research object | ⬜ |
| 1.10 | Neon Fund, Doxel, Tortoise objects | ⏸ |
| 1.11 | The "coming soon" projects | ⏸ |

**1.1 White homepage.** The old dark homepage is gone; `/` is the white page, `/lab/home` and `/work` redirect to it.
**1.2 The wheel on white.** Engraved in ink; its long shadow is fine hatching, plus a soft contact shadow.
**1.2b Hero: night to dawn to day** *(the sun has been removed)* *(after cruise.money: dark and paper together, not one or the other).* The hero is a dark night panel set into the white page. The wheel is printed in cream light, the line reads "We craft products, brands and websites with nuance and good taste.", and Chariot's orange sun sits on the horizon. Scrolling, the sun rises, and the wheel rolls out of the night onto the paper, changing from light to ink exactly at the panel's edge. The top bar is cream over the night, ink over the paper. Also fixed: the first-scroll hang (fonts preloaded, the wheel only draws when it moves and sleeps off-screen, the dev server prepares three.js up front).
**1.3 Skyway** *(we made: website, D2C, content).* The mobile site lies on the paper in 3D; on hover it comes apart into hero, nutrition, ingredients and the product page with the 3-click checkout, labelled, among Skyway's clouds. Opens into its own case page.
**1.4 The Ken** *(product strategy, visual design, design system).* The homepage stands as a sheet; on hover its system comes out as a print specimen: masthead, colour, type, story card, actions and tags, apps.
**1.5 Stoa** *(brand identity, website, product).* The lion mark as a thick medallion in ink; on hover it stands up red, its construction grid draws, and the rays pattern, website and business card fan out.
**1.6 Alai** *(product design, AI UX, design system).* A blank slide lies on the paper with Alai's prompt bar. On hover the prompt types itself (01 Prompt), the slide stands up and builds itself from the real product recording, looping (02 The build), a content card and the chart lift off (03 Components), and the theme switcher slides out (04 Themes).
**1.7 Paper Planes** *(UI/UX, website, editorial).* A magazine page: its column grid draws, type and pictures set onto it, then it folds into a plane and flies into the site.
**1.8 HealthFlex** *(website, visual design).* The site in 3D; sections separate and their 3D illustrations (clover, dumbbell, stethoscope) pop out as pieces.
**1.9 Value Research** *(product design, UI/UX).* A fund screen; the flow plays: search, a fund, its star rating, compare.
**1.10 Neon Fund, Doxel, Tortoise.** Same rule, each in its own motion. *Need from team:* a line on what we made, 3 to 5 screens, the logo (SVG).
**1.11 Coming soon** (Cruise, Rang De, AtLabs, Freight Tiger, Draconic). They show empty "screens coming" frames that don't open. *Need from team:* hide them until ready, or keep? Plus assets when ready.

## 2. Case pages

| # | Task | Status |
|---|---|---|
| 2.1 | Skyway case page | ✅ |
| 2.2 | The Ken case opens on its system | ⬜ |
| 2.3 | Stoa case page (brand) | ⬜ |
| 2.4 | One case template for the rest | ⬜ |

**2.1 Skyway.** Opens on the 3D site, which comes apart as you scroll; brief, "Made for the thumb", "Three clicks to checkout", the pages.
**2.2 The Ken.** It has a full case page already (an edition of The Ken). Start it on the design-system object so the hover carries straight in.
**2.3 Stoa.** Today it uses the shared sheet. Give it a brand case: the mark on its grid, the rays, the website, the product. *Need from team:* the identity sheets (the one on the old site comes back blank).
**2.4 Template.** One case layout every project can use until it gets its own: object, brief, thinking (question, three directions, the call), screens, result, credits.

## 3. Studio (about us)

| # | Task | Status |
|---|---|---|
| 3.1 | What a chariot means | ✅ |
| 3.2 | The wheel as a labelled diagram | ✅ |
| 3.3 | How we work | ✅ |
| 3.4 | The Charioteers, as a team tree | 🔨 built, waiting on names and photos |
| 3.5 | Contact and Join | 🔨 links in place, Join page to come |

**3.1** A chariot only moves when the wheel, the horses and the driver pull together: that is how we work with clients.
**3.2** The wheel drawn like a patent engraving: hub = the question, spokes = three directions, rim = one honest call, tyre = what ships.
**3.3** The process, step by step, from the homepage paragraph.
**3.4** `/studio` is now a small museum of Chariot, after Gem Quest, the Berlin museums, the old-masters-with-a-MacBook image and mew.xyz: a dark "Chari( )ot" opener with a strip of figures, a type collage of what we believe (our own withchariot.com copy only), the Charioteers as a tree of lines where hovering draws an AI detection box round each one's thing, how we work as four exhibits on pedestals against an orange wall, and a join list. Fill in the `crew` list at the top of `src/pages/studio.astro`; photos go in `public/media/people/photos/<slug>.jpg`.
**3.5** Contact shows who you'll talk to; Join lists roles. *Need from team:* the contact address to use, open roles.

## 4. The characters

| # | Task | Status |
|---|---|---|
| 4.1 | Names and one thing for all six | ⏸ |
| 4.2 | Transparent cut-outs | ⏸ |
| 4.3 | Margin drawings beside "how we work" on the homepage | ⬜ |
| 4.4 | Crew on each case page; 404 page | ⬜ |

Saved in `public/media/people/`. Aakash = armour, Joshua = speaker, Samridhi = yellow dress with the visor. Three still to name.

## 5. Before launch

| # | Task | Status |
|---|---|---|
| 5.1 | Phone pass on every page | ⬜ |
| 5.2 | Speed: image sizes, loading | ⬜ |
| 5.3 | Accessibility: labels, keyboard, reduced motion | ⬜ |
| 5.4 | Review, merge, deploy | ⬜ |

---

### Waiting on the team (short list)
1. Who the three unnamed characters are, and everyone's "one thing".
2. Transparent versions of the six characters.
3. Hide or keep the five "coming soon" projects.
4. For each remaining project: what we made (one line), 3 to 5 screens, logo as SVG.
5. Stoa identity sheets.
6. Contact address and open roles.
