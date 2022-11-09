// 3. Write a function that checks whether an element occurs in a list.

const checkElement = (arr, ele) => {
  let found = false;
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (ele == element) {
      found = true;
    }
  }
  if (found == true) {
    console.log(`${ele} is found in the array`);
  } else {
    console.log(`${ele} is Not found in the array`);
  }
  return `status: ${found}`;
};
let arr = [12, 5, 8, 3, 17];
let ele = 7;
const result = checkElement(arr, ele);
console.log(result);
