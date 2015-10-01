import { module } from 'qunit';
import Ember      from 'ember';

import arraysSameMembersOrdered, {testArraysSameMembersOrdered} from '../../assertions/arrays-same-members-ordered';
import testAssertion                                            from '../../helpers/test-assertion';

module('Unit | Assertion | arraysSameMembersOrdered');

const testCases = [
  { args: [ ['foo', 'bar'],          ['foo', 'bar'] ],          result: true },
  { args: [ ['foo'],                 ['foo'] ],                 result: true },
  { args: [ [],                      [] ],                      result: true },

  { args: [ ['foo', 'bar'],          ['bar'] ],                 result: false },
  { args: [ ['foo', 'bar'],          ['bar', 'baz'] ],          result: false },
  { args: [ ['foo', 'bar'],          ['bar', 'foo'] ],          result: false },
  { args: [ Ember.A(['Ember', 'A']), Ember.A(['Ember']) ],      result: false },
  { args: [ Ember.A(['Ember', 'A']), Ember.A(['Ember', 'B']) ], result: false },
  { args: [ Ember.A(['Ember', 'A']), Ember.A(['A', 'Ember']) ], result: false },
  { args: [ ['foo'],                 ['bar'] ],                 result: false }
];

testAssertion(testCases, testArraysSameMembersOrdered, arraysSameMembersOrdered, "Expected arrays to have same members in same order.");
