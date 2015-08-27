var assert = require('assert');
describe('mock-test-01', function () {
    describe('mock-suite-01', function () {
        it('some test.', function (done) {
            assert.equal(1 + 2, 3);
            done();
        });
    });
});