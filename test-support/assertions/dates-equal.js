import pushAssertion from '../helpers/push-assertion';

export function testDatesEqual(date1, date2) {
  return date1.getTime() === date2.getTime();
}

export default pushAssertion (
  testDatesEqual,
  'Expected dates to be equal.'
)
