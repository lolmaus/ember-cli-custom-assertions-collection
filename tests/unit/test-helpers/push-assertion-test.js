import pushAssertion from '../../helpers/push-assertion';
import { module, test } from 'qunit';
import sinon from 'sinon';
import _ from 'npm:lodash';

module('Unit | Test Helper | pushAssertion');


test("One argument, no message, no context", function(assert){
  let m;
  const assertion    = sinon.spy(function assertion(appContext, foo) {
    _.noop(appContext, foo); // Making JSHint happy
    return 'Result';
  });
  const result = pushAssertion(assertion, "AssertionMessage");

  sinon.assert.notCalled(assertion);

  m = "The value returned by pushAssertion should be a function";
  assert.ok(_.isFunction(result), m);

  let   push = sinon.spy();
  const context = { push: push };
  result.call(context, "App context", "Arg1");

  sinon.assert.calledOnce(assertion);
  sinon.assert.calledWithExactly(assertion, "Arg1");
  sinon.assert.calledOnce(push);
  sinon.assert.calledWithExactly(push, "Result", "Arg1", undefined, 'AssertionMessage');
});


test("One argument, no message, with context", function(assert){
  let m;
  const assertion    = sinon.spy(function assertion(appContext, foo) {
    _.noop(appContext, foo); // Making JSHint happy
    return 'Result';
  });
  const result = pushAssertion(assertion, "AssertionMessage", true);

  sinon.assert.notCalled(assertion);

  m = "The value returned by pushAssertion should be a function";
  assert.ok(_.isFunction(result), m);

  let   push = sinon.spy();
  const context = { push: push };
  result.call(context, "App context", "Arg1");

  sinon.assert.calledOnce(assertion);
  sinon.assert.calledWithExactly(assertion, "App context", "Arg1");
  sinon.assert.calledOnce(push);
  sinon.assert.calledWithExactly(push, "Result", "Arg1", undefined, 'AssertionMessage');
});


test("One argument, with message, no context", function(assert){
  let m;
  const assertion    = sinon.spy(function assertion(foo) {
    _.noop(foo); // Making JSHint happy
    return 'Result';
  });
  const result = pushAssertion(assertion, "AssertionMessage");

  sinon.assert.notCalled(assertion);

  m = "The value returned by pushAssertion should be a function";
  assert.ok(_.isFunction(result), m);

  let   push = sinon.spy();
  const context = { push: push };
  result.call(context, "App context", "Arg1", "UserMsg");

  sinon.assert.calledOnce(assertion);
  sinon.assert.calledWithExactly(assertion, "Arg1");
  sinon.assert.calledOnce(push);
  sinon.assert.calledWithExactly(push, "Result", "Arg1", undefined, 'UserMsg: AssertionMessage');
});


test("One argument, with message, with context", function(assert){
  let m;
  const assertion    = sinon.spy(function assertion(appContext, foo) {
    _.noop(appContext, foo); // Making JSHint happy
    return 'Result';
  });
  const result = pushAssertion(assertion, "AssertionMessage", true);

  sinon.assert.notCalled(assertion);

  m = "The value returned by pushAssertion should be a function";
  assert.ok(_.isFunction(result), m);

  let   push = sinon.spy();
  const context = { push: push };
  result.call(context, "App context", "Arg1", "UserMsg");

  sinon.assert.calledOnce(assertion);
  sinon.assert.calledWithExactly(assertion, "App context", "Arg1");
  sinon.assert.calledOnce(push);
  sinon.assert.calledWithExactly(push, "Result", "Arg1", undefined, 'UserMsg: AssertionMessage');
});


test("Two arguments, no message, no context", function(assert){
  let m;
  const assertion    = sinon.spy(function assertion(foo, bar) {
    _.noop(foo, bar); // Making JSHint happy
    return 'Result';
  });
  const result = pushAssertion(assertion, "AssertionMessage");

  sinon.assert.notCalled(assertion);

  m = "The value returned by pushAssertion should be a function";
  assert.ok(_.isFunction(result), m);

  let   push = sinon.spy();
  const context = { push: push };
  result.call(context, "App context", "Arg1", "Arg2");

  sinon.assert.calledOnce(assertion);
  sinon.assert.calledWithExactly(assertion, "Arg1", "Arg2");
  sinon.assert.calledOnce(push);
  sinon.assert.calledWithExactly(push, "Result", "Arg1", "Arg2", 'AssertionMessage');
});


test("Two arguments, no message, with context", function(assert){
  let m;
  const assertion    = sinon.spy(function assertion(appContext, foo, bar) {
    _.noop(appContext, foo, bar); // Making JSHint happy
    return 'Result';
  });
  const result = pushAssertion(assertion, "AssertionMessage", true);

  sinon.assert.notCalled(assertion);

  m = "The value returned by pushAssertion should be a function";
  assert.ok(_.isFunction(result), m);

  let   push = sinon.spy();
  const context = { push: push };
  result.call(context, "App context", "Arg1", "Arg2");

  sinon.assert.calledOnce(assertion);
  sinon.assert.calledWithExactly(assertion, "App context", "Arg1", "Arg2");
  sinon.assert.calledOnce(push);
  sinon.assert.calledWithExactly(push, "Result", "Arg1", "Arg2", 'AssertionMessage');
});


