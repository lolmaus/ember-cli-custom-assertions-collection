import assertionMessage from '../helpers/assertion-message';

export default function isFalse(context, testee, message = "") {
  const result       = testee === false;
  const finalMessage = assertionMessage("Expected to be false.", message);
  this.push(result, testee, false, finalMessage);
}
