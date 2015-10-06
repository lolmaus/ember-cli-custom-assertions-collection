[![Travis](https://travis-ci.org/lolmaus/ember-cli-custom-assertions-collection.svg)](https://travis-ci.org/lolmaus/ember-cli-custom-assertions-collection)
[![npm](https://img.shields.io/npm/v/ember-cli-custom-assertions-collection.svg)](https://www.npmjs.com/package/ember-cli-custom-assertions-collection)
[![npm](https://img.shields.io/npm/dm/ember-cli-custom-assertions-collection.svg)](https://www.npmjs.com/package/ember-cli-custom-assertions-collection)
[![Ember Observer Score](http://emberobserver.com/badges/ember-cli-custom-assertions-collection.svg)](http://emberobserver.com/addons/ember-cli-custom-assertions-collection)

# ember-cli-custom-assertions-collection

**An ever growing library of assertions for QUnit in Ember**

Turns out it's impossible to effectively use Chai in QUnit! :(

Chai is only able to throw exceptions on failed Chai assertions. Those exceptions will fail QUnit tests with poor messages. But Chai is unable to report successful assertions to QUnit. If you compose a QUnit test entirely from Chai assertions, QUnit will fail due to no assertions.

This is really unfortunate because Chai has a decent assertions library, and QUnit's library is very basic and often not enough.

This Ember addon aims to provide a rich collection of assertions that let you stop longing for Chai.

Assertions themselves are [properly unit-tested](http://ember-cli-custom-assertions-collection.divshot.io/tests/?nocontainer).

:sparkles:**New in v1.0.0!**:sparkles: Creating new assertions and testing them is now effortless. See the [Contributing](#contributing) section.


## Work in progress

This addon is WIP and is being populated with assertions as they are needed.

Feel free to join. Find yourself doing clumsy stuff in tests? PR a custom assertion!


## Dependencies

This addon depends on the following addons:

* [ember-cli-custom-assertions](https://github.com/dockyard/ember-cli-custom-assertions)
* [ember-sinon](https://github.com/csantero/ember-sinon)
* [ember-browserify](https://github.com/ef4/ember-browserify)

And plain npm packages:

* [lodash](https://www.npmjs.com/package/lodash)

If you find it not working due to something of the above missing, try installing that into your app. And file an issue here!


## Usage

1. Install [ember-cli-custom-assertions](https://github.com/dockyard/ember-cli-custom-assertions) and wrap your head around it.
2. Install this addon: `ember cli install ember-cli-custom-assertions-collection`.
3. If a test needs a custom assertion, configure it to use `ember-cli-custom-assertions`.
4. Use any assertion from this collection, e. g. `assert.isFalse(foo, 'foo should be false')`.


## The assertions

* #### isFalse

  ```
  isFalse( obj [, message] )
  ```

  Checks if `obj` is exactly `false`.

  ```js
  assert.isFalse( false )   // pass
  assert.isFalse( 1 === 2 ) // pass
  assert.isFalse( null )    // fail
  ```

* #### arrayContains

  ```
  arrayContains( arr, value [, message])
  ```
  
  Checks if array contains value
  
  ```js
  assert.arrayContains(['foo', 'bar'], 'bar')  // pass
  assert.arrayContains(['foo', 'bar'], 'quux') // fail
  ```

* #### arraysSameMembers

  ```
  arraysSameMembers( arr1, arr2 [, message] )
  ```
  
  Checks if both arrays have identical content, in any order.
  
  Members are compared via `===`, so it's safe to compare Ember models: will not crash due to circular references like `propEqual` does.
  
  ```js
  assert.arraysSameMembers( ['foo', 'bar'], ['bar', 'foo'] ) // pass
  assert.arraysSameMembers( ['foo', 'bar'], ['bar', 'baz'] ) // fail
  assert.arraysSameMembers( ['foo', 'bar'], ['bar']        ) // fail
  ```
  

* #### arraysSameMembersOrdered

  ```
  arraysSameMembersOrdered( arr1, arr2 [, message] )
  ```
  
  Checks if both arrays identical content, in identical order. Members are compared via `===`.
  
  ```js
  assert.arraysSameMembersOrdered( ['foo', 'bar'], ['foo', 'bar'] ) // pass
  assert.arraysSameMembersOrdered( ['foo', 'bar'], ['bar', 'foo'] ) // fail
  assert.arraysSameMembersOrdered( ['foo', 'bar'], ['bar', 'baz'] ) // fail
  assert.arraysSameMembersOrdered( ['foo', 'bar'], ['bar']        ) // fail
  ```


* #### numbersAlmostEqual

  ```
  numbersAlmostEqual( number1, number2 [, precision = 6] [, message] )
  ```
  
  You know how `1 - 0.9 === 0.1` is `false` in JS? That's because in JS float-point operations aren't precise.
  
  Use this to compare them loosely:
  
  ```js
  assert.numbersAlmostEqual( 1 - 0.9, 1                     ) // pass
  assert.numbersAlmostEqual( 1 - 1/3, 2/3                   ) // pass
  assert.numbersAlmostEqual( 1,       0.00001               ) // fail
  assert.numbersAlmostEqual( 1,       0.00001, precision: 4 ) // pass
  ```
  
  This assertion uses a method [suggested](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/EPSILON#Testing_equality) by MDN. Not sure whether it'll work correctly every time.


* #### largerThan, largerThanOrEqual, smallerThan, smallerThanOrEqual

  ```
  largerThan(arg1, arg2 [, message])
  ```
  
  Compares the two arguments using `>`, `>=`, `<` and `<=` respectively.
  
  ```js
  assert.smallerThan( 1, 2 ) // pass
  ```


* #### datesEqual

  ```
  datesEqual(date1, date2 [, message])
  ```
  
  So dates are objects and two distinct objects aren't equal even if they represent identical dates.
  
  This assertion compares the two dates by [converting them to unix timestamp integers and comparing those](http://stackoverflow.com/a/15470428/901944).
  
  ```js
  assert.datesEqual( new Date('2015-01-01'), new Date('2015-01-01') ) // pass
  ```


* #### stringsEqualNoWhitespace

  ```
  stringsEqualNoWhitespace(str1, str2 [, message])
  ```
  
  Compares strings with all whitespace removed.
  
  Useful for comparing `jQuery().text()`.
  
  ```js
  const html = "<div> <div>Foo</div> <div>Bar</div> </div>";
  assert.datesEqual( $(element).text(), "FooBar" ) // pass
  ```
  
  
## Contributing

Since v1.0.0, it's very easy to create new assertions with the `pushAssertion` helper and test them with `testAssertion` helpers.

Those helpers save you a ton of typing and non-trivial testing.

Note that the helpers assume that in your assertion you only want to do one [`.push()`](https://api.qunitjs.com/push/) with only one message.

If you would like to push several reports per assertion or you want to customize the message depending on how the assertion failed, then you'll have to push and test manually.


### Creating custom assertions

To create a custom assertion, you put it into

    test-support/assertions/<assertion-name>.js

folder of this addon.



### pushAssertion

The `pushAssertion` helper accepts three arguments: 

    pushAssertion(testCallback, message [, doesTheAssertionAcceptAppContext])
    
`testCallback` should be a callback that is used to determine the success or failure of an assertion. It should accept one or more arguments and return a boolean.

Note that all arguments should be provided explicitly in the callback's footprint: neither `arguments` manipulation nor `...rest` is allowed.

`message` is a string that is displayed when an assertion fails.
    
`doesTheAssertionAcceptAppContext` is a boolean used to indicate whether this assertion is used for acceptance testing and thus requires access to `application` from Ember's `startApp` helper.



#### Asserting a trivial thing

Let's start with something easy. Say, you want to replace this:

```js
assert.equal(testee, null);
```

with a slightly more elegant assertion:

```js
assert.isNull(testee)
```

In this case, your `test-support/assertions/is-null.js` should look like this:

```js
import pushAssertion from '../helpers/push-assertion';

export default pushAssertion(
  (testee) => testee === null,
  "Expected to be false."
)
```

All you need to do is to call the `pushAssertion` helper, passing a test callback and a failure message!

The resulting assertion will have the folling footprint:

    assert.isNull(testee [, userMessage])
    
The `userMessage`, if provided, will be concatenated with the failure message provided to `pushAssertion`.

If your callback footprint has more arguments:

```
export default pushAssertion(
  (arg1, arg2, arg3, arg4) => { /* ... */ },
  "Expected to be false."
)
```

Then the resulting assertion's footprint will match:

    assert.myAssertion(arg1, arg2, arg3, arg4 [, userMessage])
    
If you want some arguments to be optional, don't forget to check whether the last argument is a string (for `userMessage`) or something different (your optional arg).


#### Delegating the assertion to Lodash or another library

You should be tempted to optimize the above code by using Lodash:

```js
import _ from 'npm:lodash';
import pushAssertion from '../helpers/push-assertion';

export default pushAssertion(
  _.isNull,
  "Expected to be false."
)
```

Be carefull with that! That particular one should work fine, but you might run into a problem with other Lodash methods.

The problem is that the `testAssertion` helper examines the test callback's footprint to retrieve the number of arguments. And a Lodash method might have optional arguments, which will affect your assertion's footprint

For example, `_.includes` [is documented](https://lodash.com/docs#includes) to have the following footprint:

    _.includes(collection, target, [fromIndex=0])
    
Thus, if you do this: 
  
```js
export default pushAssertion(
  _.includes,
  "Expected the collection to include argument."
)
```

Then you should expect you assertion to have the following footprint:

    assert.includes(collection, target [, fromIndex=0] [, message] )
    
And you'll end up using is like this:

```js
assert.includes(importantArray, 1, null, "importantArray should contain 1!");
```

But that's not the case! Because `_.includes` footprint [actually contains](https://github.com/lodash/lodash/blob/3.10.1-npm/index.js#L6550) more arguments than documented:

```js
function includes(collection, target, fromIndex, guard) {
```

And you'll end up using the assertion like this:

```js
assert.includes(importantArray, 1, null, null, "importantArray should contain 1!");
```

To avoid that, don't define your assertions by passing Lodash functions directly. Instead, wrap it into a callback and explicitly define arguments:

```js
export default pushAssertion(
  (arr, value) => _.includes(arr, value),
  "Expected the collection to include argument."
)
```

#### Exposing a complex testing callback to be used in code

The testing callback of your custom assertion can be useful not only in testing but also in your app's code too.

You can expose your testing callback to be imported without all the assertion crust. Consider this example:

```js
import _ from 'npm:lodash';

import pushAssertion from '../helpers/push-assertion';

export function testArraysSameMembers(actual, expected) {
  return (
    actual.length === expected.length
    && _.every(actual, (value) => _.contains(expected, value))
  );
}

export default pushAssertion(
  testArraysSameMembers,
  "Expected arrays to have same members."
)
```

If in your app's code you need to compare two arrays, you'll be able to do:

```js
import Ember from 'ember';

import { testArraysSameMembers } from `my-app/tests/assertions/arrays-same-members';

export Ember.Object.extend({
  array1: null, // These two arrays
  array2: null, // will be populated externally
  
  arraysMatch: Ember.computed(function () {
    testArraysSameMembers(this.get('array1'), this.get('array2'));
  })
})
```

Also, you'll be able to test the testing callback separately from the assertion stuff.


### Testing your assertions

![YO DAWG, I HERD YOU LIKE TESTING](http://i.imgur.com/IfLfCas.jpg)

#### testAssertion

The `testAssertion` helper is used to automatically test your assertions.

It accepts the following arguments:

    testAssertion(testCases, testingCallback, assertionPusher, message [, appContext])
    
`testCases` is an array of test case objects. Here's an example of a test case:

```
{
   args:       [ 'foo', 'bar', 'baz' ], // (array) arguments that will be passed into the testing callback
   result:     true,                    // (boolean) what result to expect
   desc:       "testing three strings", // (string, optional) Lets similar-looking test cases appear different in test results
   argsLength: 4                        // (int, optional) To test optional arguments
}
```

`testingCallback` is your testing callback to be tested outside the assertion crust. If you did not expose the testing callback, pass `null`.

`assertionPusher` is what the `pushAssertion` helper returns when you build your custom assertion.

`message` is the failure message that your assertion should display in case of failure.

`appContext` (optional) is used for acceptance tests. That's the application object returned by the Ember's `startApp` callback.

Note that if you pass `appContext`, then it will be passed as the first argument to your testing callback. Update your callaback and its test cases accordingly:

```js
(application, foo, bar, baz) => { return /* ... */ }
```

```js
{ args: [ application, 'foo', 'bar', 'baz' ], result: true }
```

If your test callback has optional argument(s) and in your test case `args` contains fewer arguments that the callback's footprint, then you have to provide `argsLength` with a total number of arguments. See the 
`numbers-almost-equal` [assertion](https://github.com/lolmaus/ember-cli-custom-assertions-collection/blob/generation-2/test-support/assertions/numbers-almost-equal.js#L5-L7) and [test](https://github.com/lolmaus/ember-cli-custom-assertions-collection/blob/generation-2/tests/unit/assertions/numbers-almost-equal-test.js#L22-23) for an example.


#### Testing a trivial assertion that does not have a testing callback exposed


```js
import { module } from 'qunit';

// The magic helper!
import testAssertion from '../../helpers/test-assertion';

// Your assertion
import isFalse       from '../../assertions/is-false';

module('Unit | Assertion | isFalse');

const testCases = [
  { args: [ false ],     result: true },
  { args: [ null ],      result: false },
  /* ... */
];

testAssertion(
  testCases,               // The array of test cases, defined above
  null,                    // We didn't expose a testing callback to test
  isFalse,                 // Your custom assertion
  "Expected to be false."  // What failure message it is supposed to display
);
```


#### Testing an assertion that has a testing callback exposed

```js
import { module } from 'qunit';
import Ember      from 'ember';

// Science bitch!
import testAssertion                              from '../../helpers/test-assertion';

// Here's how you import your assertion and your testing callback.
import arraysSameMembers, {testArraysSameMembers} from '../../assertions/arrays-same-members';

module('Unit | Assertion | arraysSameMembers');

const obj = {};
const testCases = [
  { args: [ ['foo', 'bar'], ['foo', 'bar'] ], result: true },
  { args: [ ['foo', 'bar'], ['bar', 'baz'] ], result: false },
  { args: [ [obj],          [obj] ],          result: true,  desc: "Arrays contain the same object instance" },
  { args: [ [{}],           [{}] ],           result: false, desc: "Arrays contain different object instances" },
];

testAssertion(
  testCases,                              // Pass the test cases array
  testArraysSameMembers,                  // Then pass the testing callback, it will be tested separately
  arraysSameMembers,                      // Then pass the assertion
  "Expected arrays to have same members." // Finally, the message
);
```

Note that in case of failure, the third and fourth test scenarios will produce identical QUnit output. In order to distinguish them, we're providing a description.


#### Testing an assertion that uses application context

TBD.




## Plans

If this thing catches up, we could document it with YUIDOC.

Any suggestion are welcome in [issues](https://github.com/lolmaus/ember-cli-custom-assertions-collection/issues) and in [Ember Slack community](https://ember-community-slackin.herokuapp.com/). Don't be shy!

Oh, and don't forget to star the addon on Github! :beers:



## Credit

Created in [Firecracker](http://firecracker.me).
