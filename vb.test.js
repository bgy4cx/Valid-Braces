const {validBraces, guardians} = require('./vb'); 


test('Is it a string?', () => {
  expect(guardians("()")).toBe(true);
});

test('Is it a string?', () => {
  expect(guardians(1)).toBe(false);
});

test('Is it not empty?', () => {
  expect(guardians("")).toBe(false);
});

test('Are them valid chars?', () => {
  expect(guardians("{a}")).toBe(false);
});

test('Are them valid chars?', () => {
  expect(guardians("{}")).toBe(true);
});

test('Is it valid order?', () => {
  expect(validBraces("{[()]}")).toBe(true);
});

test('Is it valid order?', () => {
  expect(validBraces("){}(")).toBe(false);
});

test('Is it valid order?', () => {
  expect(validBraces("{[()}]")).toBe(false);
});

test('Is it valid order?', () => {
  expect(validBraces("({})[({})]")).toBe(true);
});