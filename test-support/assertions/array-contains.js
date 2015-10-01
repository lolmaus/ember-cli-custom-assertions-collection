import _ from 'npm:lodash';

import pushAssertion from '../helpers/push-assertion';

export default pushAssertion(
  (array, value) => _.contains(array, value),
  "Expected arg1 to contain arg2."
)
