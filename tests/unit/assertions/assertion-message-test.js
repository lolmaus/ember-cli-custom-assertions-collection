import assertionMessage from '../../helpers/assertion-message';
import { module, test } from 'qunit';

module('Unit | Assertion Helper | assertionMessage');

test('it works', function(assert) {
  assert.equal( assertionMessage('foo'),        'foo',      'one arg' );
  assert.equal( assertionMessage('foo', 'bar'), 'bar: foo', 'two args' );
});
