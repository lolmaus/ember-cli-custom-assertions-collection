import _ from 'npm:lodash';

import pushAssertion from '../helpers/push-assertion';

export default pushAssertion(
  _.isNull,
  "Expected to be false."
)
