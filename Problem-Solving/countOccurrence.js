// Find the total occurrences of an element in a JavaScript

const demoArray = [1, 0, 2, 0, 2, 4, 5];
let count =[] ;
// for (let i = 0; i < demoArray.length; i++){
//     const element = demoArray[i];
//     if (count[element]) {
//         count[element] +=1;
//     }
//     else {
//         count[element] = 1;
//     }
// }
// console.log(count);
//{ '0': 2, '1': 1, '2': 2, '4': 1, '5': 1 }


for (let i = 0; i < demoArray.length; i++){
    const ele = demoArray[i];
    count[ele] = count[ele] ? count[ele] + 1 : 1;
}
console.log(count);