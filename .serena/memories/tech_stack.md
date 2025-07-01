# Technology Stack

## Core Framework
- **Astro 5.8.2**: Static site generator with minimal JavaScript
- **TypeScript**: Strict configuration for type safety
- **Node.js 18**: Runtime environment (specified in netlify.toml)

## Content Management
- **Markdown**: All content (blog posts, garden entries) in markdown format
- **Astro Content Collections**: Type-safe content with Zod schema validation
- **Frontmatter**: YAML frontmatter for metadata (title, date, category, desc, draft)

## Styling
- **CSS Custom Properties**: Comprehensive design system with CSS variables
- **Global CSS**: Single global.css file with utility classes
- **Responsive Design**: Mobile-first approach with media queries
- **No CSS Framework**: Custom terminal-themed styling

## Deployment
- **Netlify**: Hosting and deployment platform
- **Automatic Deployment**: Triggered on main branch pushes
- **Preview Deploys**: Available for pull requests

## Development Tools
- **NPM**: Package management
- **Git**: Version control
- **VS Code**: IDE integration with Astro support

## Assets
- **Local Images**: Stored in src/assets/ with subdirectories for blog images
- **SVG Icons**: Used for favicon and graphics
- **Static Assets**: Public directory for favicon and other static files