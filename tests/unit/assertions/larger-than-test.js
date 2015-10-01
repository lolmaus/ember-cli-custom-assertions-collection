import { module } from 'qunit';

import largerThan    from '../../assertions/larger-than';
import testAssertion from '../../helpers/test-assertion';

module('Unit | Assertion | largerThan');

const testCases = [
  { args: [ 2,                      1                      ], result: true},
  { args: [ 1,                      2                      ], result: false},
  { args: [ 2,                      2                      ], result: false},
  { args: [ new Date('2014-01-01'), new Date('2015-01-01') ], result: false},
  { args: [ new Date('2015-01-01'), new Date('2014-01-01') ], result: true},
  { args: [ new Date('2015-01-01'), new Date('2015-01-01') ], result: false}
];

testAssertion(
  testCases,
  null,
  largerThan,
  "Expected arg1 to be larger."
);
