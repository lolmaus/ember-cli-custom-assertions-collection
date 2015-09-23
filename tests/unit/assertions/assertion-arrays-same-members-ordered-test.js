import arraysSameMembersOrdered from '../../assertions/arrays-same-members-ordered';
import { module, test } from 'qunit';
import sinon from 'sinon';
import Ember from 'ember';

module('Unit | Assertion | arraysSameMembersOrdered');

const testCases = [
  { actual: ['foo', 'bar'],            expected: ['foo', 'bar'],            result: true },
  { actual: ['foo'],                   expected: ['foo'],                   result: true },
  { actual: [],                        expected: [],                        result: true },

  { actual: ['foo', 'bar'],            expected: ['bar'],                   result: false },
  { actual: ['foo', 'bar'],            expected: ['bar', 'baz'],            result: false },
  { actual: ['foo', 'bar'],            expected: ['bar', 'foo'],            result: false },
  { actual: Ember.A(['Ember', 'A']),   expected: Ember.A(['Ember']),        result: false },
  { actual: Ember.A(['Ember', 'A']),   expected: Ember.A(['Ember', 'B']),   result: false },
  { actual: Ember.A(['Ember', 'A']),   expected: Ember.A(['A', 'Ember']),   result: false },
  { actual: ['foo'],                   expected: ['bar'],                   result: false }
];

testCases.forEach((testCase) => {
  test(`"${JSON.stringify(testCase.actual)}", "${JSON.stringify(testCase.expected)}"`, function(assert) {
    const obj = { push: sinon.spy() };

    arraysSameMembersOrdered.call(obj, null, testCase.actual, testCase.expected);
    assert.ok(obj.push.calledOnce, "calledOnce");
    assert.ok(obj.push.calledWithExactly(testCase.result, testCase.actual,testCase.expected, "Expected to have same members."), "calledWithExactly, no message");

    arraysSameMembersOrdered.call(obj, null, testCase.actual, testCase.expected, 'Foo');
    assert.ok(obj.push.calledWithExactly(testCase.result, testCase.actual,testCase.expected, "Foo: Expected to have same members."), "calledWithExactly, with message");
  });

});
