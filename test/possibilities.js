var convert = require('../lib')
  , assert = require('assert-diff')
  , tests = {};

assert.options.strict = true;

tests['l possibilities'] = function () {
  var actual = convert().from('l').possibilities()
    , expected = [ 'mm3', 'cm3', 'ml', 'cl', 'dl', 'l', 'kl', 'm3', 'km3', 'krm', 'tsk', 'msk', 'kkp', 'glas', 'kanna', 'tsp', 'Tbs', 'in3', 'fl-oz', 'cup', 'pnt', 'qt', 'gal', 'ft3', 'yd3-us', 'tsp-us', 'Tbs-us', 'in3-us', 'fl-oz-us', 'cup-us', 'pnt-us', 'qt-us', 'gal-us', 'ft3-us' ];
  assert.deepEqual(actual.sort(), expected.sort());
};

tests['kg possibilities'] = function () {
  var actual = convert().from('kg').possibilities()
    , expected = [ 'mcg', 'mg', 'g', 'kg', 'oz', 'lb', 't', 'st', 'lt' ];
  assert.deepEqual(actual.sort(), expected.sort());
};

tests['m possibilities'] = function () {
  var actual = convert().from('m').possibilities()
    , expected = [ 'mm', 'cm', 'm', 'km', 'in', 'yd', 'ft-us', 'ft', 'fathom', 'mi', 'nMi' ];
  assert.deepEqual(actual.sort(), expected.sort());
};

tests['each possibilities'] = function () {
  var actual = convert().possibilities('each')
    , expected = [ 'ea', 'dz' ];
  assert.deepEqual(actual.sort(), expected.sort());
};

tests['mass possibilities'] = function () {
  var actual = convert().possibilities('mass')
    , expected = [ 'mcg', 'mg', 'g', 'kg', 'oz', 'lb', 't', 'st', 'lt' ];
  assert.deepEqual(actual.sort(), expected.sort());
};

tests['volume possibilities'] = function () {
  var actual = convert().possibilities('volume')
    , expected = [ 'mm3', 'cm3', 'ml', 'cl', 'dl', 'l', 'kl', 'm3', 'km3', 'krm', 'tsk', 'msk', 'kkp', 'glas', 'kanna', 'tsp', 'Tbs', 'in3', 'fl-oz', 'cup', 'pnt', 'qt', 'gal', 'ft3', 'yd3-us', 'tsp-us', 'Tbs-us', 'in3-us', 'fl-oz-us', 'cup-us', 'pnt-us', 'qt-us', 'gal-us', 'ft3-us' ];
  assert.deepEqual(actual.sort(), expected.sort());
};

tests['volume flow rate possibilities'] = function () {
  var actual = convert().possibilities('volumeFlowRate')
    , expected = [ 'mm3/s', 'cm3/s', 'ml/s', 'cl/s', 'dl/s', 'l/s', 'l/min', 'l/h', 'kl/s', 'kl/min', 'kl/h', 'm3/s', 'm3/min', 'm3/h', 'km3/s', 'tsp/s', 'Tbs/s', 'in3/s', 'in3/min', 'in3/h', 'fl-oz/s', 'fl-oz/min', 'fl-oz/h', 'cup/s', 'pnt/s', 'pnt/min', 'pnt/h', 'qt/s', 'gal/s', 'gal/min', 'gal/h', 'ft3/s', 'ft3/min', 'ft3/h', 'yd3/s', 'yd3/min', 'yd3/h' ];
  assert.deepEqual(actual.sort(), expected.sort());
};

tests['length possibilities'] = function () {
  var actual = convert().possibilities('length')
    , expected = [ 'mm', 'cm', 'm', 'km', 'in', 'yd', 'ft-us', 'ft', 'fathom', 'mi', 'nMi' ];
  assert.deepEqual(actual.sort(), expected.sort());
};

tests['temperature possibilities'] = function () {
  var actual = convert().possibilities('temperature')
    , expected = ['C', 'C-', 'K', 'F', 'R'];
  assert.deepEqual(actual.sort(), expected.sort());
};

tests['time possibilities'] = function () {
  var actual = convert().possibilities('time')
    , expected = ['ns', 'mu', 'ms', 's', 'min', 'h', 'd', 'week', 'month', 'year'];
  assert.deepEqual(actual.sort(), expected.sort());
};

