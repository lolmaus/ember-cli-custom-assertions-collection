import numbersAlmostEqual from '../../assertions/numbers-almost-equal';
import { module, test } from 'qunit';
import sinon from 'sinon';

module('Unit | Assertion | numbersAlmostEqual');

const testCases = [
  { actual: 0,  expected: 0.1,           precision: 0,  result: true},
  { actual: 1,  expected: 1.01,          precision: 1,  result: true},
  { actual: 2,  expected: 1.99,          precision: 1,  result: true},
  { actual: 3,  expected: 3.001,         precision: 2,  result: true},
  { actual: 4,  expected: 3.999,         precision: 2,  result: true},
  { actual: 5,  expected: 5.0001,        precision: 3,  result: true},
  { actual: 6,  expected: 5.9999,        precision: 3,  result: true},
  { actual: 7,  expected: 7.00001,       precision: 4,  result: true},
  { actual: 8,  expected: 7.99999,       precision: 4,  result: true},
  { actual: 9,  expected: 9.000001,      precision: 5,  result: true},
  { actual: 10, expected: 9.999999,      precision: 5,  result: true},
  { actual: 11, expected: 11.0000001,    precision: 6,  result: true},
  { actual: 12, expected: 11.9999999,    precision: 6,  result: true},
  { actual: 11, expected: 11.0000001,    /* default*/   result: true},
  { actual: 12, expected: 11.9999999,    /* default*/   result: true},
  { actual: 13, expected: 13.00000001,   precision: 7,  result: true},
  { actual: 14, expected: 13.99999999,   precision: 7,  result: true},
  { actual: 15, expected: 15.000000001,  precision: 8,  result: true},
  { actual: 16, expected: 15.999999999,  precision: 8,  result: true}
];

test('it works', function(assert) {
  testCases.forEach((testCase, i) => {
    const obj = {};
    const testName = `${i}: ${testCase.actual}, ${testCase.expected} (precision ${testCase.precision})`;

    // No message
    obj.push = sinon.spy();
    numbersAlmostEqual.call(obj, null, testCase.actual, testCase.expected, testCase.precision);
    assert.ok(obj.push.calledOnce, `${testName} calledOnce, no message`);
    assert.ok(
      obj.push.calledWithExactly(testCase.result, testCase.actual, testCase.expected, "Expected to be almost equal."),
      `${testName} calledWithExactly, no message`
    );

    // Swapped args, no message
    obj.push = sinon.spy();
    numbersAlmostEqual.call(obj, null, testCase.expected, testCase.actual, testCase.precision);
    assert.ok(obj.push.calledOnce, `${testName} (reverse) calledOnce, no message`);
    assert.ok(
      obj.push.calledWithExactly(testCase.result, testCase.expected, testCase.actual, "Expected to be almost equal."),
      `${testName} (reverse) calledWithExactly, no message`
    );

    // Failure test with precision+2, no message
    obj.push = sinon.spy();
    numbersAlmostEqual.call(obj, null, testCase.actual, testCase.expected, testCase.precision + 2);
    assert.ok(obj.push.calledOnce, `${testName} (increased precision) calledOnce`);
    assert.notOk(
      obj.push.calledWithExactly(testCase.result, testCase.actual, testCase.expected, "Expected to be almost equal."),
      `${testName} (increased precision) calledWithExactly, no message`
    );

    // With message
    obj.push = sinon.spy();
    numbersAlmostEqual.call(obj, null, testCase.actual, testCase.expected, testCase.precision, 'Foo');
    assert.ok(obj.push.calledOnce, `${testName} calledOnce, with message`);
    assert.ok(
      obj.push.calledWithExactly(testCase.result, testCase.actual, testCase.expected, "Foo: Expected to be almost equal."),
      `${testName} calledWithExactly, with message`
    );
  });

});
