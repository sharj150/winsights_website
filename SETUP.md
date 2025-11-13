# Setup Instructions

## Prerequisites

Before running this project, you need to have Node.js installed on your system.

### Installing Node.js

1. **macOS (using Homebrew):**
   ```bash
   brew install node
   ```

2. **Or download directly:**
   - Visit [nodejs.org](https://nodejs.org/)
   - Download and install the LTS version

3. **Verify installation:**
   ```bash
   node --version
   npm --version
   ```

## Installation Steps

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   - Navigate to [http://localhost:3000](http://localhost:3000)
   - The site will automatically reload when you make changes

## Adding Trade PnL Images

To add your trade PnL images:

1. Place your images in the `public/images/` directory
2. Name them: `pnl1.png`, `pnl2.png`, `pnl3.png`, `pnl4.png`
3. Update the `lib/content.ts` file if you use different names or add more images

## Building for Production

```bash
npm run build
npm start
```

## Troubleshooting

- If you get port 3000 already in use, Next.js will automatically use the next available port
- Make sure all dependencies are installed: `npm install`
- Clear `.next` folder if you encounter build issues: `rm -rf .next`

