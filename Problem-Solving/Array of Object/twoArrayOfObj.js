var arr1 = [
  { name: "lang", value: "English" },
  { name: "age", value: "18" },
];
var arr2 = [
  { name: "childs", value: "5" },
  { name: "lang", value: "German" },
];

let newArr = [];
arr1.map((obj) => {
    let name = obj.name;
    if (name) {
        console.log("Name found");
    }
    // newArr.push(obj)
})
arr2.map((obj) => {
    newArr.push(obj)
})
// console.log(newArr);