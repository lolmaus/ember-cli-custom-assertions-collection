import pushAssertion from '../helpers/push-assertion';

export default pushAssertion(
  (arg1, arg2) => arg1 > arg2,
  "Expected arg1 to be larger."
)
