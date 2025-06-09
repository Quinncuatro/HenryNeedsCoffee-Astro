/**
 * Collection utility functions for handling Astro content collections
 */

/**
 * Sort collection entries by date (newest first)
 * @param {Array} entries - Collection entries with data.date property
 * @returns {Array} Sorted entries
 */
export function sortByDate(entries) {
  if (!entries || !entries.length) return [];
  
  return entries.sort(
    (a, b) => new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf()
  );
}

/**
 * Filter collection entries by category
 * @param {Array} entries - Collection entries with data.category property
 * @param {string} category - Category to filter by
 * @returns {Array} Filtered entries
 */
export function filterByCategory(entries, category) {
  if (!entries || !entries.length) return [];
  if (!category) return entries;
  
  return entries.filter(entry => 
    entry.data.category && entry.data.category.toLowerCase() === category.toLowerCase()
  );
}

/**
 * Get the most recent entries from a collection
 * @param {Array} entries - Collection entries with data.date property
 * @param {number} count - Number of entries to return
 * @returns {Array} Most recent entries
 */
export function getRecentEntries(entries, count = 3) {
  if (!entries || !entries.length) return [];
  
  const sorted = sortByDate(entries);
  return sorted.slice(0, count);
}