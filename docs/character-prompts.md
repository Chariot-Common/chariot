# Charioteer character prompts

For redrawing the six Charioteers cleaner, in the manner of teenage engineering's EP-1320 medieval
page (teenage.engineering/products/ep-1320). Written 12 Nov.

## What EP-1320 does that ours don't (yet)

Studied from the figures on that page (the monks holding up the device, the crowd pointing, the
knight with the cart, the smith at the anvil).

| | EP-1320 | Our current paintings |
|---|---|---|
| Line | One thin, slightly wobbly dark-brown ink outline, the same weight everywhere | Painterly edges, outline comes and goes |
| Colour | Flat, matte fills with a fine dry-brush grain; few colours: sage green, slate blue-grey, rust, ochre, cream skin, round pink cheeks | Rich, many colours, strong modelling |
| Shading | Almost none: two or three darker fold lines in the robes | Full painted light and shade |
| Ground | Nothing behind the figure; a few tufts of grass or a soft brown ground shadow at the feet | A warm parchment sheet behind every figure, which leaves a halo when cut out |
| Bodies | Small heads, long bodies, a gentle S-curve; calm, slightly awkward medieval poses | Expressive, acrobatic poses (bending over, handstand) |
| The joke | Medieval people treating one modern object (the EP-1320) as sacred | Each person carries their own modern thing: the same joke, keep it |

So: keep who they are and the thing each one carries; make the drawing flatter, the outline
steadier, the poses calmer, and give us no background.

## How to deliver

- One PNG per figure, **transparent background** (no parchment, no paper texture behind), 2400 px tall.
- Full figure, feet at the bottom edge, the same scale for all six (a standing figure fills about 92% of the height).
- Two images per Charioteer: **rest** (standing, the thing held calmly) and **power** (the same person, doing their thing). The site shows rest, and power on hover.
- File names: `<slug>-rest.png`, `<slug>-power.png` → `public/media/people/new/`.

## Style block (paste at the start of every prompt)

> Medieval illuminated manuscript figure in the style of the Codex Manesse, drawn as a clean modern
> illustration. Thin, even, slightly wobbly dark sepia ink outline. Flat matte colour fills with a
> fine dry-brush grain texture, very little shading, only two or three darker fold lines in the
> cloth. Restrained palette: sage green, slate blue-grey, rust red, ochre, warm cream skin with
> small round rosy cheeks. Small head, long body, gentle S-curve stance, calm slightly awkward
> medieval gesture. Full body, isolated on a transparent background, no paper or parchment behind,
> only a faint soft brown shadow under the feet. Centered, front three-quarter view.

## Negative prompt

> parchment background, paper texture behind figure, frame, border, text, letters, heavy shading,
> realistic lighting, 3D render, glossy, gradient background, cast shadow on a wall, extra limbs,
> cropped feet, cartoon proportions, chibi, anime

## The six

Keep each person's face, hair and skin as in their current painting (`public/media/people/<file>.webp`;
attach it as an image reference). Their thing is what the site's hover reveals.

### Aakash Rodrigues · Creative Director & Lead Designer · armour, laptop
- **Rest:** A young man with short dark wavy hair in a full suit of plain silver plate armour, standing upright, one hand on his hip, the other holding a small open laptop at his side, its screen glowing pale blue.
- **Power:** The same knight raising the open laptop high above his head with both hands, like a relic, the screen glowing pale blue, looking up at it.

### Joshua Rodrigues · speaker
- **Rest:** A young man with short dark hair and a short beard in an olive-green knee-length tunic with a brown belt and brown hose, standing, holding a small black studio speaker against his chest.
- **Power:** The same man bent forward, his ear pressed to the speaker held at arm's length, eyes closed, three small curved sound lines coming off the speaker.

### Samridhi Aggarwal · visor
- **Rest:** A young woman with dark curly hair tied back, warm brown skin, in a long golden-yellow gown with a diamond pattern, standing tall, a white VR visor pushed up on her forehead.
- **Power:** The same woman with the white visor down over her eyes, leaning back in a graceful arc, one hand reaching out to touch something unseen in the air.

### Charioteer (name to come) · backpack
- **Rest:** A young woman with long wavy brown hair in a long black robe and black boots, a leopard-print scarf, a large silver hard-shell case worn as a backpack, standing, thumbs under the straps.
- **Power:** The same woman striding forward mid-step, one fist forward, the silver case on her back, like a pilgrim setting out.

### Charioteer (name to come) · glasses
- **Rest:** A young man with messy dark hair and round glasses in a short blue tunic embroidered with small flowers, a cream collar, ochre hose and brown pointed shoes, standing, one hand raised in greeting.
- **Power:** The same man pushing his round glasses up his nose with one finger, the other hand open, the lenses catching a small white glint, mid-step.

### Charioteer (name to come) · sneakers
- **Rest:** A young man with tousled dark hair in a red knee-length tunic with a brown belt, black hose and modern black sneakers, standing with his hands making small OK signs.
- **Power:** The same man in a handstand, legs split in the air, the black sneakers up high, both hands making OK signs from the ground.

## Group scenes (optional, for the Studio page)

Same style block and negative prompt.

1. **The crew holding up the work.** The six Charioteers standing together in a loose group, all looking up and pointing at a large blank parchment scroll held up between Aakash and Joshua, as in a manuscript illustration of saints receiving a charter. Transparent background.
2. **Hands on the reins.** The six Charioteers walking in a line, each carrying their thing (laptop, speaker, visor, silver case, glasses, sneakers in hand), the first one holding a pennant with a small orange sun. Transparent background.
3. **Three directions.** Three of the crew each pointing in a different direction while a fourth, in armour, raises one finger to choose. Transparent background.