test("Two arguments, with message, no context", function(assert){
  let m;
  const assertion    = sinon.spy(function assertion(foo, bar) {
    _.noop(foo, bar); // Making JSHint happy
    return 'Result';
  });
  const result = pushAssertion(assertion, "AssertionMessage");

  sinon.assert.notCalled(assertion);

  m = "The value returned by pushAssertion should be a function";
  assert.ok(_.isFunction(result), m);

  let   push = sinon.spy();
  const context = { push: push };
  result.call(context, "App context", "Arg1", "Arg2", "UserMsg");

  sinon.assert.calledOnce(assertion);
  sinon.assert.calledWithExactly(assertion, "Arg1", "Arg2");
  sinon.assert.calledOnce(push);
  sinon.assert.calledWithExactly(push, "Result", "Arg1", "Arg2", 'UserMsg: AssertionMessage');
});


test("Two arguments, with message, with context", function(assert){
  let m;
  const assertion    = sinon.spy(function assertion(appContext, foo, bar) {
    _.noop(foo, bar); // Making JSHint happy
    return 'Result';
  });
  const result = pushAssertion(assertion, "AssertionMessage", true);

  sinon.assert.notCalled(assertion);

  m = "The value returned by pushAssertion should be a function";
  assert.ok(_.isFunction(result), m);

  let   push = sinon.spy();
  const context = { push: push };
  result.call(context, "App context", "Arg1", "Arg2", "UserMsg");

  sinon.assert.calledOnce(assertion);
  sinon.assert.calledWithExactly(assertion, "App context", "Arg1", "Arg2");
  sinon.assert.calledOnce(push);
  sinon.assert.calledWithExactly(push, "Result", "Arg1", "Arg2", 'UserMsg: AssertionMessage');
});


test("Three arguments, no message, no context", function(assert){
  let m;
  const assertion    = sinon.spy(function assertion(foo, bar, baz) {
    _.noop(foo, bar, baz); // Making JSHint happy
    return 'Result';
  });
  const result = pushAssertion(assertion, "AssertionMessage");

  sinon.assert.notCalled(assertion);

  m = "The value returned by pushAssertion should be a function";
  assert.ok(_.isFunction(result), m);

  let   push = sinon.spy();
  const context = { push: push };
  result.call(context, "App context", "Arg1", "Arg2", "Arg3");

  sinon.assert.calledOnce(assertion);
  sinon.assert.calledWithExactly(assertion, "Arg1", "Arg2", "Arg3");
  sinon.assert.calledOnce(push);
  sinon.assert.calledWithExactly(push, "Result", "Arg1", "Arg2", 'AssertionMessage');
});


test("Three arguments, no message, with context", function(assert){
  let m;
  const assertion    = sinon.spy(function assertion(appContext, foo, bar, baz) {
    _.noop(appContext, foo, bar, baz); // Making JSHint happy
    return 'Result';
  });
  const result = pushAssertion(assertion, "AssertionMessage", true);

  sinon.assert.notCalled(assertion);

  m = "The value returned by pushAssertion should be a function";
  assert.ok(_.isFunction(result), m);

  let   push = sinon.spy();
  const context = { push: push };
  result.call(context, "App context", "Arg1", "Arg2", "Arg3");

  sinon.assert.calledOnce(assertion);
  sinon.assert.calledWithExactly(assertion, "App context", "Arg1", "Arg2", "Arg3");
  sinon.assert.calledOnce(push);
  sinon.assert.calledWithExactly(push, "Result", "Arg1", "Arg2", 'AssertionMessage');
});


test("Three arguments, with message, no context", function(assert){
  let m;
  const assertion    = sinon.spy(function assertion(foo, bar, baz) {
    _.noop(foo, bar, baz); // Making JSHint happy
    return 'Result';
  });
  const result = pushAssertion(assertion, "AssertionMessage");

  sinon.assert.notCalled(assertion);

  m = "The value returned by pushAssertion should be a function";
  assert.ok(_.isFunction(result), m);

  let   push = sinon.spy();
  const context = { push: push };
  result.call(context, "App context", "Arg1", "Arg2", "Arg3", "UserMsg");

  sinon.assert.calledOnce(assertion);
  sinon.assert.calledWithExactly(assertion, "Arg1", "Arg2", "Arg3");
  sinon.assert.calledOnce(push);
  sinon.assert.calledWithExactly(push, "Result", "Arg1", "Arg2", 'UserMsg: AssertionMessage');
});


test("Three arguments, with message, with context", function(assert){
  let m;
  const assertion    = sinon.spy(function assertion(appContext, foo, bar, baz) {
    _.noop(appContext, foo, bar, baz); // Making JSHint happy
    return 'Result';
  });
  const result = pushAssertion(assertion, "AssertionMessage", true);

  sinon.assert.notCalled(assertion);

  m = "The value returned by pushAssertion should be a function";
  assert.ok(_.isFunction(result), m);

  let   push = sinon.spy();
  const context = { push: push };
  result.call(context, "App context", "Arg1", "Arg2", "Arg3", "UserMsg");

  sinon.assert.calledOnce(assertion);
  sinon.assert.calledWithExactly(assertion, "App context", "Arg1", "Arg2", "Arg3");
  sinon.assert.calledOnce(push);
  sinon.assert.calledWithExactly(push, "Result", "Arg1", "Arg2", 'UserMsg: AssertionMessage');
});
