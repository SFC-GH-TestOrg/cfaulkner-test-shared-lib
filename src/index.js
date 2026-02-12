// Main exports for shared-lib
export function formatDate(date) {
  return date.toISOString();
}

export function parseConfig(config) {
  return JSON.parse(config);
}

export const VERSION = "6.0.0";
