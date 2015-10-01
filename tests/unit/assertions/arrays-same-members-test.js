import { module } from 'qunit';
import Ember      from 'ember';

import arraysSameMembers, {testArraysSameMembers} from '../../assertions/arrays-same-members';
import testAssertion                              from '../../helpers/test-assertion';

module('Unit | Assertion | arraysSameMembers');

const obj = {};
const testCases = [
  { args: [ ['foo', 'bar'],            ['foo', 'bar'] ],            result: true },
  { args: [ Ember.A(['Ember', 'A']),   Ember.A(['Ember', 'A']) ],   result: true },
  { args: [ ['foo', 'bar'],            ['bar', 'foo'] ],            result: true },
  { args: [ ['foo'],                   ['foo'] ],                   result: true },
  { args: [ [],                        [] ],                        result: true },
  { args: [ [obj],                     [obj] ],                     result: true,  desc: "Arrays contain the same object instance" },

  { args: [ ['foo', 'bar'],            ['bar'] ],                   result: false },
  { args: [ ['foo', 'bar'],            ['bar', 'baz'] ],            result: false },
  { args: [ Ember.A(['Ember', 'A']),   Ember.A(['Ember']) ],        result: false },
  { args: [ Ember.A(['Ember', 'A']),   Ember.A(['Ember', 'B']) ],   result: false },
  { args: [ ['foo'],                   ['bar'] ],                   result: false },
  { args: [ [{}],                      [{}] ],                      result: false, desc: "Arrays contain different object instances" }
];

testAssertion(
  testCases,
  testArraysSameMembers,
  arraysSameMembers,
  "Expected arrays to have same members."
);
