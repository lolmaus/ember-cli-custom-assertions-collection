import { module } from 'qunit';

import numbersAlmostEqual, {testNumbersAlmostEqual} from '../../assertions/numbers-almost-equal';
import testAssertion                                from '../../helpers/test-assertion';

module('Unit | Assertion | numbersAlmostEqual');

const testCases = [
  { args: [ 0,  0.1,           0    ], result: true},
  { args: [ 1,  1.01,          1    ], result: true},
  { args: [ 2,  1.99,          1    ], result: true},
  { args: [ 3,  3.001,         2    ], result: true},
  { args: [ 4,  3.999,         2    ], result: true},
  { args: [ 5,  5.0001,        3    ], result: true},
  { args: [ 6,  5.9999,        3    ], result: true},
  { args: [ 7,  7.00001,       4    ], result: true},
  { args: [ 8,  7.99999,       4    ], result: true},
  { args: [ 9,  9.000001,      5    ], result: true},
  { args: [ 10, 9.999999,      5    ], result: true},
  { args: [ 11, 11.0000001,    6    ], result: true},
  { args: [ 12, 11.9999999,    6    ], result: true},
  { args: [ 11, 11.0000001,    null ], result: true, desc: 'Default precision'},
  { args: [ 12, 11.9999999,    null ], result: true, desc: 'Default precision'},
  { args: [ 13, 13.00000001,   7    ], result: true},
  { args: [ 14, 13.99999999,   7    ], result: true},
  { args: [ 15, 15.000000001,  8    ], result: true},
  { args: [ 16, 15.999999999,  8    ], result: true}
];

testAssertion(
  testCases,
  testNumbersAlmostEqual,
  numbersAlmostEqual,
  "Expected numbers to be almost equal."
);
