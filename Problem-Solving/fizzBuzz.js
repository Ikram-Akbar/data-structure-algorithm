//Fizz buzz
/*
 Divisible by 3 = fizz
 Divisible by 5 = buzz
 Divisible by both = fizzBuzz
 */
// range 25;
let n = 25;
const fizzBuzz = (n) => {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else {
      console.log(i);
    }
  }
};
fizzBuzz(n);
