import pushAssertion from '../helpers/push-assertion';

export default pushAssertion(
  (testee) => testee === false,
  "Expected to be false."
)
