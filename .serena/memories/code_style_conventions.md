# Code Style & Conventions

## TypeScript Configuration
- **Strict Mode**: Using `astro/tsconfigs/strict` for maximum type safety
- **Interface Definitions**: All component props defined with TypeScript interfaces
- **Type Safety**: Zod schemas for content collections validation

## Component Architecture
- **Astro Components**: Primary component format (.astro files)
- **Component Structure**: Frontmatter (TypeScript) + HTML template + scoped styles
- **Props Interface**: Each component defines Props interface for type safety
- **Slot Usage**: Leverages Astro's slot system for composition

## File Organization
- **Extensions**: `.astro` for components/layouts, `.ts` for config, `.js` for utilities
- **Naming**: PascalCase for components (Header.astro), camelCase for utilities
- **Directory Structure**: Clear separation by function (components/, layouts/, utils/, etc.)

## CSS Conventions
- **CSS Variables**: Comprehensive design system using custom properties
- **Naming Pattern**: BEM-like with semantic naming (--color-primary, --space-md)
- **Utility Classes**: Global utility classes for common patterns
- **Scoped Styles**: Component-specific styles in <style> blocks
- **Global First**: Most styling in global.css, components only for specific overrides

## Documentation Standards
- **JSDoc Comments**: Full JSDoc for utility functions with params and returns
- **Component Comments**: Clear comments explaining component purpose
- **README**: Comprehensive project documentation with setup instructions

## Import Conventions
- **Relative Imports**: Use relative paths for local files
- **Astro Imports**: Import Astro components with .astro extension
- **Utility Imports**: Named imports for utility functions