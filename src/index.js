export function formatDate(date, format = 'iso') {
  if (!(date instanceof Date)) {
    throw new TypeError('Expected Date object');
  }
  
  switch (format) {
    case 'unix':
      return Math.floor(date.getTime() / 1000).toString();
    case 'readable':
      return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
    case 'iso':
    default:
      return date.toISOString();
  }
}

export function parseConfig(config) {
  if (typeof config !== 'string') {
    throw new TypeError('Config must be a string');
  }
  
  const parsed = JSON.parse(config);
  
  if (typeof parsed !== 'object' || parsed === null) {
    throw new Error('Config must parse to an object');
  }
  
  return parsed;
}

export function validateInput(input, schema) {
  if (!schema || typeof schema !== 'object') {
    throw new Error('Schema is required');
  }
  
  for (const [key, rules] of Object.entries(schema)) {
    const value = input[key];
    
    if (rules.required && (value === undefined || value === null)) {
      return { valid: false, error: `Missing required field: ${key}` };
    }
    
    if (rules.type && typeof value !== rules.type) {
      return { valid: false, error: `Invalid type for ${key}: expected ${rules.type}` };
    }
  }
  
  return { valid: true };
}

export class Logger {
  constructor(serviceName) {
    this.serviceName = serviceName;
  }
  
  _log(level, message, meta = {}) {
    console.log(JSON.stringify({
      timestamp: new Date().toISOString(),
      level,
      service: this.serviceName,
      message,
      ...meta
    }));
  }
  
  debug(message, meta) { this._log('debug', message, meta); }
  info(message, meta) { this._log('info', message, meta); }
  warn(message, meta) { this._log('warn', message, meta); }
  error(message, meta) { this._log('error', message, meta); }
}

export const VERSION = '2.0.0';

export default {
  formatDate,
  parseConfig,
  validateInput,
  Logger,
  VERSION
};
