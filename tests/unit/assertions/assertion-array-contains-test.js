import arrayContains from '../../assertions/array-contains';
import { module, test } from 'qunit';
import sinon            from 'sinon';

module('Unit | Assertion | arrayContains');

test('it works', function(assert) {
  const arr = ['foo', 'bar'];
  const obj = {};


  obj.push = sinon.spy();
  arrayContains.call(obj, null, arr, 'bar');
  assert.ok(obj.push.calledOnce, 'arr should contain bar -- calledOnce');
  assert.ok(obj.push.calledWithExactly(true, arr, 'bar', "Expected to contain value."), 'arr should contain bar -- calledWithExactly');

  obj.push = sinon.spy();
  arrayContains.call(obj, null, arr, 'foo');
  assert.ok(obj.push.calledOnce, 'arr should contain foo -- calledOnce');
  assert.ok(obj.push.calledWithExactly(true, arr, 'foo', "Expected to contain value."), 'arr should contain foo -- calledWithExactly');


  obj.push = sinon.spy();
  arrayContains.call(obj, null, arr, 'baz');
  assert.ok(obj.push.calledOnce, 'arr should contain baz -- calledOnce');
  assert.notOk(obj.push.calledWithExactly(true, arr, 'baz', "Expected to contain value."), 'arr should contain baz -- calledWithExactly');
});
