const validBraces = require('./vb');

test('Is it a string?', () => {
  expect(validBraces("()")).toBe(true);
});

test('Is it a string?', () => {
  expect(validBraces(1)).toBe(false);
});

test('Is it empty?', () => {
  expect(validBraces("")).toBe(true);
});