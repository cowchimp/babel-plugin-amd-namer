# babel-plugin-amd-namer

> A [Babel](https://github.com/babel/babel) plugin to name anonymous AMD modules

This task is useful if you're using an AMD loader that requires modules to have explicit names (e.g. [almond](https://github.com/jrburke/almond)).

## Example

**Input** `src/simple/actual.js`

```js
define(function() {
  return 'a';
});
```

**Output** `dist/simple/actual.js`

```js
'use strict';

define('dist/simple/actual', function () {
  return 'a';
});
```

## Getting started

### Installation

```sh
$ npm install babel-plugin-amd-namer
```

### Usage

#### Via `.babelrc` (Recommended)

```json
{
  "plugins": ["amd-namer"],
  "moduleIds": true, //mandatory!
  "sourceRoot": "src",
  "moduleRoot": "dist"
}
```

This plugin uses the same module naming logic as the built-in babel plugins (e.g. [`transform-es2015-modules-amd`](https://github.com/babel/babel/tree/master/packages/babel-plugin-transform-es2015-modules-amd)).  
This means that it calls the internal babel method [`getModuleName`](https://github.com/babel/babel/blob/85eec9ffef9f2defbcc4cce29440c5ef230708d2/packages/babel-core/src/transformation/file/index.js#L203) to decide what the module name should be.  
See the [Babel Options docs](https://babeljs.io/docs/usage/api/#options) for customization info.  

## Running tests

Run mocha tests with `npm test`

## License

MIT
