README
Portfolio Website – Hanga Kovács

This is a personal portfolio website showcasing UI/UX and interactive design work, developed using Next.js, React, and Framer Motion. The site features animated transitions, an interactive projects showcase, and a gallery combining both images and video artworks.

The website is exported as a static build and deployed on a shared hosting environment.

# Technologies:
- Next.js (Static Export)
- React + Hooks
- Framer Motion (animations)
- CSS (custom styling)
- Hostinger deployment (static hosting)
- Responsive design
- Interactive project navigation

# Features:
- Hero section with typography-focused layout
- Projects section with:
    Sticky layout
    Click-to-switch project navigation using arrow controls
    Hover-preview images
    Image click & “Learn More” navigation
- Gallery page supporting:
    PNG/JPG images
    MP4 autoplaying, looped videos
- Fully static export for hosting flexibility
- Custom smooth scrolling and animations

# Project Structure:
project-root/
├── app/
│   ├── page.js                 → Home page
│   ├── gallery/page.js         → Gallery page
│   ├── about/page.js           → About page
│   ├── projects/
│   │   ├── low-literacy/page.js
│   │   ├── noise/page.js
│   │   ├── ai/page.js
│   └── globals.css             → Main styling
├── public/
│   ├── images/                 → Project images & hover images
│   ├── videos/                 → Gallery video files (if used)
├── components/
│   └── Layout.js               → Shared header + footer
├── out/                        → Static export (deploy folder)
├── package.json
└── README.md

# Static Export & Build:
- To run locally:
    npm install
    npm run dev
- To generate the static export:
    npm run build
    npm run export
This creates an out/ folder that can be uploaded to any static hosting provider.

# Deployment Notes:
- Because the website is statically exported:
    Client-side routing still works using standard anchor links (href="/page.html" after export).
    Next/Image is used in gallery but works fine after removing hydration-dependent animations.
    Files in public/ remain accessible directly (e.g. /images/MediUitleg.png).
The site was tested and deployed successfully on Hostinger.

# To-do:
- Add animated elements to title page
- Change header visibility (inversing colors depending on background?) o
- Fix the gallery (!) o
- Fix project reaching (!) o
- Add new project
- Figure out hosting
- Responsive design o

# License:
All rights reserved © 2025
Design and development by Hanga Kovács