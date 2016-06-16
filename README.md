# safe-mkdir

[![][build-img]][build]
[![][coverage-img]][coverage]
[![][dependencies-img]][dependencies]
[![][devdependencies-img]][devdependencies]
[![][npm-img]][npm]
    
A version of [fs.mkdir] and [fs.mkdirSync] that doesn't raise `EEXIST`.

[build]:               https://travis-ci.org/tallesl/node-safe-mkdir
[build-img]:           https://travis-ci.org/tallesl/node-safe-mkdir.svg
[coverage]:            https://coveralls.io/r/tallesl/node-safe-mkdir?branch=master
[coverage-img]:        https://coveralls.io/repos/tallesl/node-safe-mkdir/badge.svg?branch=master
[dependencies]:        https://david-dm.org/tallesl/node-safe-mkdir
[dependencies-img]:    https://david-dm.org/tallesl/node-safe-mkdir.svg
[devdependencies]:     https://david-dm.org/tallesl/node-safe-mkdir#info=devDependencies
[devDependencies-img]: https://david-dm.org/tallesl/node-safe-mkdir/dev-status.svg
[npm]:                 https://npmjs.com/package/safe-mkdir
[npm-img]:             https://badge.fury.io/js/safe-mkdir.svg
[fs.readFile]:         https://nodejs.org/api/fs.html#fs_fs_mkdir_file_options_callback
[fs.readFileSync]:     https://nodejs.org/api/fs.html#fs_fs_mkdirsync_file_options
[fs.mkdir]:            http://nodejs.org/api/fs.html#fs_fs_mkdir_path_mode_callback
[fs.mkdirSync]:        http://nodejs.org/api/fs.html#fs_fs_mkdirsync_path_mode

## Usage

```js
$ npm install safe-mkdir
(...)
$ node
> var safeMkdir = require('safe-mkdir').mkdir
undefined
> safeMkdir('crazy-folder', function (err) { // err is never EEXIST
  // handle as you wish
});
undefined
```
