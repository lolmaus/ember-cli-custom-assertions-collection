import _ from 'npm:lodash';
import assertionMessage from '../helpers/assertion-message';

export default function arrayContains (context, array, value, message) {
  const result = _.contains(array, value);
  const finalMessage = assertionMessage("Expected to contain value.", message);
  this.push(result, array, value, finalMessage);
}
