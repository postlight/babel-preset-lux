# babel-preset-lux

> Babel preset for all plugins require by [Lux](https://github.com/postlight/lux).

## Install

```sh
$ npm install --save-dev babel-preset-lux
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

```sh
$ babel script.js --presets lux
```

### Via Node API

```javascript
require('babel-core').transform('code', {
  presets: ['es2015']
});
```
