import arraysSameMembers from '../../assertions/arrays-same-members';
import { module, test } from 'qunit';
import sinon from 'sinon';
import Ember from 'ember';

module('Unit | Assertion | arraysSameMembers');

const testCases = [
  { actual: ['foo', 'bar'],            expected: ['foo', 'bar'],            result: true },
  { actual: Ember.A(['Ember', 'A']),   expected: Ember.A(['Ember', 'A']),   result: true },
  { actual: ['foo', 'bar'],            expected: ['bar', 'foo'],            result: true },
  { actual: ['foo'],                   expected: ['foo'],                   result: true },
  { actual: [],                        expected: [],                        result: true },

  { actual: ['foo', 'bar'],            expected: ['bar'],                   result: false },
  { actual: ['foo', 'bar'],            expected: ['bar', 'baz'],            result: false },
  { actual: Ember.A(['Ember', 'A']),   expected: Ember.A(['Ember']),        result: false },
  { actual: Ember.A(['Ember', 'A']),   expected: Ember.A(['Ember', 'B']),   result: false },
  { actual: ['foo'],                   expected: ['bar'],                   result: false }
];

testCases.forEach((testCase) => {
  test(`"${JSON.stringify(testCase.actual)}", "${JSON.stringify(testCase.expected)}"`, function(assert) {
    const obj = { push: sinon.spy() };

    arraysSameMembers.call(obj, null, testCase.actual, testCase.expected);
    assert.ok(obj.push.calledOnce, `calledOnce`);
    assert.ok(obj.push.calledWithExactly(testCase.result, testCase.actual,testCase.expected, "Expected to have same members."), `calledWithExactly, no message`);

    arraysSameMembers.call(obj, null, testCase.actual, testCase.expected, 'Foo');
    assert.ok(obj.push.calledWithExactly(testCase.result, testCase.actual,testCase.expected, "Foo: Expected to have same members."), `calledWithExactly, with message`);
  });
});
