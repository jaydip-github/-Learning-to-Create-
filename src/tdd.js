const isPalindrome = (...params) => {
  let input = params[0];

  if (
    params.length > 1 ||
    !input ||
    !["string", "number"].includes(typeof input)
  ) {
    return false;
  }
  if (typeof input === "number") {
    input = Math.abs(input).toString();
  }
  const reverse = input.split("").reverse().join("");
  return reverse === input;
};

module.exports = isPalindrome;
