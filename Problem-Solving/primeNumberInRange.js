//5. Write a program to display all prime numbers within a range.

const getPrimeNum = (lowerNum, higherNum) => {
  for (let i = lowerNum; i <= higherNum; i++) {
    let flag = 0;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        console.log(`i from the first loop : ${i}`);
        console.log(`j from the first loop : ${j}`);
        flag = 1;
        break;
      }
    }
    if (i > 1 && flag == 0) {
      console.log(i);
    }
  }
};
const lowerNum = 1;
const higherNum = 10;
const callFunc = getPrimeNum(lowerNum, higherNum);
console.log(callFunc);
