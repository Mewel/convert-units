var convert = require('../lib')
  , assert = require('assert')
  , tests = {}
  , ACCURACY = 1/1000
  , percentError = require('../lib/percentError');

tests['l to l'] = function () {
  assert.strictEqual( convert(2).from('l').to('l') , 2);
};

tests['mm3 to l'] = function () {
  assert.strictEqual( convert(1000000).from('mm3').to('l') , 1);
};

tests['cm3 to l'] = function () {
  assert.strictEqual( convert(100).from('cm3').to('l') , 1/10);
};

tests['dl to l'] = function () {
  assert.strictEqual( convert(2).from('dl').to('l') , 0.2);
};

tests['cl to l'] = function () {
  assert.strictEqual( convert(25).from('cl').to('l') , 0.25);
};

tests['ml to l'] = function () {
  assert.strictEqual( convert(100).from('ml').to('l') , 1/10);
};

tests['m3 to l'] = function () {
  assert.strictEqual( convert(1).from('m3').to('l') , 1000);
};

tests['km3 to l'] = function () {
  assert.strictEqual( convert(1).from('km3').to('l') , 1000000000000);
};

tests['l to ml'] = function () {
  assert.strictEqual( convert(1).from('l').to('ml') , 1000);
};

tests['dl to ml'] = function () {
  assert.strictEqual( convert(10).from('dl').to('ml') , 1000);
};

tests['cl to ml'] = function () {
  assert.strictEqual( convert(100).from('cl').to('ml') , 1000);
};

tests['ml to ml'] = function () {
  assert.strictEqual( convert(13).from('ml').to('ml') , 13);
};

tests['msk to ml'] = function () {
  assert.strictEqual( convert(2).from('msk').to('ml') , 30);
};

tests['tsk to ml'] = function () {
  assert.strictEqual( convert(3).from('tsk').to('ml') , 15);
};

tests['krm to ml'] = function () {
  assert.strictEqual( convert(13).from('krm').to('ml') , 13);
};

tests['kanna to l'] = function () {
  assert.strictEqual( convert(2).from('kanna').to('l') , 2 * 2.617);
};

tests['kkp to ml'] = function () {
  assert.strictEqual( convert(2).from('kkp').to('ml') , 300);
};

tests['glas to ml'] = function () {
  assert.strictEqual( convert(2).from('glas').to('ml') , 400);
};

tests['ml to msk'] = function () {
  assert.strictEqual( convert(15).from('ml').to('msk') , 1);
};

tests['ml to tsk'] = function () {
  assert.strictEqual( convert(5).from('ml').to('tsk') , 1);
};

tests['ml to krm'] = function () {
  assert.strictEqual( convert(1).from('ml').to('krm') , 1);
};

tests['l to kanna'] = function () {
  assert.strictEqual( convert(2.617).from('l').to('kanna') , 1);
};

tests['lm to kkp'] = function () {
  assert.strictEqual( convert(150).from('ml').to('kkp') , 1);
};

tests['ml to glas'] = function () {
  assert.strictEqual( convert(200).from('ml').to('glas') , 1);
};

tests['fl-oz to fl-oz'] = function () {
  assert.strictEqual( convert(62).from('fl-oz').to('fl-oz') , 62);
};

tests['fl-oz-us to tbsp-us'] = function () {
  assert.strictEqual( convert(4).from('fl-oz-us').to('Tbs-us') , 8);
};

tests['Tbs-us to fl-oz-us'] = function () {
  assert.strictEqual( convert(2).from('Tbs-us').to('fl-oz-us') , 1);
};

tests['Tbs-us to Tbs-us'] = function () {
  assert.strictEqual( convert(140).from('Tbs-us').to('Tbs-us') , 140);
};

// When converting between systems, expect < 0.1% error
tests['tsp-us to l'] = function () {
  var expected = 1.75
    , actual = convert(355).from('tsp-us').to('l');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['in3 to l'] = function () {
  var expected = 0.0163871
    , actual = convert(1).from('in3').to('l');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['in3-us to fl-oz-us'] = function () {
  var expected = 0.554113
    , actual = convert(1).from('in3-us').to('fl-oz-us');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['m3 to yd3-us'] = function () {
  var expected = 1.30795
    , actual = convert(1).from('m3').to('yd3-us');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['ft3 to cm3'] = function () {
  var expected = 28316.8
    , actual = convert(1).from('ft3').to('cm3');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['pnt-us to ml'] = function () {
  var expected = 2366
    , actual = convert(5).from('pnt-us').to('ml');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['ml to gal-us'] = function () {
  var expected = 2.609
    , actual = convert(9876).from('ml').to('gal-us');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['gal-us to l'] = function () {
  var expected = 37.85
    , actual = convert(10).from('gal-us').to('l');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['l to gal'] = function () {
  var expected = 0.21996924830
      , actual = convert(1).from('l').to('gal');
  assert.ok( percentError(expected, actual) < ACCURACY
      , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['fl-oz-us to fl-oz'] = function () {
  var expected = 1.04084
      , actual = convert(1).from('fl-oz-us').to('fl-oz');
  assert.ok( percentError(expected, actual) < ACCURACY
      , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['gal-us to gal'] = function () {
  var expected = 0.832674
      , actual = convert(1).from('gal-us').to('gal');
  assert.ok( percentError(expected, actual) < ACCURACY
      , 'Expected: ' + expected +', Actual: ' + actual);
};

module.exports = tests;
