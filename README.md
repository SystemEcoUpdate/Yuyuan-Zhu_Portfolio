# Yuyuan Zhu Portfolio Website Template

This is a simple all-English portfolio website template with a white background and a fixed left navigation.

## Included structure

- Commercial Projects
  - Tiny Moods
  - unity oasis
  - Jo Malone
  - CellHeal
  - Product Design
- Art Projects
  - NaphthoLife Pulse
  - COSMIC LABTORATORY
  - Moisture Biofield
  - Material Resonance Field
  - Being & Becoming
- Operation Design
  - Autumn Leaves with Art
  - Campus Event Design

## How to preview

Open `index.html` directly in your browser.

## How to change your personal information

Open `script.js` and edit this section:

```js
const siteProfile = {
  siteName: "Yuyuan Zhu",
  copyright: "© Yuyuan Zhu",
  email: "your-email@example.com",
  linkedin: "https://www.linkedin.com/",
  instagram: "https://www.instagram.com/"
};
```

Replace the placeholder email and social links with your real links.

## How to replace images

1. Put your images inside the `assets` folder.
2. Use clear file names, for example:

```text
tiny-moods-01.jpg
tiny-moods-02.jpg
material-resonance-field-01.png
```

3. Open `script.js` and find the project you want to edit.
4. Replace the image paths:

```js
images: [
  "assets/tiny-moods-p1.svg",
  "assets/tiny-moods-p2.svg",
  "assets/tiny-moods-p3.svg"
]
```

with your real images:

```js
images: [
  "assets/tiny-moods-01.jpg",
  "assets/tiny-moods-02.jpg",
  "assets/tiny-moods-03.jpg"
]
```

The first image will become the project cover. All images will appear in the enlarged project view.

## How to edit project content

Each project in `script.js` looks like this:

```js
{
  id: "tiny-moods",
  title: "Tiny Moods",
  subtitle: "Baby Product Brand Project",
  year: "2026",
  type: "Brand Project",
  tags: ["Baby Product", "Brand Identity", "Packaging"],
  description: "Write your project description here.",
  images: ["assets/tiny-moods-01.jpg"]
}
```

You can edit:

- `title`
- `subtitle`
- `year`
- `type`
- `tags`
- `description`
- `images`

Do not use the same `id` for two different projects.

## Recommended image sizes

For project covers:

```text
1600 × 1000 px
1920 × 1200 px
```

For full project pages:

```text
1920 × 1080 px
1600 × 1200 px
Vertical images are also supported.
```

Avoid Chinese characters, spaces and special symbols in file names. Use names like:

```text
project-name-01.jpg
project-name-02.png
```


## Optimized Version
This version uses compressed JPG images for easier download and faster loading.
