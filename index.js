'use strict'

const fs = require('fs')

exports.mkdir = mkdir
exports.mkdirSync = mkdirSync

function mkdir (path, mode, callback) {
  if (mode && !callback) {
    callback = mode
    mode = null
  }

  if (callback) {
    fs.mkdir(path, mode, (err) => {
      if (err && err.code !== 'EEXIST') callback(err)
      else callback()
    })
  } else {
    process.nextTick(() => {
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
