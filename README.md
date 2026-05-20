# Portfolio Site - React Edition

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- ✨ Modern dark theme with gradient design
- 🎯 Clean, minimal interface
- 📱 Fully responsive (mobile, tablet, desktop)
- 🔗 Contentful CMS integration for social links
- 📊 Google Analytics support
- ⚡ Fast build & dev server (Vite)
- 🧪 E2E testing with Playwright
- 🎨 Tailwind CSS for styling
- 📦 TypeScript for type safety

## Setup

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. (Optional) Create `.env.local` from `.env.example` to enable Google Analytics:
```bash
cp .env.example .env.local
```

3. Update your social links in `src/components/SocialLinks.tsx`:
   - Resume URL
   - Email address
   - LinkedIn profile
   - GitHub profile

## Development

Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## Building

Create a production build:
```bash
npm run build
```

Preview the build:
```bash
npm run preview
```

## Testing

Run Playwright tests:
```bash
npm test
```

## Linting

Check for code issues:
```bash
npm run lint
```

## Project Structure

```
src/
├── components/
│   └── SocialLinks.tsx      # Fetches and displays social links
├── utils/
│   ├── GoogleAnalytics.tsx  # GA integration wrapper
│   └── useLocation.ts       # Custom hook for location tracking
├── App.tsx                   # Main app component
├── index.css                 # Global styles
└── main.tsx                  # Entry point

public/                        # Static assets
tests/                         # Playwright tests
```

## Migration from Vue

This React version maintains all the functionality of the original Vue site:
- ✅ Logo display
- ✅ Social links from Contentful
- ✅ Social links (Resume, Email, LinkedIn, GitHub)
- ✅ Google Analytics tracking (optional)
- ✅ Dynamic footer year
- ✅ Responsive design

With modern improvements:
- 🎨 Fresh gradient design
- ⚡ Faster performance (Vite)
- 📦 Better TypeScript support
- 🧪 Modern testing approach
- 🎯 Cleaner code organization
- 📝 Hardcoded content (no external dependencies)