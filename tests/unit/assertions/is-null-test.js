import { module } from 'qunit';

import isNull       from '../../assertions/is-null';
import testAssertion from '../../helpers/test-assertion';

module('Unit | Assertion | isNull');

const testCases = [
  { args: [ false ],     result: false },
  { args: [ null ],      result: true },
  { args: [ undefined ], result: false },
  { args: [ {} ],        result: false },
  { args: [ 0 ],         result: false },
  { args: [ true ],      result: false },
  { args: [ [] ],        result: false },
  { args: [ "" ],        result: false }
];

testAssertion(
  testCases,
  null,
  isNull,
  "Expected to be false."
);
