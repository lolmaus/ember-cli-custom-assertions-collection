import { module } from 'qunit';

import isFalse       from '../../assertions/is-false';
import testAssertion from '../../helpers/test-assertion';

module('Unit | Assertion | isFalse');

const testCases = [
  { args: [ false ],     result: true },
  { args: [ null ],      result: false },
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
  isFalse,
  "Expected to be false."
);
