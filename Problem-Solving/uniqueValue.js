//[1, 0, 2, 0, 2, 4, 5] = [1,0,2,4,5]

//find out the unique value from an array :-
const demoArray = [1, 0, 2, 0, 2, 4, 5];

// using array method - filter:
const uniqueValues = demoArray.filter((val, index, arr) => {
  return arr.indexOf(val) == index;
});

console.log(uniqueValues);
// result : - [ 1, 0, 2, 4, 5 ]

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
//result :-  [1, 0, 2, 4, 5];

/* 
 [1, 0, 2, 0, 2, 4, 5] : - iterate between each element : - 
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
// ------------------------------

const newArr = [];
for (let i = 0; i < demoArray.length; i++) {
  const element = demoArray[i];
  if (!newArr.includes(element)) {
    newArr.push(element);
  }
}

console.log(newArr);

// ---------------------------------------------------------------------

let myNum = [];
for (i = 0; i < demoArray.length; i++) {
  count = 1;
  for (j = i + 1; i < demoArray.length; j++) {
    if (demoArray[i] === demoArray[j]) {
      count++;
      myNum[j] = 0;
    }
  }
  if (myNum[i] != 0) {
    myNum[i] = count;
  }
}

console.log(myNum);
