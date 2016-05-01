#!/usr/bin/env
'use strict'

const apeWatching = require('ape-watching')

const watchers = apeWatching.watchFiles([
  'src/javascripts/**/*.js',
  'assets/javascripts/**/*.js'
], (ev, filename) => {
  /* ... */
})

setTimeout(() => {
  watchers.forEach((watcher) => {
    watcher.close() // Stop watching
  })
}, 1000)
