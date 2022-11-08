// Write a function that returns the largest element in a list.

// sol:-

const largeElement = (arr) => {
  let largeNum = 0;
  for (const num of arr) {
    if (num > largeNum) largeNum = num;
  }
  return largeNum;
};
const arr = [12, 24, 24, 54, 42];
const result = largeElement(arr);
console.log(result);
