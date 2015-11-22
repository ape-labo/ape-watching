/**
 * Test case for watchFiles.
 * Runs with nodeunit.
 */
"use strict";

const watchFiles = require('../lib/watch_files.js'),
    fs = require('fs'),
    path = require('path'),
    mkdirp = require('mkdirp');

const tmpDir = __dirname + '/../tmp';
exports.setUp = function (done) {
    mkdirp.sync(tmpDir);
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Watch all.'] = function (test) {
    let watching = path.resolve(tmpDir, 'testing-watched-file.txt');
    fs.writeFileSync(watching, 'foo');
    let watchers = watchFiles(tmpDir + '/*.*', {}, function (event, changed) {
        test.equal(event, 'change');
        test.equal(watching, changed);
        watchers.forEach((watcher) => {
            test.ok(watcher);
            watcher.close();
        });
        test.done();
    });
    setTimeout(function () {
        fs.writeFileSync(watching, 'foo2');
    }, 100);


};