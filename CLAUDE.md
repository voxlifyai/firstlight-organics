# First Light Organics — Site Maintainer Reference

## Project overview

Static multi-page HTML site for First Light Organics, a whipped tallow balm brand based in Boise, Idaho. Hosted on GitHub (`voxlifyai/firstlight-organics`), auto-deployed via Vercel on every push to `main`. One HTML file per page so content can be updated without touching unrelated files.

Live site: https://www.firstlight-organics.com

## Deployment workflow

After any file change:
```
git add <file(s)>
git commit -m "brief description"
git push
```
Vercel picks up the push automatically. The site is live within ~30 seconds.

## Design tokens (styles.css)

```css
--cream:   #FEF9F1   /* primary background, default section bg */
--ivory:   #BDA78F   /* alternate section bg (taupe-warm) */
--gold:    #B88A2B   /* accent: buttons, stars, icons */
--g-dim:   rgba(184,138,43,0.18)
--charcoal:#262626   /* primary text */
--taupe:   #BDA78F   /* same as --ivory; use for muted/secondary text only */
--brown:   #8B6A45
```

**Do not change design tokens without explicit approval from Tim.**

Section backgrounds alternate cream / taupe / cream / taupe for visual rhythm. Never put two identical background sections adjacent to each other.

Text color on cream sections: `var(--charcoal)`. Text color on taupe (--ivory) sections: `var(--charcoal)`. Footer text: `var(--cream)`.

## Typography

- Serif display: `Cormorant Garamond` — headings, hero, product names
- Sans body: `Montserrat` — nav, labels, body copy, UI
- Script accent: `Allura` — sparingly, hero tagline only

## File map

| File | Purpose |
|------|---------|
| `index.html` | Homepage |
| `shop.html` | Product page (single product, Lavender) |
| `learn.html` | Education hub (Why Tallow, Ingredients, Process, FAQ, Journal) |
| `about.html` | Our Story + Standards + Philosophy |
| `reviews.html` | Customer reviews grid |
| `contact.html` | Contact form |
| `styles.css` | All shared styles + design tokens |
| `components.js` | Injects shared nav + footer into every page; shared JS handlers |

### components.js handlers
- `shopClick(e, name)` — "coming soon" placeholder; swap with real Shopify cart URL when live
- `handleNewsletter(e)` — form submission placeholder
- `handleContact(e)` — form submission placeholder
- `toggleFaq(el)` — FAQ accordion

### learn.html sub-sections
JS routing via `showLearn(id, e)`. Section IDs: `learn-why-tallow`, `learn-ingredients`, `learn-process`, `learn-faq`, `learn-journal`.

## Image inventory (`images/`)

| File | Used on | Description |
|------|---------|-------------|
| `logo.png` | Nav (all pages) | Full horizontal wordmark, cream background |
| `logo-alt.png` | Footer (all pages) | Alternate logo variant, cream background |
| `icon-sun.png` | Homepage hero, favicon (all pages) | Sun rays icon only, gold on cream |
| `product-hand.png` | index.html, shop.html | Hand holding labeled Lavender jar |
| `product-group.png` | index.html banner | 4-jar styled group shot |
| `lifestyle-face.png` | index.html Our Story split | Person applying balm to face |
| `about-hero.png` | about.html banner | Idaho sunrise landscape |
| `lavender-lifestyle.png` | Not currently placed | Open jar on rustic table, warm light |
| `ingredients-flatlay.png` | Not currently placed | Raw ingredients flat lay |
| `ingredients-banner.png` | Not currently placed | Ingredients infographic with icons |
| `label-lavender.png` | Not currently placed | Label design |
| `label-lavender-flat.png` | Not currently placed | Label spec sheet |
| `brand-guide.png` | Not currently placed | Brand style guide reference |

**Always check this inventory before referencing an image path. Do not invent filenames.**

Logo images (`logo.png`, `logo-alt.png`) have cream backgrounds — they cannot be used directly on the dark footer or any dark background. The footer wraps `logo-alt.png` in a `.footer-logo-wrap` cream card to handle this. `icon-sun.png` also has a cream background.

