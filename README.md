# babel-preset-lux

[![Greenkeeper badge](https://badges.greenkeeper.io/postlight/babel-preset-lux.svg)](https://greenkeeper.io/)

> A babel preset containing all of the plugins required by [Lux](https://github.com/postlight/lux).

## Install

```bash
npm install --save-dev babel-preset-lux
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "presets": ["lux"]
}
```

### Via CLI

```bash
babel script.js --presets lux
```

### Via Node API

```javascript
require('babel-core').transform('code', {
  presets: ['lux']
});
```
