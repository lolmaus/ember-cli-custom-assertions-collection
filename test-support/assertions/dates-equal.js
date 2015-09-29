import _ from 'npm:lodash';
import assertionMessage from '../helpers/assertion-message';

export default function datesEqual(context, arg1, arg2, message = "") {

  const result       = arg1.getTime() === arg2.getTime();
  const finalMessage = assertionMessage('Expected dates to be equal.', message);

  this.push(result, arg1, arg2, finalMessage);

}
