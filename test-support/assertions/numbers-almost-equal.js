import _ from 'npm:lodash';
import assertionMessage from '../helpers/assertion-message';

export default function numbersAlmostEqual(context, actual, expected, precision, message = "") {

  if (_.isString(precision)) {
    message = precision;
  }

  if (!_.isNumber(precision)) {
    precision = 6;
  }

  const result       = Math.abs(actual - expected) <= (1 /  Math.pow(10, precision));
  const finalMessage = assertionMessage('Expected to be almost equal.', message);

  this.push(result, actual, expected, finalMessage);

}
