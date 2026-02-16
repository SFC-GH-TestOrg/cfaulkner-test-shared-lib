// Main exports for shared-lib
export function formatDate(date, format = 'iso') {
  if (format === 'iso') {
    return date.toISOString();
  } else if (format === 'unix') {
    return Math.floor(date.getTime() / 1000);
  }
  return date.toISOString();
}

export function parseConfig(config) {
  if (typeof config !== 'string') {
    throw new TypeError('Config must be a string');
  }
  const parsed = JSON.parse(config);
  if (!parsed || typeof parsed !== 'object') {
    throw new Error('Config must parse to an object');
  }
  return parsed;
}

export function validateConfig(config) {
  const parsed = parseConfig(config);
  return { valid: true, config: parsed };
}

export const VERSION = '2.0.0';
// Test comment Mon Feb 16 13:29:18 PST 2026
