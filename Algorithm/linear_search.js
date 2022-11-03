// linear search in js :-

/* 

Understanding Linear Search
The Linear Search algorithm is a set of instructions to traverse the given list and check every element in the list until we find whatever element we are looking for. The technical term for the element we are looking for is - index.

The algorithm goes from the leftmost (or starting) element and continues searching until it either finds the desired element or goes through all the elements in the list.

If the element is found, we will return the position (or index) of the element. If the element we are looking for doesn't exist in the list, we generally return -1.



*/
// Implement the algorithm:-

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let index = 1;
function linearSearch(arr, index) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === index) {
      return i;
    }
  }
  return -1;
}
const findOut = linearSearch(arr, index);
console.log(findOut);

// another: -
let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let position = 5;
const linearSearch2 = (data, position) => {
  let result = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i] === position) {
      console.log(i);
      result.push(i);
    }
    }
    if (!result) {
        return -1
    }
};
const myFunc = linearSearch2(data, position);
console.log(myFunc);