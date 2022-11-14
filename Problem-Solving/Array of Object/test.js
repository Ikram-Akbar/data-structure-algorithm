const arr1 = ["name", "age", "country"];
const arr2 = ["Tom", 30, "Chile"];

const obj1 = arr1.reduce((accumulator, element, index) => {
  return { ...accumulator, [element]: arr2[index] };
}, {});
console.log(obj1);

//test arrays
var newParamArr = [1, 2, 3, 4, 5, 6];
var paramVal = ["one", "two", "three", "four", "five"];

//create an empty object to ensure it's the right type.
var obj = {};

//loop through the arrays using the first one's length since they're the same length
for (var i = 0; i < newParamArr.length; i++) {
  //set the keys and values
  //avoid dot notation for the key in this case
  //use square brackets to set the key to the value of the array element
  obj[newParamArr[i]] = paramVal[i] ? paramVal[i] : "null";
}

console.log(obj);

let one = [
  {
    fName: " xyz",
    lName: "pqr",
    age: 12,
  },
  {
    fName: " yyy",
    lName: "rrr",
    age: 15,
  },
];
let two = [
  {
    gender: "M",
  },
  {
    gender: "F",
  },
];

const oneTwo = (one, two) => {
  let newOBJ = [];
  for (let i = 0; i < one.length; i++) {
    newOBJ.push({
      fName: one[i].fName,
      lName: one[i].lName,
      gender: two[i].gender,
    });
  }
  return newOBJ;
};
console.log(oneTwo(one, two));
