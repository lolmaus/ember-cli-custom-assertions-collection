import datesEqual from '../../assertions/dates-equal';
import { module, test } from 'qunit';
import sinon from 'sinon';

module('Unit | Assertion | datesEqual');

const testCases = [
  {arg1: new Date('2015-01-01'), arg2: new Date('2015-01-01'), result: true},
  {arg1: new Date('2015-01-01'), arg2: new Date('2015-01-02'), result: false}
];

test('it works', function(assert) {
  testCases.forEach((testCase, i) => {
    const obj = {};
    const testName = `${i}: ${testCase.arg1}, ${testCase.arg2}`;

    // No message
    obj.push = sinon.spy();
    datesEqual.call(obj, null, testCase.arg1, testCase.arg2);
    assert.ok(obj.push.calledOnce, `${testName} calledOnce, no message`);
    assert.ok(
      obj.push.calledWithExactly(testCase.result, testCase.arg1, testCase.arg2, "Expected dates to be equal."),
      `${testName} calledWithExactly, no message`
    );

    // With message
    obj.push = sinon.spy();
    datesEqual.call(obj, null, testCase.arg1, testCase.arg2, 'Bar');
    assert.ok(obj.push.calledOnce, `${testName} calledOnce, with message`);
    assert.ok(
      obj.push.calledWithExactly(testCase.result, testCase.arg1, testCase.arg2, "Bar: Expected dates to be equal."),
      `${testName} calledWithExactly, with message`
    );
  });

});
