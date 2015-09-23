import numbersAlmostEqual from '../../assertions/numbers-almost-equal';
import { module, test } from 'qunit';
import sinon from 'sinon';

module('Unit | Assertion | numbersAlmostEqual');

const testCases = [
  { actual: 1 - 1/3, expected: 2/3,                  result: true},
  { actual: 1 - 1/3, expected: 2/3 + 0.0000000001,   result: false},
  { actual: 1 - 1/3, expected: 2/3 - 0.0000000001,   result: false},
  { actual: 0.9,     expected: 1,                    result: false},
  { actual: 0.9,     expected: 1 - 0.1,              result: true}
];

test('it works', function(assert) {
  testCases.forEach((testCase, i) => {
    const obj = { push: sinon.spy() };
    const testName = `${i}: ${testCase.actual}, ${testCase.expected}`;

    // No message
    numbersAlmostEqual.call(obj, null, testCase.actual, testCase.expected);
    assert.ok(obj.push.calledOnce, `${testName} calledOnce`);
    assert.ok(
      obj.push.calledWithExactly(testCase.result, testCase.actual, testCase.expected, "Expected to be almost equal."),
      `${testName} calledWithExactly, no message`
    );

    // Swapped actual and expected
    numbersAlmostEqual.call(obj, null, testCase.expected, testCase.actual);
    assert.ok(obj.push.calledTwice, `${testName} (reverse) calledTwice`);
    assert.ok(
      obj.push.calledWithExactly(testCase.result, testCase.expected, testCase.actual, "Expected to be almost equal."),
      `${testName} (Swapped actual and expected) calledWithExactly, no message`
    );

    // With message
    numbersAlmostEqual.call(obj, null, testCase.actual, testCase.expected, 'Foo');
    assert.ok(
      obj.push.calledWithExactly(testCase.result, testCase.actual, testCase.expected, "Foo: Expected to be almost equal."),
      `${testName} calledWithExactly, with message`
    );
  });

});
