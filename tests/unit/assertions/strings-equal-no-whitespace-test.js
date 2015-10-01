import stringsEqualNoWhitespace, {testStringsEqualNoWhitespace, removeWhitespace} from '../../assertions/strings-equal-no-whitespace';
import testAssertion                                                              from '../../helpers/test-assertion';
import { module, test } from 'qunit';

module('Unit | Assertion | stringsEqualNoWhitespace');

test("parse", function(assert) {
  let a;
  assert.equal(removeWhitespace(a = " foo "), "foo", a);
  assert.equal(removeWhitespace(a = " foo"), "foo", a);
  assert.equal(removeWhitespace(a = "foo "), "foo", a);
  assert.equal(removeWhitespace(a = "foo"), "foo", a);
  assert.equal(removeWhitespace(a = " foo bar "), "foobar", a);
  assert.equal(removeWhitespace(a = " foo  bar "), "foobar", a);
  assert.equal(removeWhitespace(a = " foo\nbar "), "foobar", a);
  assert.equal(removeWhitespace(a = " foo \nbar "), "foobar", a);
  assert.equal(removeWhitespace(a = " foo\n bar "), "foobar", a);
  assert.equal(removeWhitespace(a = " foo \n bar "), "foobar", a);
  assert.equal(removeWhitespace(a = " foo \n\n bar "), "foobar", a);
  assert.equal(removeWhitespace(a = " foo \n \n bar "), "foobar", a);
  assert.equal(removeWhitespace(a = " foo\n \nbar "), "foobar", a);
  assert.equal(removeWhitespace(a = " foo\tbar "), "foobar", a);
  assert.equal(removeWhitespace(a = " foo \tbar "), "foobar", a);
  assert.equal(removeWhitespace(a = " foo\t bar "), "foobar", a);
  assert.equal(removeWhitespace(a = " foo \t bar "), "foobar", a);
  assert.equal(removeWhitespace(a = " foo \t\t bar "), "foobar", a);
  assert.equal(removeWhitespace(a = " foo \t \t bar "), "foobar", a);
  assert.equal(removeWhitespace(a = " foo\t \tbar "), "foobar", a);
  assert.equal(removeWhitespace(a = " foo \t\n bar "), "foobar", a);
  assert.equal(removeWhitespace(a = " foo \n \t bar "), "foobar", a);
  assert.equal(removeWhitespace(a = " foo\t \nbar "), "foobar", a);
  assert.equal(removeWhitespace(a = " \n foo\t \nbar \t "), "foobar", a);
});


const testCases = [
  { args: [ " foo ",               "foo"                ], result: true  },
  { args: [ " foo",                "foo"                ], result: true  },
  { args: [ "foo ",                "foo"                ], result: true  },
  { args: [ "foo",                 "foo"                ], result: true  },
  { args: [ " foo bar ",           "foobar"             ], result: true  },
  { args: [ " foo  bar ",          "foobar"             ], result: true  },
  { args: [ " foo\nbar ",          "foobar"             ], result: true  },
  { args: [ " foo \nbar ",         "foobar"             ], result: true  },
  { args: [ " foo\n bar ",         "foobar"             ], result: true  },
  { args: [ " foo \n bar ",        "foobar"             ], result: true  },
  { args: [ " foo \n\n bar ",      "foobar"             ], result: true  },
  { args: [ " foo \n \n bar ",     "foobar"             ], result: true  },
  { args: [ " foo\n \nbar ",       "foobar"             ], result: true  },
  { args: [ " foo\tbar ",          "foobar"             ], result: true  },
  { args: [ " foo \tbar ",         "foobar"             ], result: true  },
  { args: [ " foo\t bar ",         "foobar"             ], result: true  },
  { args: [ " foo \t bar ",        "foobar"             ], result: true  },
  { args: [ " foo \t\t bar ",      "foobar"             ], result: true  },
  { args: [ " foo \t \t bar ",     "foobar"             ], result: true  },
  { args: [ " foo\t \tbar ",       "foobar"             ], result: true  },
  { args: [ " foo \t\n bar ",      "foobar"             ], result: true  },
  { args: [ " foo \n \t bar ",     "foobar"             ], result: true  },
  { args: [ " foo\t \nbar ",       "foobar"             ], result: true  },
  { args: [ " \n foo\t \nbar \t ", "foobar"             ], result: true  },
  { args: [ "foo bar",             " foo\nbar "         ], result: true  },
  { args: [ "foo bar baz",         " foo \n bar \t baz" ], result: true  },
  { args: [ "foo bar baz",         " foo\tbar     baz"  ], result: true  },
  { args: [ "foo barbaz",          "foobar baz"         ], result: true  },
  { args: [ "foo bar baz",         "foobar quux"        ], result: false }
];

testAssertion(
  testCases,
  testStringsEqualNoWhitespace,
  stringsEqualNoWhitespace,
  "Expected strings to be equal, whitespace not taken into account."
);
