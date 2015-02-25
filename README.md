# :file_folder: safe mkdir
    
[![dependencies](https://david-dm.org/tallesl/safe-mkdir.png)](https://david-dm.org/tallesl/safe-mkdir)
[![devDependencies](https://david-dm.org/tallesl/safe-mkdir/dev-status.png)](https://david-dm.org/tallesl/safe-mkdir#info=devDependencies)
[![npm module](https://badge.fury.io/js/safe-mkdir.png)](http://badge.fury.io/js/safe-mkdir)

[![npm](https://nodei.co/npm/safe-mkdir.png?mini=true)](https://nodei.co/npm/safe-mkdir/)
    
A version of [fs.mkdir](http://nodejs.org/api/fs.html#fs_fs_mkdir_path_mode_callback) and [fs.mkdirSync](http://nodejs.org/api/fs.html#fs_fs_mkdirsync_path_mode) that doesn't raise EEXIST.

## Usage

```javascript
$ npm install safe-mkdir
safe-mkdir@1.0.2 node_modules/safe-mkdir
$ node
> var safeMkdir = require('safe-mkdir').mkdir
undefined
> safeMkdir('crazy-folder', function (err) { // err is never EEXIST
  // handle as you wish
});
undefined
```

