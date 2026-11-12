# Charioteer character prompts (v2: Chariot's own style)

Written 12 Nov, after a close look at teenage engineering's EP-1320 medieval page
(teenage.engineering/products/ep-1320). The aim is not to copy it. v1 of this file made figures
that looked like theirs; this version says what is ours.

## What EP-1320 does, seen at full size

- **The device is a relic.** In the dark hero it is painted as gold leaf: it glows, the light spills
  onto the player's hands and robe, there is a halo of gold dots and gold notes in the air.
- **Or it is camouflaged.** In the daytime drawings (the monks, the crowd, the smith) the device is
  drawn in exactly the same hand as the people: the same wobbly brown outline, the same worn flat
  washes, the same olive, maroon and slate. Only its grid of squares says it is modern.
- **The people worship it.** Hands together, eyes rolled up, pointing, kneeling. They stand stiff.
- **Depth** comes from three things: two or three tones in every cloth with short dark hatch strokes
  in the folds, ochre bands on the hems, and a speckled, cracked tempera surface. No real light.

So their idea is: *medieval people adore a modern object*. Gold, or disguise.

## What is ours: five rules

1. **Makers, not worshippers.** A Charioteer uses the tool. Eyes on the work, hands on the tool,
   absorbed, at ease. Nobody looks up at it, nobody prays to it. It is theirs.
2. **The bend.** Each body curves round its tool in one clear line: Joshua folded double to listen,
   Samridhi arched back in the visor, the kick turned upside down. Their figures stand stiff; ours
   bend. This is already in Joshua's paintings: keep it, it is the signature.
3. **Two hands in one picture.** The person is painted the old way: warm egg tempera, wobbly ink
   line, soft modelling. The tool is drawn the new way: ruled straight lines, true perspective,
   every real detail (keys, hinge, cone, buckles), in cool matte neutrals (aluminium grey, matte
   black, white). No gold, no glow, no shine: it does not light anything. It is simply the one
   thing in the picture that is exact. That exactness is its power.
4. **The orange rubric.** In a manuscript the important words are written in red: the rubric.
   Ours is Chariot orange (#E0661B), flat and matte like ink, and it is used for one thing only:
   the mark the tool makes, drawn as a designer's construction line (a grid, a compass arc, a
   sight line, a dimension line, a registration mark). One orange mark per picture, nothing else
   orange. It appears only in the **power** picture, so on the site it arrives on hover.
5. **Paper, not parchment.** No parchment sheet, no arch, no frame, no border, no lettering. The
   figure stands alone on clean white, with a soft shadow at the feet, like the rest of the site.

## How to make them

- Do **Aakash power** first. When it is right, use it as the style reference for the other eleven.
- Attach each person's current painting (`public/media/people/<file>.webp`) as the character
  reference, so face, hair, skin and costume stay theirs.
- Portrait 2:3, full figure, feet near the bottom edge, the figure about 90% of the height.
- Background: **plain pure white, no texture** (most image tools cannot make a true transparent
  background; white is easy to cut, and I will cut them). If the tool can do transparent, better.
- Two per person: **rest** (no orange) and **power** (with the one orange mark).
- Save as `<slug>-rest.png` and `<slug>-power.png` in `public/media/people/new/`.

## Style block (paste at the start of every prompt)

> A single full-length figure painted in egg tempera in the manner of a fourteenth-century
> illuminated manuscript: fine wobbly dark-brown ink outline, warm earth pigments, three tones in
> every cloth with short hatch strokes in the folds, ochre bands on the hems, small rosy cheeks,
> a lightly speckled matte tempera surface, even light from the upper left. The body bends in one
> clear graceful curve around the object it is using, absorbed in the work, eyes on the object.
> The one modern object in the picture is drawn completely differently: crisp ruled straight
> lines, correct perspective, accurate real-world product detail, in cool matte neutral colours
> (aluminium grey, matte black, white), with no glow, no shine and no reflections. The figure
> stands alone on a plain pure white background with only a soft warm-grey shadow under the feet.

## Add for a **power** picture

