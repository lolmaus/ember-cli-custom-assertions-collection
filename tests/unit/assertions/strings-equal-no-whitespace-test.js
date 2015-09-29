import stringsEqualNoWhitespace, {parse} from '../../assertions/strings-equal-no-whitespace';
import { module, test } from 'qunit';
import sinon from 'sinon';

module('Unit | Assertion | stringsEqualNoWhitespace');

test("parse", function(assert) {
  let a;
  assert.equal(parse(a = " foo "), "foo", a);
  assert.equal(parse(a = " foo"), "foo", a);
  assert.equal(parse(a = "foo "), "foo", a);
  assert.equal(parse(a = "foo"), "foo", a);
  assert.equal(parse(a = " foo bar "), "foobar", a);
  assert.equal(parse(a = " foo  bar "), "foobar", a);
  assert.equal(parse(a = " foo\nbar "), "foobar", a);
  assert.equal(parse(a = " foo \nbar "), "foobar", a);
  assert.equal(parse(a = " foo\n bar "), "foobar", a);
  assert.equal(parse(a = " foo \n bar "), "foobar", a);
  assert.equal(parse(a = " foo \n\n bar "), "foobar", a);
  assert.equal(parse(a = " foo \n \n bar "), "foobar", a);
  assert.equal(parse(a = " foo\n \nbar "), "foobar", a);
  assert.equal(parse(a = " foo\tbar "), "foobar", a);
  assert.equal(parse(a = " foo \tbar "), "foobar", a);
  assert.equal(parse(a = " foo\t bar "), "foobar", a);
  assert.equal(parse(a = " foo \t bar "), "foobar", a);
  assert.equal(parse(a = " foo \t\t bar "), "foobar", a);
  assert.equal(parse(a = " foo \t \t bar "), "foobar", a);
  assert.equal(parse(a = " foo\t \tbar "), "foobar", a);
  assert.equal(parse(a = " foo \t\n bar "), "foobar", a);
  assert.equal(parse(a = " foo \n \t bar "), "foobar", a);
  assert.equal(parse(a = " foo\t \nbar "), "foobar", a);
  assert.equal(parse(a = " \n foo\t \nbar \t "), "foobar", a);
});



const testCases = [
  {arg1: "foo bar",     arg2: " foo\nbar ",        result: true},
  {arg1: "foo bar baz", arg2: " foo \n bar \t baz",result: true},
  {arg1: "foo bar baz", arg2: " foo\tbar     baz", result: true},
  {arg1: "foo barbaz",  arg2: "foobar baz",        result: true},
  {arg1: "foo bar baz",  arg2: "foobar quux",      result: false}
];

test('it works', function(assert) {
  testCases.forEach((testCase, i) => {
    const obj = {};
    const testName = `${i}: ${testCase.arg1}, ${testCase.arg2}`;

    // No message
    obj.push = sinon.spy();
    stringsEqualNoWhitespace.call(obj, null, testCase.arg1, testCase.arg2);
    assert.ok(obj.push.calledOnce, `${testName} calledOnce, no message`);
    assert.ok(
      obj.push.calledWithExactly(testCase.result, testCase.arg1, testCase.arg2, "Expected strings to be equal, whitespace not taken into account."),
      `${testName} calledWithExactly, no message`
    );

    // With message
    obj.push = sinon.spy();
    stringsEqualNoWhitespace.call(obj, null, testCase.arg1, testCase.arg2, 'Bar');
    assert.ok(obj.push.calledOnce, `${testName} calledOnce, with message`);
    assert.ok(
      obj.push.calledWithExactly(testCase.result, testCase.arg1, testCase.arg2, "Bar: Expected strings to be equal, whitespace not taken into account."),
      `${testName} calledWithExactly, with message`
    );
  });

});
