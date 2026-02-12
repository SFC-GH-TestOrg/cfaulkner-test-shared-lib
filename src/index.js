// Main exports for shared-lib - BREAKING CHANGE
export function formatDate(date, format) {
  // Changed: now requires format parameter
  if (!format) throw new Error('format is required');
  return date.toISOString();
}

export function parseConfig(config, options) {
  // Changed: now requires options parameter  
  return JSON.parse(config);
}

export const VERSION = '2.0.0';
