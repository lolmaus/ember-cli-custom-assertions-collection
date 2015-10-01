import { test } from 'qunit';
import sinon    from 'sinon';
import _        from 'npm:lodash';

export default function testAssertion (testCases, asserter, assertionPusher, message, appContext) {
  testCases.forEach((testCase) => {
    const testName = testCase.args.map(arg => `"${JSON.stringify(arg)}"`).join(', ');

    test(testName, function(assert) {

      if (asserter) {
        const m = "Testing the asserter";
        assert.equal(asserter.apply(null, testCase.args), testCase.result, m);
      }


      // Testing assertion pusher, no user message

      let spy   = sinon.spy();
      const obj = { push: spy };
      const firstArg  = appContext ? testCase.args[1] : testCase.args[0];
      const secondArg = appContext ? testCase.args[2] : testCase.args[1];

      // Padding the args array using the testCase.argsLength value
      let args = [].concat(testCase.args);
      if (testCase.argsLength) {
        args = _.merge( Array.apply(null, Array(testCase.argsLength)), args );
      }

      assertionPusher.call(obj, appContext, ...args);

      sinon.assert.calledOnce(spy);
      sinon.assert.calledWithExactly(spy, testCase.result, firstArg, secondArg, message);

      // If individual test case description is provided, repeat the previous assertion
      // with the description (it's impossible to pass a message into sinon.assert)
      if (testCase.desc) {
        const m = `Description of the previous assertion: ${testCase.desc}`;
        assert.ok(spy.calledWithExactly(testCase.result, firstArg, secondArg, message), m);
      }


      // Testing assertion pusher, with user message

      spy = obj.push = sinon.spy();
      assertionPusher.call(obj, appContext, ...args, 'Foo');

      sinon.assert.calledOnce(spy);
      sinon.assert.calledWithExactly(spy, testCase.result, firstArg, secondArg, `Foo: ${message}`);

      // If individual test case description is provided, repeat the previous assertion
      // with the description (it's impossible to pass a message into sinon.assert)
      if (testCase.desc) {
        const m = `Description of the previous assertion: ${testCase.desc}`;
        assert.ok(spy.calledWithExactly(testCase.result, firstArg, secondArg, `Foo: ${message}`), m);
      }
    });
  });
}
