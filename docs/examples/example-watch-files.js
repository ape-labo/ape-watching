#!/usr/bin/env

var apeWatching = require('ape-watching');

apeWatching.watchFiles([
    'src/javascripts/**/*.js',
    'assets/javascripts/**/*.js'
], function (ev, filename) {
    /*...*/
});