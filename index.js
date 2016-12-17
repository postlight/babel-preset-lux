const IS_NODE_SEVEN = process.version.charAt(1) === '7';
const HAS_HARMONY_FLAG = process.execArgv.includes('--harmony');

const presets = [];
const plugins = [
  require('babel-plugin-external-helpers'),
  require('babel-plugin-transform-class-properties'),
  require('babel-plugin-transform-flow-strip-types'),
  [require('babel-plugin-transform-object-rest-spread'), {
    useBuiltIns: true
  }]
];

if (process.env.NODE_ENV === 'production') {
  presets.push(require('babel-preset-babili'));
}

if (!IS_NODE_SEVEN) {
  plugins.push(
    require('babel-plugin-transform-exponentiation-operator'),
    require('babel-plugin-transform-async-to-generator')
  );
} else if (!HAS_HARMONY_FLAG) {
  plugins.push(
    require('babel-plugin-transform-async-to-generator')
  );
}

module.exports = {
  presets,
  plugins
};
