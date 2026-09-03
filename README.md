# A&B Tours and Travels — Website

A 4-page website covering Kodaikanal, Munnar, Thekkady and Vagamon, with a smart package finder, WhatsApp booking, and an admin panel.

## ⚠️ First thing to do — confirm your Kerala prices

The Munnar, Thekkady and Vagamon packages are **placeholders**. Their prices are estimates I put in so you'd have something to edit — they are **not** shown to customers as real prices. Every one of them displays **"On Request"** on the website until you confirm it.

To make a price go live:

1. Open `admin.html`, password `tours@123`
2. Click the destination filter (Munnar / Thekkady / Vagamon) to see just those packages
3. Click **Edit**, enter your real price, then **untick** the orange box that says *"Price not confirmed yet"*
4. Save — the price is now live on the site

Packages still waiting are flagged with a red **⚠ Confirm price** tag in the admin list, and the dashboard shows a **Prices To Confirm** count.

## Pages

| File | Page | What's on it |
|---|---|---|
| `index.html` | **Home** | Hero, destination tiles, package type tiles, popular packages, why-us, reviews |
| `packages.html` | **Our Packages** | Destination bar, finder, category filters, all packages, comparison table |
| `about.html` | **About Us** | Our story, how we work, destinations, gallery with destination tabs, day-wise plans |
| `contact.html` | **Contact** | Contact tiles, enquiry form → WhatsApp, map, FAQ |
| `admin.html` | **Admin** | Password-protected panel to edit everything |

Supporting files: `style.css`, `common.js` (shared header, footer, matching engine, WhatsApp logic), `data.js` (packages, destinations, business details), `assets/` (your photos).

## How to open it

Double-click `index.html`. No installation needed.

## Destinations

| Destination | State | Packages | Prices |
|---|---|---|---|
| **Kodaikanal** | Tamil Nadu | 8 | ✅ Confirmed |
| **Munnar** | Kerala | 4 | ⚠️ Placeholder — confirm in admin |
| **Thekkady** | Kerala | 3 | ⚠️ Placeholder — confirm in admin |
| **Vagamon** | Kerala | 3 | ⚠️ Placeholder — confirm in admin |

Sightseeing spots for all four are real and researched — Eravikulam and Mattupetty for Munnar, Periyar boating and spice plantations for Thekkady, the pine forest and Kurisumala for Vagamon. Adjust any of them in the admin panel's itinerary box.

## How it works for a customer

1. On **Home** they pick a destination tile, or go straight to **Our Packages**.
2. On **Our Packages** they choose a destination and enter adults, kids, days and nights. Matching packages appear instantly, ranked by fit and priced for their group.
3. They tap **Book on WhatsApp** → WhatsApp opens with a message to **99529 53045** containing the destination, package name, price, group size, dates and pickup point.

Matching rules:

- 2 adults, no kids → couple packages
- 3–4 people → family packages
- 5–6 people → 5–6 member family / group packages
- 7+ people → per-person offer packages
- No exact match → nearest options plus a "Custom Quote" card

## Admin panel

Open `admin.html` (or click **Admin Panel** in the footer). **Password: `tours@123`** — change it under Settings.

- **Packages** — filter by destination, add packages, change prices, edit itineraries, mark prices as unconfirmed, hide or delete
- **Testimonials** — add or edit customer reviews
- **Settings** — WhatsApp number, phones, address, pickup points, homepage text, admin password
- **Backup / Restore / Reset** — download or reload a `.json` of everything

Every change shows on **all four pages** automatically.

### Adding a fifth destination

Open `data.js` and add an entry to `AB_DESTINATIONS` (id, name, state, icon, tag, blurb). It then appears in the admin dropdown, on the destination tiles, in the finder and in the filters. Icons come from Font Awesome, e.g. `fa-mountain-sun`.

### Important: how saving works

Edits are saved **in the browser you make them in**.

- Edit on your laptop → the site shows new prices on that laptop.
- To publish for real visitors, edit in the admin panel, click **Backup**, and keep that file safe (or have a developer copy the values into `data.js`).
- **Always click Backup after making changes.** Clearing browser data will wipe unsaved edits.

