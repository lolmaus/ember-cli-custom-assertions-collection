import _ from 'npm:lodash';

export default function arraysSameMembers(context, actual, expected, message = "") {

  const result =
    actual.length === expected.length
    && _.every(actual, (value) => _.contains(expected, value));

  const finalMessage = `${message.length ? `${message}: ` : ''}Expected to have same members.`;

  this.push(result, actual, expected, finalMessage);
}
