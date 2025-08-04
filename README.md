# Daniel Felipe - Portfolio

<div align="center">
  <h3>Modern Portfolio built with Astro, TypeScript & Tailwind CSS</h3>
  <p>
    <a href="https://dev-portfolio-danyfelipe.vercel.app/" target="_blank">🌐 Live Demo</a>
  </p>
  
  <img alt="Portfolio Demo" src="./demo/demo.webp" />
  <img alt="PageSpeed Score" src="./demo/pagespeed-score.png" />
</div>

## 📋 Overview

A modern, responsive portfolio website showcasing professional experience, projects, and certifications. Built with performance and accessibility in mind, featuring smooth animations, interactive timeline, and optimized for both desktop and mobile devices.

### ✨ Key Features

- **🎨 Modern Design**: Clean, professional interface with glassmorphism effects
- **📱 Fully Responsive**: Optimized for all device sizes
- **⚡ Performance Optimized**: Built with Astro for lightning-fast loading
- **🎯 Interactive Elements**: Custom cursor effects and smooth animations
- **📊 Timeline Visualization**: Interactive timeline for experience section
- **🔍 SEO Friendly**: Optimized meta tags and semantic HTML
- **♿ Accessible**: WCAG compliant with proper ARIA labels

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/) - Static site generator
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Deployment**: [Vercel](https://vercel.com/) - Edge deployment platform
- **Icons**: Custom SVG components
- **Animations**: CSS transitions and transforms

## � Project Structure

```text
dev-portfolio/
├── public/                     # Static assets
│   ├── avatar.webp            # Profile image
│   ├── favicon.webp           # Site favicon
│   ├── pattern.svg            # Background pattern
│   ├── resume.pdf             # CV document
│   └── logos/                 # Company/project logos
│       ├── aws.jpeg
│       ├── dutchpet.jpeg
│       └── ...
├── src/
│   ├── components/            # Reusable UI components
│   │   ├── Component.astro    # Generic component wrapper
│   │   ├── SparklesCore.tsx   # React animation component
│   │   ├── TabToggle.astro    # Tab navigation component
│   │   ├── experience/        # Experience-related components
│   │   │   ├── index.astro    # Main experience component
│   │   │   └── props.ts       # TypeScript interfaces
│   │   ├── projects/          # Project-related components
│   │   │   ├── index.astro    # Main projects component
│   │   │   └── props.ts       # TypeScript interfaces
│   │   ├── studies/           # Studies/certifications components
│   │   │   ├── index.astro    # Main studies component
│   │   │   └── props.ts       # TypeScript interfaces
│   │   └── icons/             # SVG icon components
│   │       ├── arrow.astro
│   │       ├── github.astro
│   │       ├── linkedin.astro
│   │       └── instagram.astro
│   ├── data/                  # Static data and content
│   │   ├── experience.ts      # Professional experience data
│   │   ├── projects.ts        # Projects portfolio data
│   │   ├── studies.ts         # Certifications and studies data
│   │   └── socials.ts         # Social media links
│   ├── layouts/               # Page layout templates
│   │   └── Layout.astro       # Main layout component
│   ├── libs/                  # External libraries and utilities
│   │   └── context-cursor/    # Custom cursor implementation
│   ├── pages/                 # Route pages (file-based routing)
│   │   └── index.astro        # Homepage
│   ├── scripts/               # Client-side JavaScript
│   │   └── main.ts            # Main application scripts
│   ├── utils/                 # Helper functions
│   │   └── cn.ts              # Tailwind class name utilities
│   └── env.d.ts               # TypeScript environment declarations
├── astro.config.mjs           # Astro configuration
├── tailwind.config.mjs        # Tailwind CSS configuration
├── tsconfig.json              # TypeScript configuration
└── package.json               # Dependencies and scripts
```

## 🎨 Component Architecture

### Core Components

- **`Layout.astro`**: Main layout wrapper with SEO meta tags and global styles
- **`TabToggle.astro`**: Interactive tab navigation for switching between content sections
- **`Component.astro`**: Generic wrapper for dynamic component rendering

### Content Components

- **`experience/`**: Professional work experience with company logos and timelines
- **`projects/`**: Portfolio projects with images, technologies, and live links
- **`studies/`**: Certifications and educational background (no external links)

### UI Components

- **`icons/`**: SVG icon components for social media and navigation
- **`SparklesCore.tsx`**: React component for particle animations

## 💾 Data Management

All content is managed through TypeScript files in the `/src/data/` directory:

- **Type Safety**: Each data file uses corresponding TypeScript interfaces
- **Modular Structure**: Separate files for different content types
- **Easy Maintenance**: Add/edit content without touching components

### Data Structure Examples

```typescript
// experience.ts
export const EXPERIENCE: ExperienceProp[] = [
  {
    dates: "Oct 2024 — Present",
    title: "Database Administrator",
    company: "Universidad Horizonte",
    companyUrl: "https://horizonte.edu.co",
    description: "Leading advanced Q10 platform administration...",
    technologies: ["MySQL", "Power BI", "Q10"],
    logo: "/logos/uhorizonte.jpg"
  }
];

// studies.ts (no external links)
export const STUDIES: StudiesProp[] = [
  {
    dates: "June 2025",
    title: "Big Data Essentials",
    company: "Certmind",
    description: "Introduction to Big Data fundamentals...",
    technologies: ["Big Data", "Power BI"],
    logo: "/logos/certmind.jpg"
  }
];
```

## 🎯 Features Implementation

### Interactive Timeline
- Animated dots positioned relative to content
- Smooth transitions between sections
- Responsive design for mobile devices

### Tab Navigation
- JavaScript-powered content switching
- Maintains timeline visibility for relevant sections
- Smooth animations and state management

### Custom Cursor Effects
- Context-aware cursor interactions
- Hover states for interactive elements
- Smooth following animations

### Performance Optimizations
- Static site generation with Astro
- Optimized images in WebP format
- Minimal JavaScript bundle
- CSS-first approach for animations

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/DanyFelipe/dev-portfolio.git
cd dev-portfolio

# Install dependencies
pnpm install

# Start development server
pnpm run dev
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm run dev` | Start development server at `localhost:4321` |
| `pnpm run build` | Build production site to `./dist/` |
| `pnpm run preview` | Preview production build locally |
| `pnpm run astro check` | Run type checking |
| `pnpm run astro add` | Add Astro integrations |

## 📝 Content Management

### Adding New Experience
1. Edit `/src/data/experience.ts`
2. Add company logo to `/public/logos/`
3. Follow the existing data structure

### Adding New Projects
1. Edit `/src/data/projects.ts`
2. Add project images to `/public/` or use external URLs
3. Include live demo and GitHub links

### Adding New Certifications
1. Edit `/src/data/studies.ts`
2. Add certification logos to `/public/logos/`
3. No external links (design choice)

## 🎨 Customization

### Colors & Theme
- Edit `tailwind.config.mjs` for color scheme
- Modify CSS custom properties in `Layout.astro`

### Animations
- Timeline animations in `/src/pages/index.astro`
- Cursor effects in `/src/libs/context-cursor/`
- Transitions defined in Tailwind classes

### Layout
- Responsive breakpoints in component files
- Grid and flexbox layouts with Tailwind
- Mobile-first design approach

## 📄 License

- **Code**: MIT License
- **Content**: [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

<div align="center">
  <p>Built with ❤️ by Daniel Felipe</p>
  <p>
    <a href="https://github.com/DanyFelipe">GitHub</a> •
    <a href="https://linkedin.com/in/daniel-felipe">LinkedIn</a>
  </p>
</div>
