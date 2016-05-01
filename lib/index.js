/**
 * ape framework module for watching files.
 * @module ape-watching
 */

'use strict'

let d = (module) => module.default || module

module.exports = {
  get watchFiles () { return d(require('./watch_files')) }
}
