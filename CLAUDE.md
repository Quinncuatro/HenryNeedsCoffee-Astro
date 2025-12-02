# Henry Needs Coffee - Project Context

## Project Overview
Personal website and blog for Henry Quinn featuring a terminal-inspired interface built with Astro 5.8.2. The site serves as a platform for technical blog posts, digital garden entries, and professional presence.

## Quick Reference
See @README.md for project overview and @package.json for available npm commands.

## Architecture & Specifications
Import comprehensive project specifications:

- **Architecture**: @spec://Henry-Needs-Coffee/architecture.md
- **Testing Strategy**: @spec://Henry-Needs-Coffee/testing-strategy.md  
- **Code Style & Standards**: @spec://Henry-Needs-Coffee/code-style-standards.md
- **Content Management**: @spec://Henry-Needs-Coffee/content-management.md
- **Deployment & DevOps**: @spec://Henry-Needs-Coffee/deployment-devops.md
- **UI/UX Guidelines**: @spec://Henry-Needs-Coffee/ui-ux-guidelines.md
- **Performance**: @spec://Henry-Needs-Coffee/performance.md
- **Security**: @spec://Henry-Needs-Coffee/security.md
- **Maintenance**: @spec://Henry-Needs-Coffee/maintenance.md
- **Development Workflow**: @spec://Henry-Needs-Coffee/development-workflow.md

## Development Commands

```bash
# Core commands
npm run dev       # Start development server (http://localhost:4321)
npm run build     # Build for production
npm run preview   # Preview production build

# Content workflow
# 1. Create markdown file in src/content/blog/ or src/content/garden/
# 2. Add required frontmatter (see content-management spec)
# 3. Preview with npm run dev
# 4. Commit and push to deploy
```

## Key Project Constraints

### Current State
- ⚠️ **No testing framework configured** (see testing-strategy spec for roadmap)
- ⚠️ **No linting/formatting tools** (manual code review currently)
- ✅ **TypeScript strict mode** for type safety
- ✅ **Content validation** via Zod schemas

### Technology Stack
- **Framework**: Astro 5.8.2 (static site generation)
- **Language**: TypeScript (strict mode)
- **Styling**: CSS custom properties (no framework)
- **Content**: Markdown with YAML frontmatter
- **Deployment**: Netlify (auto-deploy from main branch)

## Terminal Theme Guidelines
Maintain consistent terminal aesthetic:
- **Monospace fonts**: Menlo, Monaco, Consolas
- **Dark color scheme**: Primary #355366, background #222222
- **Terminal elements**: Header buttons (red, yellow, green), command prompts
- **Typing animations**: CSS-only for authenticity

## Content Creation Workflow

### Blog Posts
```yaml
---
title: "Post Title"
category: "Category"
date: "YYYY-MM-DD"
type: "blog"
desc: "SEO description"
draft: false
---
```

### Digital Garden
```yaml
---
title: "Entry Title"
date: "YYYY-MM-DD"
type: "garden"
desc: "Optional description"
draft: false
---
```

### Images
- Store in `src/assets/blog-images/[post-slug]/`
- Optimize manually (< 500KB per image)
- Use descriptive filenames and alt text

## Task Completion Checklist

After making changes:
1. **Test locally**: `npm run dev`
2. **Build verification**: `npm run build && npm run preview`
3. **Content validation**: Check frontmatter follows schemas
4. **Responsive check**: Test mobile/desktop layouts
5. **Image optimization**: Compress if adding images
6. **Commit and push**: Auto-deploy via Netlify

## Future Enhancements Priority

### High Priority
1. **Testing infrastructure**: Vitest + Playwright setup
2. **Code quality tools**: ESLint + Prettier configuration
3. **Image optimization**: Automated WebP conversion

### Medium Priority
1. **Performance monitoring**: Lighthouse CI integration
2. **Search functionality**: Site-wide content search
3. **Enhanced animations**: Improved terminal effects

## Project Context Notes
- **Single developer**: Personal project with room for collaboration
- **Performance focused**: Static generation for speed
- **Accessibility aware**: WCAG 2.1 compliance goals
- **SEO optimized**: Proper meta tags and semantic HTML
- **Mobile responsive**: Terminal theme adapts to all screen sizes

## Emergency Procedures
- **Build fails**: Check Netlify logs, verify locally
- **Content errors**: Validate frontmatter against schemas
- **Site down**: Rollback via Netlify deploy history
- **Performance issues**: Run Lighthouse audit, check image sizes

This file provides comprehensive context for understanding and working with the Henry Needs Coffee codebase.