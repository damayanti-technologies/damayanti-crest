# Damayanti Crest — Official Corporate Website

> **“Many Ideas. One Vision.”**  
> An independent business ecosystem bringing together technology, heritage, publications, and traditions.

This repository contains the complete, production-ready source code for the **Damayanti Crest** corporate website. It is built strictly with clean, modern **HTML5**, **CSS3**, and **vanilla JavaScript**, with zero dependencies or complex build tools. It is engineered specifically for static hosting platforms like **GitHub Pages**.

---

## 📁 Repository Structure

```
damayanti-crest/
├── index.html            # Homepage (Hero, Intro, 4 Divisions, Featured Tech, Principles, CTA)
├── about.html            # About Us (Who We Are, Vision, Mission, Values, Ecosystem)
├── brands.html           # Our Brands (Detailed 4 Divisions: Tech, Heritage, Publications, Traditions)
├── products.html         # Products & Initiatives Catalogue (Dynamic filtering & honest status)
├── partnerships.html     # Partnerships & Collaborations (Overview & enquiry form)
├── contact.html          # Contact Page (Official email & message form)
├── 404.html              # Custom 404 Error Page
├── privacy.html          # Privacy Policy Draft
├── terms.html            # Terms of Use Draft
├── .nojekyll             # Prevents GitHub Pages from running Jekyll build processes
├── robots.txt            # Search crawler directives
├── sitemap.xml           # XML sitemap template
├── README.md             # Documentation, deployment guide, and checklists
├── assets/
│   ├── icons/            # Division SVG icons (tech, heritage, publications, traditions)
│   ├── images/           # Heritage geometric background motifs (crest-motif.svg)
│   └── logos/            # Crest mark and favicon SVG assets
├── css/
│   ├── styles.css        # Main corporate design system, CSS variables, typography, components
│   └── responsive.css    # Responsive breakpoints (mobile, tablet, desktop)
└── js/
│   ├── data.js           # Central ecosystem data file (divisions, products, statuses, contacts)
│   └── main.js           # Navigation drawer, safe DOM rendering, year, and mailto handlers
```

---

## 🎨 Visual Design System

The visual language reflects an understated, editorial heritage aesthetic paired with modern corporate clarity:

- **Midnight Navy (`#171B2B`)**: Primary background for hero, footer, and emphasis sections.
- **Antique Gold (`#C5A15D`)**: Used for emblems, highlights, subtle borders, and key calls-to-action.
- **Warm Ivory (`#F7F3EA` / `#FAF8F2`)**: Spacious, comfortable reading backgrounds.
- **Charcoal (`#343844`)**: High-contrast, legible body copy.
- **White (`#FFFFFF`)**: Clean card backgrounds and content contrast.
- **Typography**: Refined serif headlines (`Playfair Display`, `Georgia`, serif fallbacks) paired with clean sans-serif body copy (`Plus Jakarta Sans`, system fallbacks).

---

## 🚀 How to Deploy to GitHub Pages

### Step 1: Verify the Repository
The project repository is configured at:  
`https://github.com/damayanti-technologies/damayanti-crest`

### Step 2: Push Files to GitHub
From the project folder, ensure all files are committed to the `main` branch.

### Step 3: Enable GitHub Pages
1. Open your repository on GitHub: `https://github.com/damayanti-technologies/damayanti-crest`
2. Navigate to **Settings** (tab at the top right of the repository).
3. In the left sidebar, click on **Pages** (under the "Code and automation" section).
4. Under **Build and deployment**:
   - **Source**: Select `Deploy from a branch`.
   - **Branch**: Select `main` and set the folder dropdown to `/(root)`.
5. Click **Save**.
6. Wait 1 to 2 minutes. GitHub Pages will display a notification:
   > *"Your site is live at `https://damayanti-technologies.github.io/damayanti-crest/`"*

---

## 🌐 Custom Domain Setup (`damayanticrest.online`)

When the preferred custom domain `damayanticrest.online` is purchased:

1. **Configure DNS Records** at your domain registrar (e.g., Namecheap, Cloudflare, GoDaddy):
   - Add **4 `A` Records** pointing your apex domain (`@` or `damayanticrest.online`) to GitHub Pages IP addresses:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - Add a **`CNAME` Record** for the `www` subdomain pointing to:
     ```
     damayanti-technologies.github.io
     ```

2. **Add Domain in GitHub Settings**:
   - Go to **Settings** > **Pages** in the repository.
   - Under **Custom domain**, enter: `damayanticrest.online`.
   - Click **Save**.
   - Check the box for **Enforce HTTPS** (available after DNS certificate issues).

3. **Update URLs**:
   - In `sitemap.xml` and `robots.txt`, replace `[SITE_URL]` with `https://damayanticrest.online`.
   - In `js/data.js`, set `isDomainLive: true`.

---

## ⚙️ How to Update Products & Content

All divisions, initiatives, products, contact emails, and statuses are managed centrally in:  
**[`js/data.js`](./js/data.js)**

### Adding or Updating a Product:
Open `js/data.js` and edit the `products` array:
```javascript
{
  id: 'sandarshana',
  name: 'SANDARSHANA',
  divisionId: 'damayanti-technologies',
  divisionName: 'Damayanti Technologies',
  category: 'Technology',
  subCategory: 'Web Browser',
  description: 'A browser project focused on providing a practical browsing experience.',
  status: 'In Development', // 'In Development' | 'Available' | 'Coming Soon' | 'Archived'
  url: null,                // Replace null with a verified URL (e.g. 'https://...') when ready
  ctaLabel: 'More details coming soon' // Automatically changes to button when url is present
}
```

---

## 📋 "Before Going Live" Checklist

Before officially announcing the website or directing public traffic, complete the following verifications:

- [ ] **Domain Verification**: Confirm whether `damayanticrest.online` has been acquired and configured.
- [ ] **DNS & HTTPS**: Ensure HTTPS is enforced in GitHub Pages settings.
- [ ] **Official Email**: Verify that `damayati.crest@gmail.com` is active and receiving emails.
- [ ] **Product Links**: Verify official URLs for `SANDARSHANA`, `SANKET QR`, `ARROUT`, and `Sannivesham` before marking them as available.
- [ ] **Product Statuses**: Confirm actual release statuses in `js/data.js`.
- [ ] **Brand Assets**: Replace or enhance placeholder SVG crests with any registered or trademarked corporate logos when finalized.
- [ ] **Form Handling**: If automatic server-side email dispatch is needed in the future, connect an endpoint service (e.g., Formspree, Web3Forms, or AWS SES) and document it.
- [ ] **Legal Review**: Review `privacy.html` and `terms.html` with appropriate legal advisors.
- [ ] **Search Engine Indexing**: Validate `robots.txt` and submit `sitemap.xml` to Google Search Console once the domain is live.

---

## 🛡️ Architecture & Accessibility Highlights

- **Pure Static Stack**: Zero dependencies, zero build steps, fast loading.
- **Subpath Safe**: Uses relative paths (`./css/...`, `./js/...`, `./about.html`) so the site functions correctly on both root custom domains and GitHub Pages project subpaths.
- **Safe DOM Manipulation**: Uses `document.createElement()` and `textContent` to prevent script injection vulnerabilities.
- **Honest Feedback**: Form submissions never falsely claim "Message Sent" without a connected backend; instead, they transparently format pre-filled emails or offer clipboard copying.
- **WCAG Compliant**: Screen reader skip links, semantic headings, aria labels, keyboard accessibility, and high color contrast.
