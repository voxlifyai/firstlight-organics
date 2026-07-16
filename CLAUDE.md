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

**Current products: Lavender Whipped Tallow Balm only.**

Cedar Balm was removed. Do not add Cedar back or reference it anywhere. If adding new scents in the future, add them to shop.html as additional `.product-feature` blocks and update the footer nav under "Shop."

## Brand voice rules

1. **Never use em dashes (—)**. This is a hard rule. Use a comma, a period, or rewrite the sentence instead. Em dashes are a clear AI writing signal that Tim has flagged repeatedly.
2. Tone: warm, clean, honest, grounded. Faith-adjacent but never preachy.
3. Copy should be simple enough that a grandmother recognizes every word.
4. Avoid marketing buzzwords and synthetic-sounding superlatives.
5. Idaho and "handcrafted in Boise" appear throughout — this is intentional brand identity.
6. The scripture reference (Luke 1:78) appears in the footer and the homepage Our Story section — do not remove it.

## Known gotchas

- **Taupe text on taupe background is invisible.** If you change section backgrounds, always verify body text uses `color:var(--charcoal)`, not `color:var(--taupe)`.
- **Footer text color is `var(--cream)`** — it was accidentally changed to charcoal once. Footer needs cream text to be readable on the dark background.
- **The SVG `#sun` defs are still in components.js** (SUN_SVG const) even though the hand-coded SVG icon is no longer used in the nav or footer. Leave it for now.
- **`--ivory` and `--taupe` are the same value (`#BDA78F`)**. This is intentional — both variable names exist in the CSS for historical reasons.
- **learn.html** has complex JS sub-section routing. Test hash navigation (#why-tallow, #ingredients, etc.) after any changes to that page.
