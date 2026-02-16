# @sfc-gh-testorg/cfaulkner-test-shared-lib

Shared utility library providing common functionality across SFC-GH-TestOrg services.

## Installation

```bash
npm install @sfc-gh-testorg/cfaulkner-test-shared-lib
```

## Usage

```javascript
import { 
  formatDate, 
  parseConfig, 
  validateInput,
  Logger,
  VERSION 
} from '@sfc-gh-testorg/cfaulkner-test-shared-lib';

// Format dates consistently across services
const timestamp = formatDate(new Date());

// Parse configuration with validation
const config = parseConfig('{"key": "value"}');

// Input validation
const isValid = validateInput(userInput, schema);

// Logging
const logger = new Logger('my-service');
logger.info('Service started');
```

## API Reference

### `formatDate(date, format?)`
Formats a Date object to string.
- `date` - Date object to format
- `format` - Optional format string ('iso' | 'unix' | 'readable')

### `parseConfig(config)`
Parses JSON configuration with validation.
- Throws `TypeError` if input is not a string
- Throws `Error` if parsed result is not an object

### `validateInput(input, schema)`
Validates input against a schema.

### `Logger`
Structured logging class with levels: debug, info, warn, error.

## Dependent Services

This library is used by:
- [@sfc-gh-testorg/cfaulkner-test-service-a](https://github.com/SFC-GH-TestOrg/cfaulkner-test-service-a) - User management service
- [@sfc-gh-testorg/cfaulkner-test-service-b](https://github.com/SFC-GH-TestOrg/cfaulkner-test-service-b) - API gateway service

## Version

Current version: `2.0.0`

## Changelog

### 2.0.0 (Breaking)
- `parseConfig()` now throws TypeError for non-string inputs
- `parseConfig()` validates that result is an object
- Added `format` parameter to `formatDate()`

### 1.0.0
- Initial release
