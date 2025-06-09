# Henry Needs Coffee - Personal Website

A modern personal website built with Astro 5.8.2, featuring a terminal-inspired UI design. 

## Technology Stack

- **Framework**: [Astro 5.8.2](https://astro.build/)
- **Deployment**: [Netlify](https://www.netlify.com/)
- **Content**: Markdown-based content collections for blog and digital garden

## Project Structure

- **src/layouts/** - Base layout components
  - `Layout.astro` - Base HTML structure
  - `TerminalLayout.astro` - Terminal UI wrapper
  - `BlogPostLayout.astro` - Layout for blog posts
  - `GardenPostLayout.astro` - Layout for digital garden posts
  
- **src/components/** - Reusable UI components
  - `Header.astro` - Terminal header with buttons
  - `Footer.astro` - Site footer
  - `TypingEffect.astro` - Terminal typing animation
  - `CommandPrompt.astro` - Terminal command prompt
  - `PostCard.astro` - Card component for blog/garden posts
  
- **src/utils/** - Utility functions
  - `dateUtils.js` - Date formatting utilities
  - `stringUtils.js` - String manipulation and excerpting
  - `collectionUtils.js` - Collection sorting and filtering
  
- **src/content/** - Content collections
  - `blog/` - Blog posts in markdown
  - `garden/` - Digital garden posts in markdown

- **src/pages/** - Route-based page components
  - `index.astro` - Homepage
  - `blog.astro` - Blog listing page
  - `blog/[slug].astro` - Dynamic blog post route
  - `digital-garden.astro` - Digital garden listing
  - `digital-garden/[slug].astro` - Dynamic garden post route
  - `resume.astro` - Resume page
  - `talks-and-pods.astro` - Talks and podcast listing
  - `contact.astro` - Contact information

- **src/styles/** - Global stylesheets
  - `global.css` - Global CSS variables, utility classes, and base styles

## Development Features

- **CSS Variables**: Comprehensive design system with semantic variables
- **Utility Classes**: Tailwind-inspired utility classes for layout and styling
- **DRY Components**: Reusable component architecture
- **Responsive Design**: Mobile-friendly layouts
- **TypeScript**: Type safety with interfaces for component props

## Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## Implemented Features

- Terminal-style UI with command prompt animation
- Blog with markdown content
- Digital Garden section for work-in-progress thoughts
- Responsive design for mobile devices
- Dark mode by default

## License

MIT
EOL < /dev/null