If you want prices to update live for everyone from your phone, that needs a small backend (Firebase) — say the word and it can be added.

## Photos

Your four photos are live across the whole site — destination tiles, package cards, page banners, the About page and the gallery.

| File | Photo | Used for |
|---|---|---|
| `assets/kodaikanal.jpg` | Poombarai village & terraces | All Kodaikanal cards, banners, gallery |
| `assets/munnar.jpg` | Tea estates at sunset | All Munnar cards, banners, gallery |
| `assets/thekkady.jpg` | Periyar lake boats in mist | All Thekkady cards, banners, gallery |
| `assets/vagamon.jpg` | Hillside resort & tea slopes | All Vagamon cards, banners, gallery |
| `assets/hero.jpg` | Misty sunrise over green hills | Homepage banner |

Your originals are untouched in the `Images` folder. The copies in `assets/` are resized to 1200px wide and compressed for fast loading.

### Changing a photo

Save the new photo over the matching file in `assets/` using the **same filename** — e.g. replace `assets/munnar.jpg`. Nothing else needs editing.

### Fixing an awkward crop

Cards are wide, so tall photos get cropped. Each destination has a `focus` setting in `data.js` that controls which part is kept:

```
focus:"center 36%"
```

A lower percentage keeps more of the sky, a higher percentage keeps more of the foreground. Current settings: Kodaikanal 56%, Munnar 36%, Thekkady 54%, Vagamon 48%.

### Per-package photos

To give one package its own photo, upload it to `assets/` and put the path (e.g. `assets/honeymoon-room.jpg`) in the **Card Image URL** box when editing that package in the admin panel.

### Homepage banner

The banner is your misty sunrise photo at `assets/hero.jpg`. It fills the screen with a very slow zoom in and out.

To change it, save your new photo over `assets/hero.jpg`. Use a wide landscape photo, 1920px across or more.

If the crop cuts off the part you want, open `style.css` and change this line near the top:

```
--hero-focus:center 55%;
```

Lower the percentage to show more sky, raise it to show more foreground.

### The backup illustrations

`assets/kodaikanal.svg`, `munnar.svg`, `thekkady.svg` and `vagamon.svg` are the drawings the site used before your photos. They stay as a safety net — if a photo file ever goes missing, the drawing shows instead of a blank card. Safe to leave alone.

## Putting it online

- **Netlify Drop** — go to app.netlify.com/drop and drag the `website` folder in. Live in 30 seconds.
- **GitHub Pages** — upload to a repo, enable Pages in settings.
- **Your own hosting** — upload all files to `public_html` via cPanel.

## Kodaikanal packages (confirmed)

| Package | Duration | Group | Price |
|---|---|---|---|
| Kodaikanal Couple Package | 2D / 1N | 2 | ₹11,000 total |
| Kodaikanal Honeymoon Couple Package | 3D / 2N | 2 | ₹17,000 total |
| Kodaikanal Family Package | 2D / 1N | 3–4 | ₹12,000 total |
| Kodaikanal Family Package | 3D / 2N | 3–4 | ₹18,000 total |
| Kodaikanal Family Package (5–6 Members) | 3D / 2N | 5–6 | ₹25,000 total |
| Kodaikanal Group Package | 2D / 1N | 5–6 | ₹16,000 total |
| Kodaikanal Offer Package | 2D / 1N | 7+ | ₹2,500 per person |
| Kodaikanal Offer Package | 3D / 2N | 7+ | ₹3,700 per person |

## Business details on the site

- **WhatsApp:** 99529 53045
- **Phones:** 99529 53045 · 81908 48210 · 81100 01243
- **Address:** 229, Mandipallivasal Complex, Madurai Road, Dindigul, Tamil Nadu
- **Pickup points:** Dindigul, Kodai Road, Palani, Madurai, Theni
- **Instagram:** @ab_tours_travels_

All editable from the admin panel's Settings tab.
