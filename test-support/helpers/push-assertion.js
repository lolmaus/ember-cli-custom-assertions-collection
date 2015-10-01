import assertionMessage from './assertion-message';

export default function pushAssertion(assertion, message, doesAssertionNeedContext) {
  return function() {

    const _args         = [].slice.call(arguments);
    const firstArgPosition = doesAssertionNeedContext ? 0 : 1;
    const nextAfterLastArgPosition = assertion.length + firstArgPosition;
    const args         = _args.slice(firstArgPosition, nextAfterLastArgPosition);
    const result       = assertion(...args);
    const userMessage  = arguments[nextAfterLastArgPosition];
    const finalMessage = assertionMessage(message, userMessage);

    this.push(result, args[doesAssertionNeedContext ? 1 : 0], args[doesAssertionNeedContext ? 2 : 1], finalMessage);
  }
}
