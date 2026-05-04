# DevilJO

A static website for hosting poetry and photography.

## What is included

- A poetry and photography collection page
- A browser-based composer for new poems and photo posts
- Search and filters for the archive
- Local browser storage for newly published pieces
- Responsive layout for desktop and mobile screens

## File layout

- `index.html` contains the page structure and browser behavior
- `styles.css` contains the website design and responsive styling

## How to run

Open `index.html` in a browser.

No build step is required.

## Push changes to GitHub

Run these commands from the project folder:

```bash
git add index.html styles.css README.md
git commit -m "Build poetry and photography website"
git push origin main
```

## Free hosting

### GitHub Pages

1. Push this repository to GitHub.
2. Open the repository on GitHub.
3. Go to Settings > Pages.
4. Under Build and deployment, choose:
   - Source: Deploy from a branch
   - Branch: `main`
   - Folder: `/ (root)`
5. Save the settings.

Your demo link should be:

`https://jyotirmayaapato.github.io/DevilJO/`

### Netlify Drop

1. Go to Netlify Drop.
2. Drag this project folder into the upload area.
3. Netlify will create a public demo URL.
