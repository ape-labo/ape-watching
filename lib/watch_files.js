/**
 * Watch files.
 * @memberof module:ape-watching/lib
 * @function watchFiles
 * @param {string|string} - Filenames to watch.
 * @param {object} [options] - Optional settings.
 * @param {function} handler - File change handler.
 */

"use strict";

var argx = require('argx'),
    fs = require('fs'),
    path = require('path'),
    arrayfilter = require('arrayfilter'),
    colorprint = require('colorprint'),
    expandglob = require('expandglob');

/** @lends watchFiles */
function watchFiles(filenames, options, handler) {
    var args = argx(arguments);
    handler = args.pop('function') || argx.noop;
    filenames = args.shift('string|array');
    options = args.pop('object') || {};

    filenames = expandglob.sync(filenames).filter(fs.existsSync);
    colorprint.info('[watchFiles] Start watch files...');
    colorprint.trace('%s', filenames);

    return filenames.map(function (filename) {
        return _watchSingle(filename, options, handler);
    }).filter(arrayfilter.emptyReject());
}

function _watchSingle(filename, options, listener) {
    if (!fs.existsSync(filename)) {
        return null;
    }
    var watcher = fs.watch(filename, options, function (event) {
        colorprint.debug('[watchFiles] File changed: %s', path.relative(process.cwd(), filename));
        if (listener) {
            listener(event, filename);
        }
        if (event === 'rename') {
            var newWatcher = _watchSingle(filename, options, listener);
            watcher.close();
            if (newWatcher) {
                watcher.close = function close() {
                    newWatcher.close();
                }
            }
        }
    });
    return watcher;

}

module.exports = watchFiles;
