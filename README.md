# HNC-Astro

A modern web project built with Astro, focusing on performance and developer experience.

## 📚 Project Overview

This project is built using Astro v5.8.2, a modern static site generator that delivers lightning-fast performance. It's designed to be a foundation for building static websites with excellent developer experience and optimal end-user performance.

## 🚀 Project Structure

```text
/
├── public/              # Static assets that will be served as-is
│   └── favicon.svg
├── src/
│   ├── assets/         # Project assets (images, fonts, etc.)
│   ├── components/     # Reusable UI components
│   ├── content/        # Content collections and data
│   ├── layouts/        # Page layouts and templates
│   │   └── Layout.astro
│   ├── pages/         # Page components and routing
│   │   └── index.astro
│   └── styles/        # Global styles and CSS modules
└── package.json
```

## 🛠️ Tech Stack

- **Framework:** [Astro](https://astro.build/) v5.8.2
- **Type Safety:** TypeScript support built-in
- **Styling:** Native CSS support with Scoped Styles

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 🚀 Getting Started

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:4321](http://localhost:4321) in your browser

## 📦 Project Features

- **Optimized Performance:** Built with Astro's partial hydration for minimal JavaScript
- **Component-Based:** Organized structure with reusable components
- **Asset Management:** Dedicated assets directory for better organization
- **Content Management:** Structured content directory for easy content handling
- **Flexible Styling:** Dedicated styles directory for global and component styles

## 🔧 Development

- The `src/pages` directory uses file-based routing
- Components in `src/components` can be imported and used in any page
- Global styles are located in `src/styles`
- Layouts in `src/layouts` provide consistent page structures

## 👀 Learn More

- [Astro Documentation](https://docs.astro.build)
- [Astro Discord Community](https://astro.build/chat)
- [Astro GitHub Repository](https://github.com/withastro/astro)

## 📝 License

This project is MIT licensed.
