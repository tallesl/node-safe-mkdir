var fs = require('fs')

exports.mkdir = mkdir
exports.mkdirSync = mkdirSync

function mkdir (path, mode, callback) {
  if (callback) {
    fs.mkdir(path, mode, function (err) {
    	if (err && err.code != 'EEXIST') {
				callback(err);
			} else {
				callback();
			}
    })
  } else {
    process.nextTick(function () {
      mkdirSync(path, mode)
    })
  }
}

function mkdirSync (path, mode) {
  try {
    fs.mkdirSync(path, mode)
  } catch (err) {
    if (err.code !== 'EEXIST') throw err
  }
}

