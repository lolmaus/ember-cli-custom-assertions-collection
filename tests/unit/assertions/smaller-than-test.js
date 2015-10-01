import { module } from 'qunit';

import smallerThen    from '../../assertions/smaller-than';
import testAssertion from '../../helpers/test-assertion';

module('Unit | Assertion | smallerThen');

const testCases = [
  { args: [ 2,                      1                      ], result: false},
  { args: [ 1,                      2                      ], result: true},
  { args: [ 2,                      2                      ], result: false},
  { args: [ new Date('2014-01-01'), new Date('2015-01-01') ], result: true},
  { args: [ new Date('2015-01-01'), new Date('2014-01-01') ], result: false},
  { args: [ new Date('2015-01-01'), new Date('2015-01-01') ], result: false}
];

testAssertion(
  testCases,
  null,
  smallerThen,
  "Expected arg1 to be smaller."
);
