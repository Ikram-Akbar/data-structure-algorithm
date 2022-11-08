// 2. Write a function that reverses a list, preferably in place.

const reverse = (arr) => {
  let reverseArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    const element = arr[i];
    reverseArray.push(element);
  }
  return reverseArray;
};
const myArr = [5, 8, 2, 9, 5, 6, 3, 1];
const result = reverse(myArr);
console.log(result);
