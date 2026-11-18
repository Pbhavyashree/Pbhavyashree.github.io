# Bhavyashree Prakash — portfolio

Netflix-style portfolio: animated "B" intro, then "Who's watching?" with three profiles
(Recruiter, Visitor, Developer). Plain HTML/CSS/JS, no build step.

## Deploy (GitHub Pages, user site)
Replace the contents of the `Pbhavyashree/pbhavyashree.github.io` repo root with these files:

    git clone https://github.com/Pbhavyashree/pbhavyashree.github.io
    cd pbhavyashree.github.io
    # copy index.html style.css app.js favicon.svg .nojekyll README.md here (overwrite index.html)
    git add -A
    git commit -m "Netflix-style portfolio with Recruiter / Visitor / Developer profiles"
    git push

Live in ~1 minute at https://pbhavyashree.github.io

## Direct links
- `/#recruiter` — straight to the recruiter profile (use this on your CV / applications)
- `/#visitor`, `/#developer`

## Optional
Drop a `resume.pdf` next to `index.html` and a "Resume" button appears on the Recruiter profile automatically.

## Editing content
All text lives at the top of `app.js` (`item` and `profiles`).
