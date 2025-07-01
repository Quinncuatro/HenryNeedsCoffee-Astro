# Essential Development Commands

## NPM Scripts (from package.json)
```bash
# Development server with hot reload
npm run dev                # Starts Astro dev server on port 4321

# Production build
npm run build             # Build for production to dist/

# Preview production build
npm run preview           # Preview built site locally

# Astro CLI
npm run astro             # Access Astro CLI commands
```

## Testing Commands
⚠️ **No testing framework currently configured**
- Consider adding Vitest for unit testing
- Consider adding Playwright for e2e testing
- No linting or formatting tools configured

## Git Workflow
```bash
# Standard git commands
git status               # Check working directory status
git add .               # Stage all changes
git commit -m "message" # Commit changes
git push origin main    # Push to main branch (triggers Netlify deploy)
```

## Development Workflow
```bash
# 1. Start development server
npm run dev

# 2. Make changes to components/content
# 3. Test in browser at http://localhost:4321

# 4. Build and preview before deployment
npm run build
npm run preview

# 5. Deploy via git push to main
git add .
git commit -m "Your changes"
git push origin main
```

## Content Management
```bash
# Add new blog post
# Create src/content/blog/new-post.md with frontmatter

# Add new garden entry  
# Create src/content/garden/new-entry.md with frontmatter

# Add blog images
# Create src/assets/blog-images/post-name/ directory
# Add images to that directory
```

## Netlify Commands (if Netlify CLI installed)
```bash
netlify dev             # Local development with Netlify features
netlify build           # Build using Netlify settings
netlify deploy          # Manual deploy to Netlify
```

## System Commands (Linux)
```bash
ls -la                  # List files with details
grep -r "pattern" src/  # Search for patterns in source
find src/ -name "*.astro" # Find specific file types
```