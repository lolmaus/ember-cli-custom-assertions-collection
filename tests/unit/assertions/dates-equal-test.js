import { module } from 'qunit';

import datesEqual, { testDatesEqual } from '../../assertions/dates-equal';
import testAssertion                  from '../../helpers/test-assertion';

module('Unit | Assertion | datesEqual');

const testCases = [
  { args: [ new Date('2015-01-01'), new Date('2015-01-01') ], result: true},
  { args: [ new Date('2015-01-01'), new Date('2015-01-02') ], result: false}
];

testAssertion(
  testCases,
  testDatesEqual,
  datesEqual,
  "Expected dates to be equal."
);
