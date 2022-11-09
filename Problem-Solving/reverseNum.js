//6. Write a function that Reverse a given integer number.
//sol:-
function reversedNum(num) {
  return (
    parseFloat(num.toString().split("").reverse().join("")) * Math.sign(num)
  );
}

const num = 9646324351;
const result = reversedNum(num);
console.log(result);

//leetcode:---
// reversed the number : leet code - 
function reverse(x) {
  if (x < 0) return -reverse(-x);

  var reversedInt = 0;

  while (x > 0) {
    var a = x % 10;
    x = Math.floor(x / 10);
    if (reversedInt >= 214748365) return 0;
    reversedInt = reversedInt * 10 + a;
  }

  return reversedInt;
}

//leetcode: ----
// find out the median : two sorted Array ---

const median = (num1, num2) => {
  let c = [...num1, ...num2].sort((num1, num2) => num1 - num2);
  const half = (c.length / 2) | 0;
  if (c.length % 2) return c[half];
  return (c[half] + c[half - 1]) / 2;
};