# Welding service one-page site (Aprelevka)

## Included
- Responsive landing page (desktop + mobile)
- Editable content stored in `content/homepage.json`
- Decap CMS admin scaffold at `/admin/`
- Netlify deployment config

## Important
The site is built, but **publishing and secure admin access are not connected yet**. CMS Git Gateway authentication requires configuring a repository and the supported authentication service for your Netlify account. This is not something that can be safely completed without access to your accounts.

## Publish
1. Replace the placeholder phone in `content/homepage.json`.
2. Upload the contents of this folder to a GitHub repository on branch `main`.
3. Import the repository into Netlify and deploy.
4. In `admin/config.yml`, replace `YOUR-SITE` with your actual Netlify site name/URL.
5. Configure CMS authentication for the site (Git Gateway/auth service supported by your Netlify account), then test login and a commit.
6. Admin page is at `https://YOUR-SITE.netlify.app/admin/`.

After the CMS is connected and working, homepage text and contact fields can be edited through the admin page and published via the Git repository.


## Contact placeholders
The default phone number is `+7 (000) 000-00-00`; replace it before sharing the site.