## CSS class reference (key classes)

```
.product-feature        grid layout, 1fr 1fr, 72px gap, max-width 960px
.product-feature-img    product image in the feature grid
.brand-photo-banner     full-width banner image strip
.story-split            2-column split: image left, text right
.ingr-grid / .ingr-card ingredient cards grid
.reviews-grid           3-column review card grid
.features-grid          4-column feature highlight grid
.trust-bar              4-item trust/shipping bar
.promise-pillars        3-column promise section
.faq-item               accordion item; .open class shows answer
.nav-logo-img           logo in nav
.footer-logo-wrap       cream-bg card wrapping footer logo
.footer-logo-img        logo image inside footer card
```

## Product status

**Current products: Lavender, Cedar, Warm Vanilla Whipped Tallow Balm.**
**Price: $29.00 each** (4 fl oz jar, 2.35 oz net wt)

To add new scents in the future, add them to shop.html as additional `.product-feature` blocks and update the footer nav under "Shop." Alternate section backgrounds (cream / ivory) to maintain visual rhythm.

## Primary customer

Ingredient-conscious women who want effective, nourishing skincare without unnecessarily complicated formulas. She reads labels. She values transparency. She appreciates locally sourced and handcrafted products. She is not necessarily looking for "tallow skincare" -- she is looking for skincare she can trust.

## Messaging hierarchy (use this order)

1. **Purity** -- Know what you're putting on your skin.
2. **Benefit** -- Deeply nourishing moisture.
3. **Simplicity** -- Thoughtfully selected ingredients, nothing unnecessarily complicated.
4. **Craftsmanship** -- Handcrafted in small batches by our family.
5. **Local story** -- Made in Boise with locally sourced Treasure Valley tallow.

## Signature phrases

- Know what you're putting on your skin.
- Pure ingredients. Thoughtfully made.
- Simple ingredients. Deeply nourishing skincare.
- Skincare, simplified.
- Made close to home. Crafted with care.
- From the Treasure Valley to your skin.
- Nothing unnecessarily complicated.
- Ingredients chosen with intention.

## Origin story (for copy reference)

Tatiana (Tim's wife) made the first batch for their family in their Boise kitchen. They live in the high desert where the air dries out skin fast. She wanted simple, real ingredients she could trust. Shared with friends, then friends of friends. Two local stores agreed to stock it within two days of each other. Named First Light after Luke 1:78, which calls Jesus the "Sunrise from on high." The name is about him.

## Brand voice rules

1. **Never use em dashes (—)**. This is a hard rule. Use a comma, a period, or rewrite the sentence instead.
2. Tone: warm, confident, simple, premium, grounded. Faith is present but not preachy.
3. Copy should be simple enough that a grandmother recognizes every word.
4. **Avoid fear-based messaging** about conventional skincare. Do not call ingredients "toxic." Do not frame competitors negatively. Make customers feel informed and confident, not afraid.
5. Avoid overly "crunchy" or niche language that limits the brand's broad appeal.
6. No unsubstantiated health or medical claims.
7. Idaho, "handcrafted in Boise," and "Treasure Valley tallow" appear throughout -- this is intentional brand identity.
8. The scripture reference (Luke 1:78) appears in the footer and the homepage Our Story section -- do not remove it.
9. The name First Light is explicitly about Jesus. This is stated on the About page.

## Known gotchas

- **Taupe text on taupe background is invisible.** If you change section backgrounds, always verify body text uses `color:var(--charcoal)`, not `color:var(--taupe)`.
- **Footer text color is `var(--cream)`** — it was accidentally changed to charcoal once. Footer needs cream text to be readable on the dark background.
- **The SVG `#sun` defs are still in components.js** (SUN_SVG const) even though the hand-coded SVG icon is no longer used in the nav or footer. Leave it for now.
- **`--ivory` and `--taupe` are the same value (`#BDA78F`)**. This is intentional — both variable names exist in the CSS for historical reasons.
- **learn.html** has complex JS sub-section routing. Test hash navigation (#why-tallow, #ingredients, etc.) after any changes to that page.
