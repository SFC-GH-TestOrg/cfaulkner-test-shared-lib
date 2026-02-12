// Breaking changes to test table format
export function formatDate(date, locale) {
  // Changed: requires locale parameter
  if (!locale) throw new Error('locale required');
  return date.toLocaleDateString(locale);
}

export function parseConfig(config) {
  // Changed: now returns null on invalid JSON instead of throwing
  try { return JSON.parse(config); } catch { return null; }
}

export const VERSION = '3.0.0';
