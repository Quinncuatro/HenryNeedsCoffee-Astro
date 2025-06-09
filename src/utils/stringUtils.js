/**
 * String utility functions
 */

/**
 * Creates a plain text excerpt from markdown content
 * @param {string} text - The markdown text to process
 * @param {number} maxLength - Maximum length of the excerpt (default: 280)
 * @returns {string} Processed excerpt with trailing ellipsis if truncated
 */
export function createExcerpt(text, maxLength = 280) {
  if (!text) return '';
  
  // Remove markdown headings, links, images, code blocks, etc.
  const strippedText = text
    .replace(/^#+\s+/gm, '') // Remove headings
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Replace markdown links with just the text
    .replace(/!\[[^\]]*\]\([^)]+\)/g, '') // Remove images
    .replace(/`{1,3}[^`]+`{1,3}/g, '') // Remove inline code
    .replace(/```[\s\S]*?```/g, '') // Remove code blocks
    .replace(/^\s*[-*+]\s+/gm, '') // Remove list markers
    .replace(/^\s*\d+\.\s+/gm, '') // Remove numbered list markers
    .replace(/(\*\*|__)(.*?)\1/g, '$2') // Replace bold with just the text
    .replace(/(\*|_)(.*?)\1/g, '$2'); // Replace italic with just the text

  // Truncate to maxLength and ensure ending at a whole word
  if (strippedText.length <= maxLength) {
    return strippedText;
  }

  const truncated = strippedText.substring(0, maxLength);
  // Find the last space to truncate at a whole word
  const lastSpace = truncated.lastIndexOf(' ');

  if (lastSpace > 0) {
    return truncated.substring(0, lastSpace) + '…';
  }

  return truncated + '…';
}

/**
 * Simple excerpt creator that just truncates text
 * @param {string} text - The text to truncate
 * @param {number} maxLength - Maximum length before truncation
 * @returns {string} Truncated text
 */
export function simpleExcerpt(text, maxLength = 280) {
  if (!text || text.length <= maxLength) return text || '';
  
  const truncated = text.slice(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');
  
  if (lastSpace > 0) {
    return truncated.substring(0, lastSpace) + '…';
  }
  
  return truncated + '…';
}

/**
 * Convert a title to slug format
 * @param {string} title - The title to convert
 * @returns {string} URL-friendly slug
 */
export function slugify(title) {
  if (!title) return '';
  
  return title.toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]/g, '');
}