import isFalse from '../../assertions/is-false';
import { module, test } from 'qunit';
import sinon from 'sinon';

module('Unit | Assertion | isFalse');

const testCases = [
  { arg: false,     expected: true },
  { arg: null,      expected: false },
  { arg: undefined, expected: false },
  { arg: {},        expected: false },
  { arg: 0,         expected: false },
  { arg: true,      expected: false },
  { arg: [],        expected: false },
  { arg: "",        expected: false }
];

testCases.forEach((testCase) => {
  test(JSON.stringify(testCase.arg), function(assert) {
    const obj = { push: sinon.spy() };

    isFalse.call(obj, null, testCase.arg);
    assert.ok(obj.push.calledOnce, "calledOnce");
    assert.ok(
      obj.push.calledWithExactly(testCase.expected, testCase.arg, false, "Expected to be false."),
      "calledWithExactly, no message"
    );

    isFalse.call(obj, null, testCase.arg, 'Foo');
    assert.ok(
      obj.push.calledWithExactly(testCase.expected,testCase.arg, false, "Foo: Expected to be false."),
      "calledWithExactly, with message"
    );
  });

});
