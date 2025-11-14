# @coldboy002/prettier-config

[![NPM version](https://img.shields.io/npm/v/@coldboy002/prettier-config.svg)](https://www.npmjs.org/package/@coldboy002/prettier-config)

> Shareable config for [Prettier](https://prettier.io/).

For consistent formatting across my repos.

## Installation

```bash
npm install --save-dev @coldboy002/prettier-config
```

or

```bash
yarn add --dev @coldboy002/prettier-config
```

**Note**: This package requires Node.js 22.0.0 or later. It is not compatible with older versions.

## Usage

Add this line to your `package.json`

```json
"prettier": "@coldboy002/prettier-config",
```

Alternatively, add this to `.prettierrc` file:

```json
 "@coldboy002/prettier-config"
```

To extend the configuration, create prettier.config.js and spread this config onto your own config object:

```js
import cbConfig from '@coldboy002/prettier-config'

/** @type {import('prettier').Config} */
const config = {
	...cbConfig,
	experimentalTernaries: true,
}

export default config
```

Refer to [Prettier documentation](https://prettier.io/docs/en/configuration.html#sharing-configurations), if you need override some options.

## [Changelog](CHANGELOG.md)

## [License](LICENSE)
