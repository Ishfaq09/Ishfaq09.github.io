# Ishfaq Bashir Sofi — Academic Research Website

A premium, responsive, static academic portfolio, ready for GitHub Pages. No build process, dependencies, or paid hosting required.

## Preview locally
Open `index.html` in a browser. Google Fonts require an internet connection, but the site works with system fallback fonts offline.

## Customize before publishing
1. Edit `assets/main.js` and add verified email, Google Scholar, ORCID, LinkedIn, GitHub, and CV links in the `profile` object.
2. Add DOI or publisher URLs to `publications[].url`. Replace the TMLCN placeholder with the verified article title and citation.
3. Add a CV PDF at `assets/Ishfaq_Bashir_Sofi_CV.pdf` and set `cvPdf: 'assets/Ishfaq_Bashir_Sofi_CV.pdf'`.
4. Review academic appointments, teaching details, awards, and publication statuses before publishing.
5. To add a professional headshot, add the photo to `assets/` and modify the hero artwork area in `index.html`. The supplied design uses original SVG artwork rather than a fictional portrait.

## Publish to GitHub Pages
1. Create a public GitHub repository named `YOUR-USERNAME.github.io` (replace YOUR-USERNAME with your GitHub username).
2. Upload `index.html` and the entire `assets/` directory to the root of the repository.
3. In the repository, open **Settings → Pages**, select **Deploy from a branch**, choose **main** and **/(root)**, and save.
4. After deployment, visit `https://YOUR-USERNAME.github.io`.

For a project repository with a different name, the site will be served at `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`. All local assets use relative paths and support this layout.

## Technical notes
- Accessible skip link, semantic sections, mobile navigation, reduced-motion support, SEO description, responsive layout.
- Publication entries are rendered from a single JavaScript array for easy maintenance.
- No analytics or trackers included.
- External font CDN: Google Fonts. Remove the `@import` in CSS if you prefer zero external requests.
