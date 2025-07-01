# Content Management Guidelines

## Blog Posts (`src/content/blog/`)

### Frontmatter Schema
```yaml
---
title: "Post Title"           # Required: String
category: "Category Name"     # Optional: String  
date: "YYYY-MM-DD"           # Required: Date string
type: "blog"                 # Default: "blog"
desc: "Post description"     # Required: String for SEO/previews
draft: false                 # Optional: Boolean, default false
---
```

### File Naming
- Use kebab-case for filenames
- Include topic/date hints when helpful
- Examples: `driving-claude-code-part-1.md`, `day1-learning-devops-in-public.md`

### Content Structure
- Start with engaging opening
- Use markdown headers (##, ###) for structure  
- Include code blocks with language specification
- Reference images from `src/assets/blog-images/post-name/`

## Digital Garden (`src/content/garden/`)

### Frontmatter Schema
```yaml
---
title: "Entry Title"         # Required: String
date: "YYYY-MM-DD"          # Required: Date string
type: "garden"              # Default: "garden"
desc: "Entry description"   # Optional: String
draft: false                # Optional: Boolean, default false
---
```

### Philosophy
- Less formal than blog posts
- Work-in-progress ideas and thoughts
- Can be updated and evolved over time
- Shorter, more experimental content

## Image Management

### Directory Structure
```
src/assets/blog-images/
├── post-name-slug/
│   ├── image1.jpg
│   ├── image2.png
│   └── screenshot.jpg
```

### Image Guidelines
- Create subdirectory for each post that needs images
- Use descriptive filenames
- Optimize images for web (reasonable file sizes)
- Support multiple formats (jpg, png, svg)

## Content Collections Configuration
- Defined in `src/content/config.ts`
- Uses Zod schemas for type safety
- Automatic validation of frontmatter
- TypeScript intellisense for content queries