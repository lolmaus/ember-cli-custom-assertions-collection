import pushAssertion from '../helpers/push-assertion';

export function removeWhitespace(str) {
  return str.replace(/\s+/g, '').trim()
}

export function testStringsEqualNoWhitespace(str1, str2) {
  return removeWhitespace(str1) === removeWhitespace(str2);
}

export default pushAssertion(
  testStringsEqualNoWhitespace,
  'Expected strings to be equal, whitespace not taken into account.'
)
