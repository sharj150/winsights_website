<!-- 857b1b2e-66b7-4d51-b772-86be29e50884 54ff9757-f458-43b4-9369-a18836a92ec3 -->
# Winsights Website Implementation Plan

## Project Setup

1. Initialize Next.js project with TypeScript and Tailwind CSS
2. Install required dependencies (react-slick for carousels, framer-motion for animations)
3. Configure Tailwind with custom color palette:

- Primary blue: `rgb(0, 20, 113)`
- Dark blue: `rgb(14, 26, 55)`
- White, light grey, black

4. Set up League Spartan font (Google Fonts) with font weight variations

## File Structure

- `app/page.tsx` - Main single-page component
- `app/layout.tsx` - Root layout with font configuration
- `components/Navigation.tsx` - Top nav with logo/title (left) and Dashboard button (right)
- `components/Hero.tsx` - Main hook area section
- `components/WhoWeAre.tsx` - About section
- `components/Success.tsx` - Success metrics/stats section
- `components/Testimonials.tsx` - Reviews carousel
- `components/TradePnL.tsx` - Trade PnL image carousel
- `components/FAQ.tsx` - FAQ accordion section
- `components/Dashboard.tsx` - Dashboard section (or link component)
- `lib/content.ts` - Extracted content from winsights.info

## Implementation Steps

### 1. Next.js & Tailwind Setup

- Run `npx create-next-app@latest . --typescript --tailwind --app`
- Configure `tailwind.config.ts` with custom colors and League Spartan font
- Set up `app/globals.css` with Tailwind directives and custom styles

### 2. Content Extraction

- Extract text content from winsights.info for each section
- Structure content in `lib/content.ts` for easy management
- Include placeholder images for trade PnL carousel

### 3. Navigation Component

- Fixed/sticky header with logo and "Winsights" title on left
- Dashboard button on right (styled with primary blue)
- Smooth scroll navigation to sections
- Professional styling inspired by reference sites

### 4. Hero Section

- Large hook area with main headline
- Call-to-action elements
- Smooth fade-in animations
- Background using color scheme

### 5. Who We Are Section

- Content from winsights.info
- Professional layout with cards/grid
- Scroll-triggered animations

### 6. Success Section

- Metrics/stats display
- Animated counters
- Visual elements showcasing success

### 7. Testimonials Carousel

- Implement react-slick carousel
- Review cards with user info
- Auto-play with smooth transitions
- Navigation dots/arrows

### 8. Trade PnL Image Carousel

- Separate carousel for trade performance images
- Full-width or contained layout
- Auto-play functionality

### 9. FAQ Section

- Accordion-style FAQ component
- Smooth expand/collapse animations
- Content from winsights.info

### 10. Dashboard Section

- Dashboard preview or link
- Professional presentation
- Integration with Dashboard button in nav

### 11. Animations & Polish

- Add framer-motion for scroll animations
- Smooth transitions between sections
- Hover effects on interactive elements
- Professional micro-interactions

### 12. Localhost Setup

- Configure Next.js dev server
- Test all sections and interactions
- Ensure responsive design

## Key Design Elements

- League Spartan font throughout (vary weights: 300, 400, 500, 600, 700)
- Color scheme: Primary blue `rgb(0, 20, 113)`, Dark blue `rgb(14, 26, 55)`, white, light grey, black
- Professional navigation style from reference sites
- Smooth scroll behavior
- Carousel themes for testimonials and trade PnLs
- Sleek animations and transitions

### To-dos

- [x] Initialize Next.js project with TypeScript and Tailwind CSS, install dependencies (react-slick, framer-motion)
- [x] Configure Tailwind with custom color palette and League Spartan font setup
- [x] Extract and structure content from winsights.info into lib/content.ts
- [x] Create Navigation component with logo/title (left) and Dashboard button (right)
- [x] Build Hero section with main hook area and animations
- [x] Create Who We Are section with professional layout
- [x] Build Success section with animated metrics
- [x] Implement testimonials carousel using react-slick
- [x] Create Trade PnL image carousel component
- [x] Build FAQ accordion section with animations
- [x] Create Dashboard section component
- [x] Assemble all sections in main page.tsx with smooth scrolling
- [x] Add framer-motion animations, transitions, and polish all interactions

