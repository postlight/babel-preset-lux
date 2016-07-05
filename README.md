# babel-preset-lux

> Babel preset for all plugins required by [Lux](https://github.com/postlight/lux).

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
