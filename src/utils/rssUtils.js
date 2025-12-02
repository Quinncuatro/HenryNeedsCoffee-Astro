/**
 * RSS utility functions for feed generation
 */

/**
 * Convert a Date object to RFC-822 format for RSS feeds
 * @param {Date|string} date - The date to format
 * @returns {string} RFC-822 formatted date string
 */
export function toRFC822Date(date) {
  if (!date) return '';
  
  const dateObj = date instanceof Date ? date : new Date(date);
  return dateObj.toUTCString();
}

/**
 * Generate RSS feed items from blog collection entries
 * @param {Array} blogPosts - Blog collection entries
 * @returns {Array} RSS feed items
 */
export function generateRSSItems(blogPosts) {
  if (!blogPosts || !blogPosts.length) return [];
  
  return blogPosts.map((post) => ({
    title: post.data.title,
    pubDate: toRFC822Date(post.data.date),
    description: post.data.desc,
    link: `/blog/${post.id}/`,
    guid: `/blog/${post.id}/`,
    categories: post.data.category ? [post.data.category] : [],
    content: post.body, // Include full markdown content
  }));
}

/**
 * Sanitize content for RSS feeds
 * @param {string} content - Raw content to sanitize
 * @returns {string} Sanitized content safe for XML
 */
export function sanitizeRSSContent(content) {
  if (!content) return '';
  
  return content
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/**
 * Generate absolute URL for RSS feed items
 * @param {string} path - Relative path
 * @param {string|URL} siteUrl - Base site URL
 * @returns {string} Absolute URL
 */
export function generateAbsoluteURL(path, siteUrl) {
  if (!path || !siteUrl) return '';
  
  const baseUrl = siteUrl.toString().replace(/\/$/, ''); // Remove trailing slash
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  
  return `${baseUrl}${cleanPath}`;
}