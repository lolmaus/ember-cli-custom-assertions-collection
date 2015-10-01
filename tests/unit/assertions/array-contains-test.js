import { module } from 'qunit';
import Ember      from 'ember';

import arrayContains, {testArrayContains} from '../../assertions/array-contains';
import testAssertion                      from '../../helpers/test-assertion';

module('Unit | Assertion | arrayContains');

const obj = {};
const testCases = [
  { args: [ ['foo', 'bar'],          'foo'          ], result: true },
  { args: [ Ember.A(['Ember', 'A']), 'Ember'        ], result: true },
  { args: [ ['foo', 'bar'],          'bar'          ], result: true },
  { args: [ ['foo'],                 'foo'          ], result: true },
  { args: [ [null],                  null           ], result: true },
  { args: [ [obj],                   obj            ], result: true,  desc: 'Object by reference' },

  { args: [ ['foo', 'bar'],          'baz'          ], result: false },
  { args: [ ['foo', 'bar'],          ['bar']        ], result: false },
  { args: [ Ember.A(['Ember', 'A']), Ember.A(['A']) ], result: false },
  { args: [ Ember.A(['Ember', 'A']), 'B'            ], result: false },
  { args: [ ['foo'],                 'bar'          ], result: false },
  { args: [ [{}],                    {}             ], result: false, desc: 'Object by literal' }
];

testAssertion(testCases, testArrayContains, arrayContains, "Expected arg1 to contain arg2.");
