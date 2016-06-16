'use strict'

/* global it */

const assert = require('assert')
const fs = require('fs')
const rimraf = require('rimraf').sync
const mkdir = require('.').mkdir
const mkdirSync = require('.').mkdirSync
const path = './a-directory'

it('mkdir', (done) => {
  rimraf(path)
  mkdir(path, (err) => {
    assert.ifError(err)
    fs.accessSync(path, fs.F_OK)
    mkdir(path, (err) => {
      assert.ifError(err)
      fs.accessSync(path, fs.F_OK)
      rimraf(path)
      done()
    })
  })
})

it('mkdirSync', () => {
  rimraf(path)
  mkdirSync(path)
  fs.accessSync(path, fs.F_OK)
  mkdirSync(path)
  fs.accessSync(path, fs.F_OK)
  rimraf(path)
})
