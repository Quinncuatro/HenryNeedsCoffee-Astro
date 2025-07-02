/**
 * Markdown to HTML conversion utilities for RSS feeds
 * Converts markdown content to sanitized HTML safe for RSS readers
 */

import markdownit from 'markdown-it';
import sanitizeHtml from 'sanitize-html';

/**
 * Configure markdown-it parser for RSS-safe output
 */
const md = markdownit({
  html: false,          // Disable raw HTML in markdown
  xhtmlOut: true,       // Use XHTML output (better for XML feeds)
  breaks: false,        // Don't convert line breaks to <br>
  linkify: true,        // Auto-convert URLs to links
  typographer: false    // Disable smart quotes (safer for RSS)
});

/**
 * Configure sanitize-html for RSS-safe HTML
 * Allows only safe tags and attributes commonly supported by RSS readers
 */
const sanitizeOptions = {
  allowedTags: [
    // Text formatting
    'p', 'br', 'strong', 'b', 'em', 'i', 'u', 'mark', 'small', 'sub', 'sup',
    // Headings
    'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
    // Lists
    'ul', 'ol', 'li',
    // Links and media
    'a', 'img',
    // Code
    'code', 'pre',
    // Quotes and blocks
    'blockquote', 'cite',
    // Tables (basic support)
    'table', 'thead', 'tbody', 'tr', 'th', 'td'
  ],
  allowedAttributes: {
    'a': ['href', 'title', 'target'],
    'img': ['src', 'alt', 'title', 'width', 'height'],
    'blockquote': ['cite'],
    '*': ['class'] // Allow class attribute for styling
  },
  allowedSchemes: ['http', 'https', 'mailto', 'tel'],
  allowedSchemesByTag: {
    'img': ['http', 'https', 'data'] // Allow data URLs for images
  },
  disallowedTagsMode: 'discard', // Remove disallowed tags but keep content
  allowProtocolRelative: true,
  enforceHtmlBoundary: false
};

/**
 * Convert markdown content to sanitized HTML for RSS feeds
 * @param {string} markdown - Raw markdown content
 * @returns {string} Sanitized HTML safe for RSS readers
 */
export function markdownToHtml(markdown) {
  if (!markdown || typeof markdown !== 'string') {
    return '';
  }

  try {
    // Convert markdown to HTML
    const rawHtml = md.render(markdown);
    
    // Sanitize the HTML for RSS safety
    const sanitizedHtml = sanitizeHtml(rawHtml, sanitizeOptions);
    
    return sanitizedHtml;
  } catch (error) {
    console.error('Error converting markdown to HTML:', error);
    // Fallback: return plain text with basic HTML escaping
    return sanitizeHtml(markdown, {
      allowedTags: [],
      allowedAttributes: {}
    });
  }
}

/**
 * Convert markdown to HTML with custom sanitization options
 * @param {string} markdown - Raw markdown content
 * @param {object} customOptions - Custom sanitize-html options
 * @returns {string} Sanitized HTML
 */
export function markdownToHtmlCustom(markdown, customOptions = {}) {
  if (!markdown || typeof markdown !== 'string') {
    return '';
  }

  try {
    const rawHtml = md.render(markdown);
    const mergedOptions = { ...sanitizeOptions, ...customOptions };
    return sanitizeHtml(rawHtml, mergedOptions);
  } catch (error) {
    console.error('Error converting markdown to HTML with custom options:', error);
    return sanitizeHtml(markdown, {
      allowedTags: [],
      allowedAttributes: {}
    });
  }
}

/**
 * Create a plain text excerpt from markdown content
 * @param {string} markdown - Raw markdown content
 * @param {number} maxLength - Maximum length of excerpt (default: 160)
 * @returns {string} Plain text excerpt
 */
export function markdownToPlainText(markdown, maxLength = 160) {
  if (!markdown || typeof markdown !== 'string') {
    return '';
  }

  try {
    // Convert to HTML first, then strip all tags
    const html = md.render(markdown);
    const plainText = sanitizeHtml(html, {
      allowedTags: [],
      allowedAttributes: {}
    });
    
    // Clean up whitespace and truncate
    const cleaned = plainText.replace(/\s+/g, ' ').trim();
    
    if (cleaned.length <= maxLength) {
      return cleaned;
    }
    
    // Truncate at word boundary
    const truncated = cleaned.substring(0, maxLength);
    const lastSpace = truncated.lastIndexOf(' ');
    
    return lastSpace > 0 
      ? truncated.substring(0, lastSpace) + '...'
      : truncated + '...';
  } catch (error) {
    console.error('Error converting markdown to plain text:', error);
    return markdown.substring(0, maxLength) + (markdown.length > maxLength ? '...' : '');
  }
}