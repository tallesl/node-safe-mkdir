# :file_folder: safe `mkdir`
    
[![dependencies](https://david-dm.org/tallesl/safe-mkdir.png)](https://david-dm.org/tallesl/safe-mkdir)
[![devDependencies](https://david-dm.org/tallesl/safe-mkdir/dev-status.png)](https://david-dm.org/tallesl/safe-mkdir#info=devDependencies)
[![npm module](https://badge.fury.io/js/safe-mkdir.png)](http://badge.fury.io/js/safe-mkdir)

[![npm](https://nodei.co/npm/safe-mkdir.png?mini=true)](https://nodei.co/npm/safe-mkdir/)
    
A version of `fs.mkdir` and `fs.mkdirSync` that doesn't raise *EEXIST*.

## Usage

```javascript
$ npm install safe-mkdir
safe-mkdir@1.0.2 node_modules/safe-mkdir
$ node
> var safeMkdir = require('safe-mkdir').mkdir
undefined
> safeMkdir('crazy-folder')
undefined
> safeMkdir('crazy-folder') // fs.mkdir would throw EEXIST
undefined
```

