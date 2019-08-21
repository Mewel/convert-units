var convert = require('../lib')
    , assert = require('assert')
    , tests = {}
    , ACCURACY = 1/1000
    , percentError = require('../lib/percentError');

tests['pop/km2 to pop/mi2'] = function () {
    var expected = 0.386102
        , actual = convert(1).from('pop/km2').to('pop/mi2');
    assert.ok( percentError(expected, actual) < ACCURACY
        , 'Expected: ' + expected +', Actual: ' + actual);
};

module.exports = tests;
