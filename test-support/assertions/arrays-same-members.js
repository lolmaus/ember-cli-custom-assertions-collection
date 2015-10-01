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
