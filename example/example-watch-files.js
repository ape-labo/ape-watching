#!/usr/bin/env

var apeWatching = require('ape-watching');

var watchers = apeWatching.watchFiles([
    'src/javascripts/**/*.js',
    'assets/javascripts/**/*.js'
], function (ev, filename) {
    /*...*/
});


setTimeout(function () {
    watchers.forEach(function (watcher) {
        watcher.close(); // Stop watching
    });
}, 1000);