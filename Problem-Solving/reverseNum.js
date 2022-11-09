//6. Write a function that Reverse a given integer number.
//sol:-
function reversedNum(num) {
  return (
    parseFloat(num.toString().split("").reverse().join("")) * Math.sign(num)
  );
}

const num = 654321;
const result = reversedNum(num);
console.log(result);
