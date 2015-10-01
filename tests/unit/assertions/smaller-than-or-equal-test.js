import { module } from 'qunit';

import smallerThanOrEqual from '../../assertions/smaller-than-or-equal';
import testAssertion     from '../../helpers/test-assertion';

module('Unit | Assertion | largerThanOrEqual');

const testCases = [
  { args: [ 2,                      1                       ], result: false},
  { args: [ 1,                      2                       ], result: true},
  { args: [ 2,                      2                       ], result: true},
  { args: [ new Date('2014-01-01'), new Date('2015-01-01')  ], result: true},
  { args: [ new Date('2015-01-01'), new Date('2014-01-01')  ], result: false},
  { args: [ new Date('2015-01-01'), new Date('2015-01-01')  ], result: true}
];

testAssertion(
  testCases,
  null,
  smallerThanOrEqual,
  "Expected arg1 to be smaller or equal."
);
