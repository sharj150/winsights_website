# Winsights Website

A modern, single-page website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Single Page Design**: All sections on one page with smooth scrolling
- **Sections**: Home, Who We Are, Success, Testimonials, FAQ, Dashboard
- **Animations**: Smooth animations using Framer Motion
- **Carousels**: Testimonials and Trade PnL image carousels
- **Responsive**: Fully responsive design for all devices
- **Professional Design**: Sleek, modern UI with custom color scheme

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion
- React Slick (Carousels)
- League Spartan Font

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
winsights_website/
├── app/
│   ├── layout.tsx          # Root layout with font configuration
│   ├── page.tsx            # Main page component
│   ├── globals.css         # Global styles
│   └── slick-custom.css    # Custom carousel styles
├── components/
│   ├── Navigation.tsx      # Top navigation bar
│   ├── Hero.tsx            # Hero section
│   ├── WhoWeAre.tsx        # About section
│   ├── Success.tsx         # Success metrics section
│   ├── Testimonials.tsx    # Testimonials carousel
│   ├── TradePnL.tsx        # Trade PnL carousel
│   ├── FAQ.tsx             # FAQ accordion
│   └── Dashboard.tsx       # Dashboard section
├── lib/
│   └── content.ts          # Content data
└── public/
    └── images/             # Images (add your trade PnL images here)
```

## Color Scheme

- Primary Blue: `rgb(0, 20, 113)`
- Dark Blue: `rgb(14, 26, 55)`
- White: `#ffffff`
- Light Grey: `#e5e7eb`
- Black: `#000000`

## Customization

- Update content in `lib/content.ts`
- Modify styles in `app/globals.css` and component files
- Add images to `public/images/` for Trade PnL carousel

## Auto-Save to GitHub

This repository is configured to auto-save changes to GitHub. The autosave script runs in the background and commits/pushes changes automatically.

## License

See LICENSE file for details.