tests['digital possibilities'] = function() {
  var actual = convert().possibilities('digital')
    , expected = [ 'b', 'Kb', 'Mb', 'Gb', 'Tb', 'B', 'KB', 'MB', 'GB', 'TB' ];
  assert.deepEqual(actual.sort(), expected.sort());
};

tests['partsPer possibilities'] = function() {
  var actual = convert().possibilities('partsPer')
    , expected = [ 'permille', 'ppm', 'ppb', 'ppt', 'ppq' ];
  assert.deepEqual(actual.sort(), expected.sort());
};

tests['pressure possibilities'] = function() {
  var actual = convert().possibilities('pressure')
    , expected = [ 'Pa', 'kPa', 'MPa', 'hPa', 'bar', 'torr', 'psi', 'ksi'];
  assert.deepEqual(actual.sort(), expected.sort());
};

tests['speed possibilities'] = function() {
  var actual = convert().possibilities('speed')
    , expected = [ 'm/s', 'km/h', 'mi/h', 'knot', 'ft/s'];
  assert.deepEqual(actual.sort(), expected.sort());
};

tests['pace possibilities'] = function() {
  var actual = convert().possibilities('pace')
    , expected = [ 's/m', 'min/km', 'min/mi', 's/ft'];
  assert.deepEqual(actual.sort(), expected.sort())
};

tests['current possibilities'] = function() {
  var actual = convert().possibilities('current')
    , expected = [ 'A', 'mA', 'kA'];
  assert.deepEqual(actual.sort(), expected.sort());
};

tests['voltage possibilities'] = function() {
  var actual = convert().possibilities('voltage')
    , expected = [ 'V', 'mV', 'kV'];
  assert.deepEqual(actual.sort(), expected.sort());
};

tests['power possibilities'] = function() {
  var actual = convert().possibilities('power')
    , expected = [ 'W', 'mW', 'kW', 'MW', 'GW'];
  assert.deepEqual(actual.sort(), expected.sort());
};

tests['reactive power possibilities'] = function() {
  var actual = convert().possibilities('reactivePower')
    , expected = [ 'VAR', 'mVAR', 'kVAR', 'MVAR', 'GVAR'];
  assert.deepEqual(actual.sort(), expected.sort());
};

tests['apparent power possibilities'] = function() {
  var actual = convert().possibilities('apparentPower')
    , expected = [ 'VA', 'mVA', 'kVA', 'MVA', 'GVA'];
  assert.deepEqual(actual.sort(), expected.sort());
};

tests['energy possibilities'] = function() {
  var actual = convert().possibilities('energy')
    , expected = [ 'Wh', 'mWh', 'kWh', 'MWh', 'GWh', 'J', 'kJ', 'kcal'];
  assert.deepEqual(actual.sort(), expected.sort());
};

tests['reactive energy possibilities'] = function() {
  var actual = convert().possibilities('reactiveEnergy')
    , expected = [ 'VARh', 'mVARh', 'kVARh', 'MVARh', 'GVARh'];
  assert.deepEqual(actual.sort(), expected.sort());
};

tests['reactive energy possibilities'] = function() {
  var actual = convert().possibilities('frequency')
    , expected = [ 'Hz', 'mHz', 'kHz', 'MHz', 'GHz', 'THz', 'rpm', 'deg/s', 'rad/s'];
  assert.deepEqual(actual.sort(), expected.sort());
};

tests['illuminance possibilities'] = function() {
  var actual = convert().possibilities('illuminance')
    , expected = [ 'lx', 'ft-cd'];
  assert.deepEqual(actual.sort(), expected.sort());
};

tests['angle possibilities'] = function() {
  var actual = convert().possibilities('angle')
    , expected = [ 'rad', 'deg', 'grad', 'arcmin', 'arcsec'];
  assert.deepEqual(actual.sort(), expected.sort());
};

tests['charge possibilities'] = function() {
  var actual = convert().possibilities('charge')
    , expected = [ 'c', 'mC', 'μC', 'nC', 'pC'];
  assert.deepEqual(actual.sort(), expected.sort());
};

tests['force possibilities'] = function() {
  var actual = convert().possibilities('force')
    , expected = [ 'N', 'kN', 'lbf'];
  assert.deepEqual(actual.sort(), expected.sort());
};

tests['acceleration possibilities'] = function() {
  var actual = convert().possibilities('acceleration')
    , expected = [ 'g-force', 'm/s2'];
  assert.deepEqual(actual.sort(), expected.sort());
};

module.exports = tests;
