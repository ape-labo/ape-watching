/**
 * Test case for watchFiles.
 * Runs with mocha.
 */
'use strict'

const watchFiles = require('../lib/watch_files.js')
const fs = require('fs')
const assert = require('assert')
const path = require('path')
const mkdirp = require('mkdirp')

const tmpDir = __dirname + '/../tmp'

describe('watch files', () => {
  before((done) => {
    mkdirp.sync(tmpDir)
    done()
  })

  after((done) => {
    done()
  })

  it('Watch all.', (done) => {
    let watching = path.resolve(tmpDir, 'testing-watched-file.txt')
    fs.writeFileSync(watching, 'foo')
    let watchers = watchFiles(tmpDir + '/*.*', {}, (event, changed) => {
      assert.equal(event, 'change')
      assert.equal(watching, changed)
      watchers.forEach((watcher) => {
        assert.ok(watcher)
        watcher.close()
      })
      done()
    })
    setTimeout(() => {
      fs.writeFileSync(watching, 'foo2')
    }, 100)
  })
})

/* global describe, before, after, it */
