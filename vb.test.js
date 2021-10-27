const validBraces = require('./vb');

test('Is it a string?', () => {
  expect(validBraces("()")).toBe(true);
});