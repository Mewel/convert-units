var convert = require('../lib')
    , assert = require('assert')
    , tests = {};

tests['kg/m3 to g/cm3'] = function () {
    assert.strictEqual( convert(1).from('kg/m3').to('g/cm3'), 0.001);
};

module.exports = tests;
