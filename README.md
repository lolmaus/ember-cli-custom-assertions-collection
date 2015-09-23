[![Travis](https://img.shields.io/travis/lolmaus/ember-cli-custom-assertions-collection.svg?style=flat-square)](https://travis-ci.org/lolmaus/ember-cli-custom-assertions-collection)
[![npm](https://img.shields.io/npm/v/ember-cli-custom-assertions-collection.svg?style=flat-square)](https://www.npmjs.com/package/ember-cli-custom-assertions-collection)
[![npm](https://img.shields.io/npm/dm/ember-cli-custom-assertions-collection.svg?style=flat-square)](https://www.npmjs.com/package/ember-cli-custom-assertions-collection)

# ember-cli-custom-assertions-collection

Turns out it's impossible to effectively use Chai in QUnit. Chai throws exceptions on failed Chai assertions, which are tracked by QUnit, though with a poor message. But Chai is unable to report successful assertions to QUnit. If you compose a QUnit test entirely from Chai assertions, QUnit will fail due to no assertions.

This is really unfortunate because Chai has a decent assertions library, and QUnit's library is very basic and often not enough.

This Ember addon aims to provide missing assertions and many more.

Assertions themselves are properly unit-tested.


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

#### `isFalse( obj [, message] )`

Checks if `obj` is exactly `false`.

```js
assert.isFalse( false )   // pass
assert.isFalse( 1 === 2 ) // pass
assert.isFalse( null )    // fail
```



#### `arraysSameMembers( arr1, arr2 [, message] )`

Checks if both arrays have identical content, in any order. Members are compared via `===`.

```js
assert.arraysSameMembers( ['foo', 'bar'], ['bar', 'foo'] ) // pass
assert.arraysSameMembers( ['foo', 'bar'], ['bar', 'baz'] ) // fail
assert.arraysSameMembers( ['foo', 'bar'], ['bar']        ) // fail
```

#### `arraysSameMembersOrdered( arr1, arr2 [, message] )`

Checks if both arrays identical content, in identical order. Members are compared via `===`.

```js
assert.arraysSameMembersOrdered( ['foo', 'bar'], ['foo', 'bar'] ) // pass
assert.arraysSameMembersOrdered( ['foo', 'bar'], ['bar', 'foo'] ) // fail
assert.arraysSameMembersOrdered( ['foo', 'bar'], ['bar', 'baz'] ) // fail
assert.arraysSameMembersOrdered( ['foo', 'bar'], ['bar']        ) // fail
```


#### `numbersAlmostEqual( number1, number2 [, precision = 6] [, message] )`

You know how `1 - 0.9 === 0.1` is `false` in JS? That's because in JS float-point operations aren't precise.

Use this to compare them loosely:

```js
assert.numbersAlmostEqual( 1 - 0.9, 1                     ) // pass
assert.numbersAlmostEqual( 1 - 1/3, 2/3                   ) // pass
assert.numbersAlmostEqual( 1,       0.00001               ) // fail
assert.numbersAlmostEqual( 1,       0.00001, precision: 4 ) // pass
```

This assertion uses a method [suggested](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/EPSILON#Testing_equality) by MDN. Not sure whether it'll work correctly every time.



## Plans

If this thing catches up, we could document it with YUIDOC.

All suggestion are welcome in issues and in [Ember Slack community](https://ember-community-slackin.herokuapp.com/).

Oh, and don't forget to star the addon on Github! :beers"



## Credit

Created in [Firecracker](http://firecracker.me).
