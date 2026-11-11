# Apex Workforce Solutions website

Static site, no build step. Upload the whole folder to any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages or normal cPanel hosting) so that index.html is at the root.

## Fill in before going live
1. assets/app.js, top of file: set CONFIG (WhatsApp number, email, phone). Forms open WhatsApp with the details filled in.
2. index.html: replace the sample address, phone and email on the Contact page and in the JSON-LD block in the head.
3. Replace made-up content: client names in the "Our clients" strip, the "Served in" page, testimonials (marked "(sample)"), job listings, and the stats (12 years, 8,500 workers, 140 clients).
4. Once you know the live URL, add a canonical link and og:url / og:image tags in the head.
5. Make sure you have rights to every photo in assets/img.
6. Add a privacy policy page if you collect candidate data.
