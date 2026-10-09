# ঢাকা ডিজিটাল ডায়াগনস্টিক সেন্টার, ফরিদপুর — Website

A simple static website (HTML + CSS + JavaScript, no backend, no build step) with a Bangla ⇄ English switch.

```
index.html         page layout
css/style.css      design (colors are at the top in :root)
js/data.js         ← ALL CONTENT: edit this file to update the site
js/main.js         renders the content (normally no need to touch)
assets/images/     pictures
```

## Run it on your computer

Open `index.html` in a browser, or run a small local server (better, so the map loads):

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000

## How to update content (`js/data.js`)

Every text is written as `{ bn: "বাংলা", en: "English" }`. If you leave `en` empty, the Bangla text is shown in English mode too.

**Add a doctor:** copy one block inside `DOCTORS` and change the values.

```js
{
  name: { bn: "ডাঃ নতুন নাম", en: "Dr. New Name" },
  degrees: { bn: "এমবিবিএস, ...", en: "MBBS, ..." },
  specialty: { bn: "...", en: "..." },
  institution: { bn: "...", en: "..." },
  schedule: { bn: "প্রতিদিন বিকাল ৩টা থেকে ৭টা", en: "Daily 3 PM – 7 PM" },
  tags: ["medicine"],          // keys from SPECIALTIES (used for the filter buttons)
  photo: "",                    // e.g. "assets/images/doctors/dr-new.jpg"
},
```

**Add test fees:** fill the `fee` field of a service:

```js
fee: { bn: "৫০০ টাকা", en: "BDT 500" },
```

**Add a service:** copy a block in `SERVICES`. Available icons: `microscope, xray, heart, ultrasound, echo, checkup, hormone, scan, baby`.

**Gallery:** put the image in `assets/images/` and add a line to `GALLERY`.

**Facebook:** paste the page URL into `SITE.facebook` to show the link in the footer.

> The doctors' details were copied from the posters, and the English versions were translated. Please check names, degrees and timings.

## Publish for free on GitHub Pages

1. Push this folder to a GitHub repository (it must be public on a free account).
2. On GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, choose `main` and `/ (root)`, then **Save**.
3. After a minute the site is live at `https://<your-username>.github.io/<repo-name>/`.

Every later `git push` updates the site automatically.

Other free options: [Netlify Drop](https://app.netlify.com/drop) or Cloudflare Pages (drag and drop the folder).
