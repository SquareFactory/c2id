# `@csquare/c2id`

[![licence](https://img.shields.io/github/license/csquare-ai/c2id)](LICENSE)
[![version](https://img.shields.io/npm/v/@csquare/c2id)](https://www.npmjs.com/package/@csquare/c2id)
[![coverage](https://img.shields.io/codecov/c/github/csquare-ai/c2id)](https://app.codecov.io/gh/csquare-ai/c2id)

Generate nearly unique base62-based ids.

Maintained by [Mathieu Bour](https://github.com/mathieu-bour), Lead Platform Engineer
at [Cohesive Computing SA](https://csquare.ai).

## Installation

Install with npm:

```shell
npm install --save @csquare/c2id
```

Install with Yarn:

```shell
yarn add @csquare/c2id
```

## Usage

### Basic usage

Using CommonJS syntax:

<!-- prettier-ignore-start -->
```typescript
const { c2id } = require('@csquare/c2id');

const output = c2id();
```
<!-- prettier-ignore-end -->

Using ESM syntax (default import):

<!-- prettier-ignore-start -->
```typescript
import randomBytesSeed from '@csquare/c2id';

const output = c2id();
```
<!-- prettier-ignore-end -->

or

<!-- prettier-ignore-start -->
```typescript
import { randomBytesSeed } from '@csquare/c2id';

const output = c2id();
```
<!-- prettier-ignore-end -->
