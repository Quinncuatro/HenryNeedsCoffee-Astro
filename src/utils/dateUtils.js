/**
 * Date utility functions
 */

/**
 * Format a date using the standard blog/article format
 * @param {Date|string} date - The date to format
 * @returns {string} Formatted date (e.g., "June 9, 2025")
 */
export function formatDate(date) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

/**
 * Add leading zero to numbers less than 10
 * @param {number} n - Number to format
 * @returns {string|number} Number with leading zero if needed
 */
export function padZero(n) {
  return n < 10 ? "0" + n : n;
}

/**
 * Format current date for terminal-style display
 * @returns {string} Formatted date string (e.g., "Current login: Mon Jun 9 15:30:45 2025")
 */
export function getTerminalDateFormat() {
  const now = new Date();
  const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  
  const day = days[now.getDay()];
  const month = months[now.getMonth()];
  const date_num = now.getDate();
  const hours = padZero(now.getHours());
  const minutes = padZero(now.getMinutes());
  const seconds = padZero(now.getSeconds());
  const year = now.getFullYear();
  
  return `Current login: ${day} ${month} ${date_num} ${hours}:${minutes}:${seconds} ${year}`;
}