//[1, 0, 2, 0, 2, 4, 5] = [1,0,2,4,5]

//find out the unique value from an array :-
const demoArray = [1, 0, 2, 0, 2, 4, 5];

// using array method - filter:
const uniqueValues = demoArray.filter((val, index, arr) => {
  return arr.indexOf(val) == index;
});
console.log(uniqueValues);

// create a loop that with return the unique copy of an array : -
let uniqueNumber = [];
for (let i = 0; i < demoArray.length; i++) {
  const element = demoArray[i];
  // console.log(element);
  if (uniqueNumber.indexOf(element) == -1) {
    uniqueNumber.push(element);
  }
}
console.log(uniqueNumber);
