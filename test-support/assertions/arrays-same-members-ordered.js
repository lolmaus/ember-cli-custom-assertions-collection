import _ from 'npm:lodash';

import pushAssertion from '../helpers/push-assertion';

export function testArraysSameMembersOrdered(actual, expected) {
  return (
    actual.length === expected.length
    && _.every(actual, (value, key) => expected[key] === value)
  );
}

export default pushAssertion(
  testArraysSameMembersOrdered,
  "Expected arrays to have same members in same order."
)
