#!/usr/bin/env node

/**
 * Run tests.
 */

"use strict";

process.chdir(__dirname + '/..');

const apeTasking = require('ape-tasking'),
    apeTesting = require('ape-testing');

apeTasking.runTasks('test', [
    (callback) => {
        apeTesting.runNodeunit('test/*_test.js', callback);
    }
], true);
