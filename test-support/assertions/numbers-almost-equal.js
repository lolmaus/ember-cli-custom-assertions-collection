import _ from 'npm:lodash';

export default function numbersAlmostEqual(context, actual, expected, message = "") {

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/EPSILON#Testing_equality
  const result = Math.abs(actual - expected) < Number.EPSILON;

  const finalMessage = `${message.length ? `${message}: ` : ''}Expected to be almost equal.`;

  this.push(result, actual, expected, finalMessage);
}
