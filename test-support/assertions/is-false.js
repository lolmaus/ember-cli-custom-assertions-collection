export default function isFalse(context, testee, message = "") {
  const result       = testee === false;
  const finalMessage = (message.length ? message + ": " : '') + "Expected to be false.";
  this.push(result, testee, false, finalMessage);
}
