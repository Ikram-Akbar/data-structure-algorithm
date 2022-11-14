//Fizz buzz
/*
 Divisible by 3 = fizz
 Divisible by 5 = buzz
 Divisible by both = fizzBuzz
 
 */
// range 25;
let n = 25;
const fizzBuzz = (n) => {
 temp = "";
 for (let i = 1; i <= n; i++) {
  if (i % 3 == 0) {
   temp += "Fizz";
  }
  if (i % 5 == 0) {
   temp += "Buzz";
  }
  if (temp == "") {
   temp += i;
  }
 console.log(temp);
};
fizzBuzz(n);
