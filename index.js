module.exports = {
  plugins: [
    require('babel-plugin-external-helpers'),
    require('babel-plugin-syntax-trailing-function-commas'),
    require('babel-plugin-transform-async-to-generator'),
    require('babel-plugin-transform-class-properties'),
    require('babel-plugin-transform-es2015-destructuring'),
    require('babel-plugin-transform-es2015-parameters'),
    require('babel-plugin-transform-es2015-spread'),
    require('babel-plugin-transform-exponentiation-operator'),
    require('babel-plugin-transform-object-rest-spread'),
    require('babel-plugin-syntax-flow'),
    require('babel-plugin-transform-flow-strip-types')
  ]
};
