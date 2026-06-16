# ashishbhagat.com

Personal portfolio site for **Ashish Bhagat** — IT Analyst & Systems Administrator.

Static site (HTML/CSS/JS), no build step. Hosted on GitHub Pages.

## Files
- `index.html` — page content
- `styles.css` — styling (dark, responsive theme)
- `main.js` — mobile nav + footer year
- `CNAME` — custom domain (ashishbhagat.com)

## Run locally
Open `index.html` in a browser, or serve it:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy (GitHub Pages)
1. Push to the GitHub repo.
2. In the repo: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, pick your branch (`main`) and `/ (root)`.
3. Once the custom domain is set up in DNS, the site serves at https://ashishbhagat.com

## Customize
Edit the email, LinkedIn link, and any role/company details directly in `index.html`.
