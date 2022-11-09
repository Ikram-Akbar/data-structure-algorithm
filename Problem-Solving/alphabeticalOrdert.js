//12. Write a JavaScript function that returns a passed string with letters in alphabetical order.

function sortAlphabet(str) {
  const arr = str.split("");
  const result = arr.sort().join("");
  return result;
}
console.log(sortAlphabet("edcba"));