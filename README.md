<h1 align="center">@jsheaven/case-converter</h1>

This package provides utility functions for converting strings between various text casing formats in JavaScript/TypeScript. It supports conversion between camelCase, PascalCase, snake_case, and kebab-case. The package can be used to standardize the casing of strings, particularly when dealing with APIs, file names, or data serialization.

<h2 align="center">User Stories</h2>

1. As a developer, I want to convert strings from one casing format to another.
2. As a developer, I want to ensure consistency in the casing of strings within my application.
3. As a developer, I want to have a library that is easy to use and integrates well with my existing codebase.

<h2 align="center">Features</h2>

- ✅ Supports conversion between camelCase, PascalCase, snake_case, and kebab-case.
- ✅ Provides functions for both converting strings from one format to another and vice versa.
- ✅ Lightweight and easy to integrate into existing projects.
- ✅ Provides TypeScript support with type definitions.
- ✅ Just `600 byte` nano sized (ESM, gizpped)
- ✅ Tree-shakable and side-effect free
- ✅ Runs on Windows, Mac, Linux, CI tested
- ✅ First class TypeScript support
- ✅ 100% Unit Test coverage

<h2 align="center">Example Usage</h2>

<h3 align="center">Setup</h3>

- yarn: `yarn add @jsheaven/case-converter`
- npm: `npm install @jsheaven/case-converter`

<h3 align="center">Usage in JavaScript/TypeScript</h3>

```typescript
import { convert } from '@jsheaven/case-converter'

const inputString = 'hello_world'
const convertedString = convert('SnakeCase', 'CamelCase', inputString)

console.log(convertedString) // Output: helloWorld
```

<h3 align="center">CommonJS</h3>

```javascript
const { convert } = require('@jsheaven/case-converter')

const inputString = 'hello_world'
const convertedString = convert('SnakeCase', 'CamelCase', inputString)

console.log(convertedString) // Output: helloWorld
```

