// alphabet array concatenation:
let array1 = ["a", "b", "c"];
let array2 = ["f", "e", "d"];

const newArray = array1.concat(array2);
// console.log(newArray);

// numeric Array:-
let num1 = [111, 222, 333];
let num2 = [666, 555, 444];
const numsArray = num1.concat(num2);
// console.log(numsArray);

// mixed Array :
let first = [true, 1, "abc", { firstName: "Ikram" }];
let second = [null];
const mixed = second.concat(first);
// console.log(mixed);

// sparse Array concat:-

let myArray = [1, null, , 24, false];
let sec = ["stupid"];
const result = sec.concat(myArray);
// console.log(result);

//non array object :-
let newObj = {};
let myChoice = (4, 5);
// const r = newObj.concat(myChoice);
// console.log(r);
// console.log(Array.prototype.concat({}, 1, 2, 3));
console.log(Array.concat({}, 1, 2, 3));