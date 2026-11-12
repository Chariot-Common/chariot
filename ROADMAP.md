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
| 1.7 | Paper Planes object | ✅ |
| 1.8 | HealthFlex object | ✅ |
| 1.8b | The light: a long shadow under every object | ✅ |
| 1.9 | Value Research object | 🔨 next |
| 1.10 | Neon Fund, Doxel, Tortoise objects | ⏸ |
| 1.11 | The "coming soon" projects | ⏸ |

**1.1 White homepage.** The old dark homepage is gone; `/` is the white page, `/lab/home` and `/work` redirect to it.
**1.2 The wheel on white.** Engraved in ink; its long shadow is fine hatching, plus a soft contact shadow.
**1.2b Hero: night to dawn to day** *(the sun has been removed)* *(after cruise.money: dark and paper together, not one or the other).* The hero is a dark night panel set into the white page. The wheel is printed in cream light, the line reads "We craft products, brands and websites with nuance and good taste.", and Chariot's orange sun sits on the horizon. Scrolling, the sun rises, and the wheel rolls out of the night onto the paper, changing from light to ink exactly at the panel's edge. The top bar is cream over the night, ink over the paper. Also fixed: the first-scroll hang (fonts preloaded, the wheel only draws when it moves and sleeps off-screen, the dev server prepares three.js up front).
**1.3 Skyway** *(we made: website, D2C, content).* The mobile site lies on the paper in 3D; on hover it comes apart into hero, nutrition, ingredients and the product page with the 3-click checkout, labelled, among Skyway's clouds. Opens into its own case page.
**1.4 The Ken** *(product strategy, visual design, design system).* The homepage stands as a sheet; on hover its system comes out as a print specimen: masthead, colour, type, story card, actions and tags, apps.
**1.5 Stoa** *(brand identity, website, product).* The lion mark as a thick medallion in ink; on hover it stands up red, its construction grid draws, and the rays pattern, website and business card fan out.
**1.6 Alai** *(product design, AI UX, design system).* A blank slide lies on the paper with Alai's prompt bar. On hover the prompt types itself (01 Prompt), the slide stands up and builds itself from the real product recording, looping (02 The build), a content card and the chart lift off (03 Components), and the theme switcher slides out (04 Themes).
**1.7 Paper Planes** *(UI/UX, website, editorial).* Built from the real Paper Planes homepage, cut into its pieces (`public/media/paperplanes/`). At rest the page lies on the paper with only its masthead printed. On hover it stands up, its twelve-column grid drops in, the type sets line by line (kicker, headline, deck, sections, story cards) and the pictures drop into their frames, labelled 01 The grid, 02 Type sets, 03 Pictures. Then 04 Things lift off: the kettle, its lid and the teacups (cut out of the hero illustration) and the puzzle card's hands and loose pieces drop onto the page and rest above it. The kettle steams and its lid rattles, the hands sway, the pieces float into place, and the standing page leans toward the pointer so the layers slide against the print. The grid then lifts away. Clicked, its top corners fold in, it becomes a paper plane and flies off with a dashed trail, and the case page opens. See `PaperPlanes.astro`. *Need from team:* more Paper Planes screens (an article page) if the case should show more than the homepage.
**1.8 HealthFlex** *(website, visual design).* Built from the live site's hero (healthflex.loophealth.com): its two rings of tiles, people and soft 3D illustrations, each tile cut out on its own (`public/media/healthflex/`), plus the logo, line and button. At rest the dark green page lies on the paper with its tiles in a loose pile. On hover it stands up, the tiles deal out of the pile into the two rings (01), the rings swing into place and keep turning against each other as on the site (02), the line sets in the middle (03), and the 3D illustrations (clover, dumbbell, stethoscope, leaf, paw, bottle, cross) lift off the page and float (04). The page leans toward the pointer, and the tiles nearest it rise toward you as the rings carry them past. Clicked, the rings whirl, the tiles fly out and the case opens. See `HealthFlexSite.astro`.
**1.8b The light** *(after teenage engineering's EP-35 page).* Pointed at, every object is lit from above: a soft pool of light round it and an unrealistically long shadow down the paper, like the wheel at the top of the page.
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
| 3.4 | The Charioteers, as a team tree | ✅ direction approved; waiting on names and photos |
| 3.5 | Contact and Join | 🔨 links in place, Join page to come |

**3.1** A chariot only moves when the wheel, the horses and the driver pull together: that is how we work with clients.
**3.2** The wheel drawn like a patent engraving: hub = the question, spokes = three directions, rim = one honest call, tyre = what ships.
**3.3** The process, step by step, from the homepage paragraph.
**3.4** `/studio` is now a small museum of Chariot, after Gem Quest, the Berlin museums, the old-masters-with-a-MacBook image, mew.xyz and dmcg. *Round 2 (12 Nov): the images and the motion.* The six paintings are cut out of their parchment with a paper edge left round each figure (`public/media/people/cut/`), so they stand on the page instead of sitting in beige cards. The engravings are ink on transparency (`public/media/wheel/ink/`), so they print onto paper and the orange wall. Opener: a Charioteer jumps into the brackets of "Chari( )ot" every couple of seconds (point at one in the row below to pick them). Collage: the hub turns, the wheel rolls in, the chariot rolls along its line with the scroll, two Charioteers step out of the words. Tree: lines draw to each Charioteer; each one idles in their own way; pointing scans the figure, boxes the person, then locks onto their thing and counts up the score (on phones it happens as they scroll into view). Wall: the engravings stand on black plinths with brass number plates, each with its own motion (spin, rock, turn, roll); swipe, arrows or keys, and it moves on by itself while in view. Everything comes into focus out of a blur as it scrolls in (after dmcg). Fill in the `crew` list at the top of `src/pages/studio.astro`; photos go in `public/media/people/photos/<slug>.jpg`.
**3.5** Contact shows who you'll talk to; Join lists roles. *Need from team:* the contact address to use, open roles.

## 4. The characters

| # | Task | Status |
|---|---|---|
| 4.1 | Names and one thing for all six | ⏸ |
| 4.2 | Transparent cut-outs | 🔨 paper-edge cut-outs made from the paintings |
| 4.3 | Margin drawings beside "how we work" on the homepage | ⬜ |
| 4.4 | Crew on each case page; 404 page | ⬜ |

Saved in `public/media/people/`. Aakash = armour, Joshua = speaker, Samridhi = yellow dress with the visor. Three still to name.

## 5. Before launch

| # | Task | Status |
|---|---|---|
| 5.1 | Phone pass on every page | 🔨 work list no longer runs off the side on phones |
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

---

## Next session starts here (written 12 Nov, 17:05 IST)

**Where things stand**
- PR #1 is merged into `main` on `Chariot-Common/chariot`. Homepage objects done: Skyway, The Ken, Stoa, Alai, Paper Planes, HealthFlex.
- **Not public yet.** The Vercel project that builds this repo (`chariot`, team `chariot4`) serves a different company's site on its main address, and the branch preview needs that team's login. This machine's Vercel CLI is linked to another project (`chariot-website`) and is not signed in. Someone has to run `vercel login`, or sort out who owns `chariot4`, before a public link exists.

**Next objects, in order** (same rule: what Chariot made, cut from real assets, nothing drawn or invented)
1. **1.9 Value Research** *(product design, UI/UX)*. We have one screen: `public/media/home/vr.jpg` (1400 x 1366), the "My Portfolio" dashboard with the performance chart. Plan from the roadmap: the flow plays (search, a fund, its star rating, compare). The one screen only supports the portfolio part: the total counts up, the tabs set, the chart line draws. *Need from team:* the search, fund and compare screens, or a live URL to capture them from.
   Pieces to cut from `vr.jpg` (pixel boxes, x0 y0 x1 y1): blue top bar 0,0,1400,95 · "My Portfolio" 220,150,640,220 · current value "₹ 16,17,192" 220,300,840,355 · 1-year returns "+ ₹ 94,104 + 9.3%" 915,300,1290,355 · tabs row 220,410,1400,460 (Dashboard is the active one) · Performance card 220,507,1400,1085, inside it the range chips 268,625,755,665, the green line and its fill 268,680,1400,900, the year axis 268,900,1400,955 · Transactions card 220,1098,845,1366 · Estimated Tax card 860,1098,1400,1366. The green line is a clean colour on white, so it can be keyed out and drawn left to right; the cards sit on a peach ground (#FDEFE6) and can lift off it.
2. **Neon Fund** *(website)*. One screen: `neon.jpg` (404 x 815), "Be Curious. Be Neon." on a ray burst. No live URL is recorded in `src/content/projects/neon-fund.md`; find it or ask.
3. **Doxel** *(website)*. One screen: `doxel.jpg` (953 x 617). No live URL recorded.
4. **Tortoise** *(product design, UI/UX)*. One screen: `tortoise.jpg` (709 x 1535), the save-up plan. No live URL recorded.

**How the last two objects were made** (reuse this)
- *Assets from a live site, with real transparency:* open the image or element in the Playwright browser, screenshot it on black, then on white, and recover alpha from the difference (`alpha = 1 - mean(white - black) / 255`, colour = black shot / alpha). Split into pieces with connected components. HealthFlex's rings, logo, line and button were all made this way.
- *Layers from a flat illustration:* OpenCV GrabCut seeded with a colour mask, then inpaint the background and print a soft shadow where the object stood. Paper Planes' kettle, lid, cups and hands were made this way.
- *One number drives each object:* `--x` goes 0 to 1 on hover; every phase is a `clamp()` of it. Pointer lean is `--px/--py`, eased in JS. Copy `HealthFlexSite.astro` as the starting point.

**Things that bit us**
- The in-app browser pane is often hidden, and then its screenshots are stale. Verify in the Playwright browser instead (it saves under `.playwright-mcp/`; delete that folder before committing).
- Don't run `astro build` while the dev server is up (it breaks the dev server). Restart the dev server after adding a new component.
- Lazy images don't load in a headless tab: set `loading='eager'` and `decode()` them before a screenshot.

**Small things left open**
- Case pages for Paper Planes and HealthFlex still use the shared sheet; the objects don't carry into them yet (roadmap 2.4).
- `public/media/about/*-light.png` is unused; the ink engravings in `public/media/wheel/ink/` are heavy (roadmap 5.2).
- The step labels (01, 02...) are hidden on phones for Paper Planes and HealthFlex.
