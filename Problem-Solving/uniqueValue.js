//[1, 0, 2, 0, 2, 4, 5] = [1,0,2,4,5]

//find out the unique value from an array :-
const demoArray = [1, 0, 2, 0, 2, 4, 5];

// using array method - filter:
const uniqueValues = demoArray.filter((val, index, arr) => {
  return arr.indexOf(val) == index;
});
// console.log(uniqueValues);
//[ 1, 0, 2, 4, 5 ]

// create a loop that with return the unique copy of an array : -
let uniqueNumber = [];
for (let i = 0; i < demoArray.length; i++) {
  const element = demoArray[i];
  // console.log(element);
  if (uniqueNumber.indexOf(element) == -1) {
    uniqueNumber.push(element);
  }
}
// console.log(uniqueNumber);
// [1, 0, 2, 4, 5];

//  [1, 0, 2, 0, 2, 4, 5];
/* 
[
    i = 1 => j = 0;
    i = 1 => j = 2;
    i = 1 => j = 0;
    i = 1 => j = 2;
    i = 1 => j = 4;
    i = 1 => j = 5;


    i = 0 => j = 2;
    i = 0 => j = 0;
    i = 0 => j = 2;
    i = 0 => j = 4;
    i = 0 => j = 5;

    i = 2 => j = 0;
    i = 2 => j = 2;
    i = 2 => j = 4;
    i = 2 => j = 5;

    i = 0 => j = 2;
    i = 0 => j = 4;
    i = 0 => j = 5;

    i = 4 => j = 5;

    i = 5 => j = 5;


]
 */

for (let i = 0; i < demoArray.length; i++) {
  const element = demoArray[i];
  for (let j = i + 1; j < demoArray.length; j++) {
    const ele = demoArray[j];
    if (element === ele) {
      demoArray.splice(j, 1);
    }
  }
}

console.log(demoArray);
