const isPalindrome = require("../src/tdd");

// --- true cases ---
test("madam ==> true", () => {
  const result = isPalindrome("madam");
  expect(result).toBe(true);
});

test("121 ==> true", () => {
  const result = isPalindrome(121);
  expect(result).toBe(true);
});

test("-121 ==> true", () => {
  const result = isPalindrome(-121);
  expect(result).toBe(true);
});

test("a ==> true", () => {
  const result = isPalindrome("a");
  expect(result).toBe(true);
});

test(" 11*11 ==> true", () => {
  const result = isPalindrome(11 * 11);
  expect(result).toBe(true);
});

test("'   ava      ' ==> true", () => {
  const result = isPalindrome("     ava     ");
  expect(result).toBe(true);
});

//---- false cases ----

test("abc ==> false", () => {
  const result = isPalindrome("abc");
  expect(result).toBe(false);
});

test("123 ==> false", () => {
  const result = isPalindrome(123);
  expect(result).toBe(false);
});

test("[121,122] ==> false", () => {
  const result = isPalindrome(121, 122);
  expect(result).toBe(false);
});

test(" '' ==> false", () => {
  const result = isPalindrome("");
  expect(result).toBe(false);
});

test("{} ==> false", () => {
  const result = isPalindrome({});
  expect(result).toBe(false);
});

test("[] ==> false", () => {
  const result = isPalindrome([]);
  expect(result).toBe(false);
});

test("()=>{} ==> false", () => {
  const result = isPalindrome(() => {});
  expect(result).toBe(false);
});

test(" undefined ==> false", () => {
  const result = isPalindrome(undefined);
  expect(result).toBe(false);
});

test(" null ==> false", () => {
  const result = isPalindrome(null);
  expect(result).toBe(false);
});

test(" boolean ==> false", () => {
  const result = isPalindrome(true);
  expect(result).toBe(false);
});