> One thin flat matte orange (#E0661B) construction line, ruled like a designer's drawing, is the
> only orange in the image: [the mark, from the list below].

## Negative prompt

> gold leaf, gilding, halo, glowing, light rays, lens flare, sparkles, shiny, glossy, chrome
> reflections, parchment, paper texture background, arch, frame, border, lettering, blackletter,
> praying hands, looking up in awe, worship, kneeling, stiff upright pose, second figure, cropped
> feet, 3D render, photograph, anime, cartoon

## The six

Each line is what to put after the style block.

### Aakash Rodrigues · Creative Director & Lead Designer · the laptop
- **Rest:** A young man with short dark wavy hair in a full suit of plain steel plate armour, weight on one leg, one hand on his hip, a closed slim aluminium laptop tucked under his other arm, looking down at it.
- **Power:** The same knight, one hand on his hip, the other arm stretched out holding a slim open aluminium laptop flat on his palm, leaning toward it and reading the screen. **Orange mark:** a simple column grid on the laptop screen, and three of its ruled lines carrying on straight out of the screen into the air.

### Joshua Rodrigues · the speaker
- **Rest:** A young man with short dark hair and a short beard, olive-green knee-length tunic, brown belt, brown hose and pointed brown shoes, standing with a small matte-black studio monitor speaker held against his hip, head tilted toward it.
- **Power:** The same man folded double at the waist, one hand on the small of his back, his ear pressed to the matte-black studio speaker held in his other hand, eyes sideways, listening hard. **Orange mark:** three thin concentric arcs, drawn with a compass and evenly spaced, coming from the speaker cone to his ear.

### Samridhi Aggarwal · the visor
- **Rest:** A young woman with warm brown skin and dark curly hair tied up, long golden-yellow gown with a diamond lattice pattern, gold bangles, standing in a long S-curve, a white matte VR visor pushed up on her forehead, one hand resting on it.
- **Power:** The same woman with the white visor down over her eyes, arched far backward in one long curve, one arm hanging loose, the other reaching up with a fingertip touching something in the air. **Orange mark:** a dotted sight line from the visor to a small ruled rectangle floating in the air, which her fingertip touches at one corner.

### Charioteer (name to come) · the case
- **Rest:** A young woman with long wavy brown hair, long black robe, leopard-print scarf, heavy black boots, a tall silver hard-shell case worn on her back, standing with both thumbs under the straps, looking over her shoulder at the case.
- **Power:** The same woman in a deep forward stride, one fist ahead of her, the tall silver hard-shell case riding on her back, robe swinging. **Orange mark:** a ruled dimension line with a tick at each end running the full height of the case, just beside it.

### Charioteer (name to come) · the glasses
- **Rest:** A young man with messy dark hair, round thin-rimmed glasses, a short blue tunic embroidered with small flowers on the sleeves, cream collar, ochre hose, pointed brown shoes, standing on one leg mid-step, cleaning the glasses on his sleeve.
- **Power:** The same man springing forward mid-leap, one hand raised, the round glasses on, looking hard at a point in the air in front of him. **Orange mark:** a small registration mark (a circle with a cross through it) floating at his eye level, with one thin ruled line running from each lens to it.

### Charioteer (name to come) · the sneakers
- **Rest:** A young man with tousled dark hair, red knee-length tunic, brown belt, black hose, modern matte-black sneakers with white soles, crouched on one knee tying one lace.
- **Power:** The same man kicking one leg straight up so his body tips over sideways and his head hangs upside down, the other sneaker planted on the ground, both hands making OK signs. **Orange mark:** one clean compass arc tracing the path of the raised sneaker from the ground to the top of the kick.

## Group scene (optional, for the Studio page)

Style block, then:

> The six Charioteers in a row, each bent around their own tool and absorbed in it (laptop,
> speaker, visor, silver case, glasses, sneakers), none looking at the others. One single thin
> flat matte orange ruled line runs through the whole picture, passing from each tool to the
> next, from the laptop at the left to the sneaker at the right. Wide 3:1, plain pure white background.

The line is the process: from sketch to the last shipped screen.

## Checking a result

- Is the tool the straightest, coolest, most exact thing in the picture? If it looks hand-painted
  like the clothes, regenerate.
- Is there any gold, glow or shine? Regenerate.
- Is the figure looking at the work, not up at the tool in awe?
- Is there exactly one orange mark in a power picture and none in a rest picture?
- Can the pose be read as one curve from across the room?
