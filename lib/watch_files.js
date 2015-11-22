/**
 * Watch files.
 * @memberof module:ape-watching/lib
 * @function watchFiles
 * @param {string|string} - Filenames to watch.
 * @param {object} [options] - Optional settings.
 * @param {string} [options.cwd] - Working directory path.
 * @parma {string} [options.prefix] - Prefix for log
 * @param {function} handler - File change handler.
 */

"use strict";

const argx = require('argx'),
    fs = require('fs'),
    path = require('path'),
    fwatcher = require('fwatcher'),
    arrayfilter = require('arrayfilter'),
    colorprint = require('colorprint'),
    expandglob = require('expandglob');

/** @lends watchFiles */
function watchFiles(filenames, options, handler) {
    let args = argx(arguments);
    handler = args.pop('function') || argx.noop;
    filenames = args.shift('string|array');
    options = args.pop('object') || {};

    let cwd = options.cwd || process.cwd(),
        prefix = options.prefix || 'ape-watching';
    filenames = expandglob.sync(filenames, {
        cwd: cwd
    }).map((filename) => {
        return path.resolve(cwd, filename);
    }).filter(fs.existsSync);
    colorprint.info('[%s] Start watch files...', prefix);
    colorprint.trace('%s', filenames.map((filename) => {
        return path.relative(process.cwd(), filename);
    }));

    function _watchSingle(filename, options, listener) {
        if (!fs.existsSync(filename)) {
            return null;
        }
        let watcher = fwatcher(filename, options, (err, event) => {
            if (err) {
                throw err;
            }
            colorprint.debug('[%s] File changed: %s', prefix, path.relative(process.cwd(), filename));
            if (listener) {
                listener(event, filename);
            }
        });
        watcher.close = function () {
            watcher.off();
            let _ = watcher._;
            if (_) {
                _.close();
            }
        };
        return watcher;

    }


    return filenames.map((filename) => {
        return _watchSingle(filename, options, handler);
    }).filter(arrayfilter.emptyReject());
}

module.exports = watchFiles;
