import _ from 'npm:lodash';
import assertionMessage from '../helpers/assertion-message';

export default function arraysSameMembers(context, actual, expected, message = "") {

  const result =
    actual.length === expected.length
    && _.every(actual, (value) => _.contains(expected, value));

  const finalMessage = assertionMessage("Expected to have same members.", message);

  this.push(result, actual, expected, finalMessage);
}
