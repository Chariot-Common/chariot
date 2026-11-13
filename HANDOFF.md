# Handoff: continue the Chariot website from another account

Written 13 Nov. Everything is in this folder (`~/Desktop/projects/chariot_website`), branch
`lab-home-white-theme`, committed locally. Open this folder in Claude Code on the other account
and paste the prompt below.

---

## 1. The prompt (paste this whole block)

```
You are continuing work on the Chariot studio website (Astro). Folder: ~/Desktop/projects/chariot_website,
branch lab-home-white-theme. Read ROADMAP.md (the team task list) and HANDOFF.md first, then run git status.
Start the dev server with the "chariot" config in .claude/launch.json (port 4321). After adding a NEW
component, restart the dev server (it can serve stale CSS). Never run `astro build` while the dev server is
up (it breaks it). The in-app browser pane is often hidden and its screenshots go stale: verify in the
Playwright browser tools instead, and delete the .playwright-mcp folder before committing.

Rules from the team (do not break):
- No generic "AI slop" copy. Use Chariot's real copy (withchariot.com) or ask. Never invent facts.
- Show work with screenshots at desktop (1440) and phone (375) width. No sideways scroll on phones.
- Calm, not playful: no hopping, bobbing or springy motion. No old-school chariot wheel styling.
- Homepage: two lines + one line on how we work, then the projects straight away (already done).
- Each project shows WHAT CHARIOT MADE, never the client's product, each in its own stance (not all from the
  same tilted angle). No technique labels like "01 The grid". Captions use each project's own summary.
- Work task by task and update ROADMAP.md status as you go. Commit after each task.

References the user gave (study them, do not copy them):
- https://dmcg.co/ and https://dmcg.co/work/groth : the homepage is the projects; a case study fills the
  space: a huge wordmark, then a narrow readable text column (about 14-15px, 22px line height) alternating
  with big images, rounded panels, technical drawings, and prints. Never an empty screen.
- https://teenage.engineering/products/ep-1320 : medieval style, characters, layouts, and buttons that look
  real (physical, pressable).
- https://lue.studio/ : calm philosophy page; short centred lines, small headings, lots of air but never empty.
- https://withchariot.com/ : the current site and the source of real copy.

PENDING TASKS, in order:

1. Project (case) pages. Today src/pages/work/[slug].astro is a 3x3 "sheet" grid plus an often empty write-up;
   the user says it is too empty and the text is too small to read. Rebuild it after dmcg's Groth page:
   - Open with the project object/name large, then a readable text column (max ~60ch, 17-19px) that
     alternates with big screens/pieces, full width or in pairs. Use every real asset in the content file
     (poster, pieces) and the homepage object if there is one. No blank screens.
   - Real copy only. Three projects have real case studies on withchariot.com; take their copy from there
     (open the pages in the browser): Alai https://withchariot.com/alai-product-design-uiux ,
     Skyway https://withchariot.com/skyway-website-design , The Ken https://withchariot.com/the-ken-redesign-2023 .
     Put it into src/content/projects/<slug>.md (body + frontmatter: services, team, links, stats, quote).
     The other eight have no case study: show summary, disciplines, link to the live site, the screens we
     have, and mark "write-up to come" quietly. Ask the team for their copy.
   - Skyway and The Ken have their own pages (src/pages/work/skyway.astro, the-ken.astro); bring them in line.
2. Homepage type after dmcg: check the project captions and intro line sizes; projects already big.
3. Studio page (src/pages/studio.astro): keep the current calm version (Chari( )ot opener, tree with
   detection boxes on hover = each Charioteer's "power"). Add "how Chariot works" and the principles in a
   minimal way, after lue.studio. Real copy, from withchariot.com:
   "Thoroughly conceptualised, thoughtfully crafted." / "We believe great design stems from deep insights,
   radical vision, clarity of the jobs to be done, a will to delight and a ton of attention to detail." /
   "That's why we ask the "why" to every "what". We explore every direction. We dig beyond the "that's how
   they're doing it". We consider the psychology, not just the "features". We zoom out before we zoom in.
   We distill. We test and iterate." / "Distinguished, effective, delightful, tailored. That's what we aim for."
   Buttons can take the teenage engineering "real, pressable" look.
4. Character prompts: rewrite docs/character-prompts.md so each of the 12 images (6 people x rest/power) has
   ONE complete, self-contained prompt the user can paste straight into ChatGPT image generation: style,
   character, pose, the tool, the orange mark (power only), background (plain white), format (2:3 portrait,
   full figure), and what to avoid, all in one paragraph. Keep the v2 ideas (makers not worshippers, the bend,
   painted person + ruled matte tool, one Chariot-orange #E0661B construction line in power pictures only,
   no gold/glow/shine, no parchment). Tell the user to attach the person's current painting from
   public/media/people/<file>.webp as a reference.
   Team names from withchariot.com case studies (for the unnamed Charioteers, CONFIRM with the user before
   using): Shreesh Kuliyal (UI/UX & Product Designer), Siddharth Thorat (Jr. UI/UX & Product Designer);
   ROADMAP also mentions Tanujaa.
5. Check every changed page at 1440 and 375, commit, update ROADMAP.md.

Do not push or deploy unless the user asks. See HANDOFF.md section 2 for pushing.
```

---

## 2. Pushing from the other account

The work is committed on branch `lab-home-white-theme` in this folder. As of this handoff it is **8 commits
ahead** of GitHub (`Chariot-Common/chariot`), not pushed.

From the other account, in a terminal:

```bash
cd ~/Desktop/projects/chariot_website
```

```bash
git status -sb
```

```bash
git push origin lab-home-white-theme
```

If GitHub asks you to sign in, sign in with an account that has write access to `Chariot-Common/chariot`
(or run `gh auth login` first).

To put it on `main` (the live branch) afterwards, open a pull request:

```bash
gh pr create --repo Chariot-Common/chariot --base main --head lab-home-white-theme --fill
```

**Vercel (read before expecting a public link).** Pushes build on the Vercel project `chariot` in the team
`chariot4`, but that team's main address (`chariot-git-main-chariot4.vercel.app`) shows a different company's
site, and branch previews need that team's login. So a push does not give a public link. Either sort out who
owns `chariot4`, or sign the Vercel command-line tool into your own account and deploy from this folder:

```bash
vercel login
```

```bash
vercel --prod
```

(This folder is linked to the Vercel project `chariot-website`; check that is the one you want before deploying.)

---

## 3. Where things are

- `ROADMAP.md`: the team task list, with status and a "Next session starts here" section.
- `docs/character-prompts.md`: the character style (v2) and prompts.
- `scripts/cut-tight.py`, `scripts/cut-night.py`: cut the paintings out for light and dark grounds.
- `src/pages/index.astro` (homepage), `src/components/WorkList.astro` (the project list and objects),
  `src/components/*Site.astro / PaperPlanes / AlaiProduct / KenSystem / StoaBrand` (one per project object),
  `src/pages/studio.astro` (About), `src/pages/work/[slug].astro` (shared case page).
- `public/media/people/fig/` and `night/`: the Charioteers cut for paper and for the dark opener.
