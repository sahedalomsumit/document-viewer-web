# Document Viewer website

A responsive, static three-page website for the Document Viewer Android app. Built with HTML, CSS, and JavaScript; no build tools or dependencies required.

## Pages

- `index.html` — app features, all six screenshots, feature graphic, FAQs, and Google Play links.
- `privacy-policy.html` — app-specific privacy policy and separate website privacy information.
- `data-deletion.html` — instructions for clearing local data and deleting saved PDFs.

Open `index.html` in a browser, or serve this directory with any static web server. Publish the directory contents at **https://document-viewer.sahedalomsumit.com/**. `sitemap.xml` and `robots.txt` use that production URL.

## App alignment

Content follows the Android app’s README, Play listing, manifest, and local recent-file storage implementation: PDF-only, Android 7.0+, offline reading and annotation, no accounts or internet permission, up to 12 recent documents, and flattened separate-copy exports. Legal pages distinguish local app data from original/exported PDFs and hosting-provider records. Review legal text and hosting practices before publication.

The palette uses the app’s emerald, dark surfaces, and muted text, with a light-green call to action inspired by its screenshots. All eight supplied `img/` images are displayed. DM Sans is loaded through Google Fonts on all three pages; no local font files are used.

JavaScript adds a mobile navigation toggle, screenshot gallery controls, and the current footer year. Content and links remain usable without JavaScript. Reduced-motion preferences and keyboard navigation are supported.
