import _ from 'npm:lodash';
import pushAssertion from '../helpers/push-assertion';

export function testNumbersAlmostEqual(actual, expected, precision) {
  if (!_.isNumber(precision)) {
    precision = 6;
  }

  return Math.abs(actual - expected) <= (1 /  Math.pow(10, precision));
}

export default pushAssertion(
  testNumbersAlmostEqual,
  "Expected numbers to be almost equal."
)
