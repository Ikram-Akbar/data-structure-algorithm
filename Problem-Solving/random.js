// var arr1 = new Array(
//   {
//     name: "lang",
//     value: "English",
//   },
//   {
//     name: "age",
//     value: "18",
//   }
// );

// var arr2 = new Array(
//   {
//     name: "chiles",
//     value: "5",
//   },
//   {
//     name: "lang",
//     value: "German",
//   }
// );
// const mergedArray = [...arr1, ...arr2];
// console.log(mergedArray);






const arr1 = [
  { name: "lang", value: "English" },
  { name: "age", value: "18" },
];
const arr2 = [
  { name: "childs", value: "2" },
  { name: "lang", value: "German" },
];
const arr3 = [
  { name: "lang", value: "German" },
  { name: "age", value: "28" },
  { name: "childs", value: "5" },
];

// Convert to key value dictionary or object
const convertToKeyValueDict = (arrayObj) => {
  const val = {};
  arrayObj.forEach((ob) => {
    val[ob.name] = ob.value;
  });
  return val;
};

// update or merge array
const updateOrMerge = (a1, a2) => {
  const ob1 = convertToKeyValueDict(a1);
  const ob2 = convertToKeyValueDict(a2);
  // Note: Spread operator with objects used here
  const merged_obj = { ...ob1, ...ob2 };
  const val = Object.entries(merged_obj);
  return val.map((obj) => ({ name: obj[0], value: obj[1] }));
};

const v1 = updateOrMerge(arr1, arr2);
const v2 = updateOrMerge(v1, arr3);
console.log(`Merged array1 and array2: ${JSON.stringify(v1)} \n\n`);
console.log(`Merged above response and array3: ${JSON.stringify(v2)} \n\n`);