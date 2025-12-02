# Project Structure

## Root Directory
```
/
├── README.md              # Project documentation
├── package.json           # Dependencies and scripts
├── astro.config.mjs      # Astro configuration
├── tsconfig.json         # TypeScript configuration
├── netlify.toml          # Netlify deployment config
└── public/               # Static assets
    ├── favicon.svg
    └── icon.png
```

## Source Directory (`src/`)
```
src/
├── components/           # Reusable UI components
│   ├── Header.astro     # Terminal header with buttons
│   ├── Footer.astro     # Site footer
│   ├── TypingEffect.astro # Terminal typing animation
│   ├── CommandPrompt.astro # Terminal command prompt
│   ├── NavBar.astro     # Navigation menu
│   ├── PostCard.astro   # Card for blog/garden posts
│   └── Welcome.astro    # Welcome message component
│
├── layouts/             # Page layout templates
│   ├── Layout.astro     # Base HTML structure
│   ├── TerminalLayout.astro # Terminal UI wrapper
│   ├── BlogPostLayout.astro # Layout for blog posts
│   └── GardenPostLayout.astro # Layout for garden posts
│
├── pages/               # Route-based pages
│   ├── index.astro      # Homepage
│   ├── blog.astro       # Blog listing
│   ├── blog/[slug].astro # Dynamic blog post routes
│   ├── digital-garden.astro # Garden listing
│   ├── digital-garden/[slug].astro # Dynamic garden routes
│   ├── resume.astro     # Resume page
│   ├── talks-and-pods.astro # Talks listing
│   └── contact.astro    # Contact page
│
├── content/             # Content collections
│   ├── config.ts        # Content collection schemas
│   ├── blog/           # Blog posts (markdown)
│   └── garden/         # Digital garden posts (markdown)
│
├── utils/              # Utility functions
│   ├── dateUtils.js    # Date formatting utilities
│   ├── stringUtils.js  # String manipulation functions
│   └── collectionUtils.js # Content sorting/filtering
│
├── styles/             # Global styles
│   └── global.css      # Main stylesheet with CSS variables
│
└── assets/             # Local assets
    ├── astro.svg
    ├── background.svg
    └── blog-images/    # Blog post images organized by post
```

## Key Patterns
- **File-based Routing**: Pages directory maps directly to URLs
- **Content Collections**: Type-safe content management with Zod schemas
- **Component Composition**: Layouts wrap pages, components compose interfaces
- **Asset Organization**: Images organized by blog post in subdirectories