import _ from 'npm:lodash';
import assertionMessage from '../helpers/assertion-message';

export function parse(str) {
  return str.replace(/\s+/g, '').trim()
}

export default function stringsEqualNoWhitespace(context, arg1, arg2, message = "") {

  const result       = parse(arg1) === parse(arg2);
  const finalMessage = assertionMessage('Expected strings to be equal, whitespace not taken into account.', message);

  this.push(result, arg1, arg2, finalMessage);

}
