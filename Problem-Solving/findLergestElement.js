// 8.  Find the largest item from a given list.
//sol:-
function largest(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      return (max = arr[i]);
    }
  }
  return max;
}
let arr = [100000, 324, 45, 9000, 8];
console.log("Largest in given array is " + largest(arr));

//another solution : -
let arr1 = [10, 3, 45, 9, 8];
let max = arr1[0];
for (let i = 1; i < arr1.length; i++) {
  if (arr1[i] > max) {
    max = arr1[i];
  }
}
console.log(max);
