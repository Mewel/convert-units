var convert = require('../lib')
  , assert = require('assert')
  , tests = {}
  , ACCURACY = 1/1000
  , percentError = require('../lib/percentError');

tests['m/s to m/s'] = function () {
  assert.strictEqual( convert(1).from('m/s').to('m/s') , 1);
};

tests['m/s to km/h'] = function () {
  assert.strictEqual( convert(1).from('m/s').to('km/h') , 3.6);
};

tests['mi/h to mi/h'] = function () {
  assert.strictEqual( convert(6).from('mi/h').to('mi/h') , 6);
};

tests['mi/h to knot'] = function () {
  var expected = 1.73795
  var actual = convert(2).from('mi/h').to('knot');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['mi/h to ft/s'] = function () {
    var expected = 4.4
    var actual = convert(3).from('mi/h').to('ft/s')
    assert.ok( percentError(expected, actual) < ACCURACY
      , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['m/s to mi/h'] = function () {
    var expected = 22.3694
    var actual = convert(10).from('m/s').to('mi/h');
    assert.ok( percentError(expected, actual) < ACCURACY
      , 'Expected: ' + expected +', Actual: ' + actual);
}

tests['m/s to knot'] = function () {
    var expected = 15.5508
    var actual = convert(8).from('m/s').to('knot');
    assert.ok( percentError(expected, actual) < ACCURACY
      , 'Expected: ' + expected +', Actual: ' + actual);
}

tests['mi/h to km/h'] = function () {
    var expected = 19.3121
    var actual = convert(12).from('mi/h').to('km/h');
    assert.ok( percentError(expected, actual) < ACCURACY
      , 'Expected: ' + expected +', Actual: ' + actual);
}

module.exports = tests;
