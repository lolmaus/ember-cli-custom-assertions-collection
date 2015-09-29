import smallerThan from '../../assertions/smaller-than';
import { module, test } from 'qunit';
import sinon from 'sinon';

module('Unit | Assertion | smallerThan');

const testCases = [
  {arg1: 2,                      arg2: 1,                      result: false},
  {arg1: 1,                      arg2: 2,                      result: true},
  {arg1: 2,                      arg2: 2,                      result: false},
  {arg1: new Date('2014-01-01'), arg2: new Date('2015-01-01'), result: true},
  {arg1: new Date('2015-01-01'), arg2: new Date('2014-01-01'), result: false},
  {arg1: new Date('2015-01-01'), arg2: new Date('2015-01-01'), result: false}
];

test('it works', function(assert) {
  testCases.forEach((testCase, i) => {
    const obj = {};
    const testName = `${i}: ${testCase.arg1}, ${testCase.arg2}`;

    // No message
    obj.push = sinon.spy();
    smallerThan.call(obj, null, testCase.arg1, testCase.arg2);
    assert.ok(obj.push.calledOnce, `${testName} calledOnce, no message`);
    assert.ok(
      obj.push.calledWithExactly(testCase.result, testCase.arg1, testCase.arg2, "Expected arg1 to be smaller."),
      `${testName} calledWithExactly, no message`
    );

    // With message
    obj.push = sinon.spy();
    smallerThan.call(obj, null, testCase.arg1, testCase.arg2, 'Bar');
    assert.ok(obj.push.calledOnce, `${testName} calledOnce, with message`);
    assert.ok(
      obj.push.calledWithExactly(testCase.result, testCase.arg1, testCase.arg2, "Bar: Expected arg1 to be smaller."),
      `${testName} calledWithExactly, with message`
    );
  });

});
