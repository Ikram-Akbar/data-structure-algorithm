// //Q1. Make a function in javascript which will take following data as input and expected output data will be as follows:
// //Input Data
// const inputData = [
//   {
//     id: 1,
//     name: "Fruit",
//   },
//   {
//     id: 2,
//     name: "Apple",
//     parent: 1,
//   },
//   {
//     id: 3,
//     name: "Orange",
//     parent: 1,
//   },
//   {
//     id: 4,
//     name: "Banana",
//     parent: 1,
//   },
//   {
//     id: 5,
//     name: "Berry",
//     parent: 1,
//   },
//   {
//     id: 6,
//     name: "Drink",
//   },
//   {
//     id: 7,
//     name: "Water",
//     parent: 6,
//   },
//   {
//     id: 8,
//     name: "Lemonade",
//     parent: 6,
//   },
//   {
//     id: 9,
//     name: "Tea",
//     parent: 6,
//   },
//   {
//     id: 10,
//     name: "Soup",
//   },
// ];


// /*

// { id: 1, name: 'Fruit' }
// { id: 2, name: 'Apple', parent: 1 }
// { id: 3, name: 'Orange', parent: 1 }
// { id: 4, name: 'Banana', parent: 1 }
// { id: 5, name: 'Berry', parent: 1 }
// { id: 6, name: 'Drink' }
// { id: 7, name: 'Water', parent: 6 }
// { id: 8, name: 'Lemonade', parent: 6 }
// { id: 9, name: 'Tea', parent: 6 }
// { id: 10, name: 'Soup' }
// */


// // inputData.forEach((value) => {
// //     // console.log(value.parent);
// //     if (value.id == value.parent) {
        
        
// //     }
// // })
// // console.log(inputData);

// var newData=inputData.filter(i=> !i.parent).map(i=>{
// let children=inputData.filter(c=> c.parent == i.id);
// return {...i,children}
// });

// console.log(newData)

























const inputData = [
  {
    id: 1,
    name: "Fruit",
  },
  {
    id: 2,
    name: "Apple",
    parent: 1,
  },
  {
    id: 3,
    name: "Orange",
    parent: 1,
  },
  {
    id: 4,
    name: "Banana",
    parent: 1,
  },
  {
    id: 5,
    name: "Berry",
    parent: 1,
  },
  {
    id: 6,
    name: "Drink",
  },
  {
    id: 7,
    name: "Water",
    parent: 6,
  },
  {
    id: 8,
    name: "Lemonade",
    parent: 6,
  },
  {
    id: 9,
    name: "Tea",
    parent: 6,
  },
  {
    id: 10,
    name: "Soup",
  },
];

var newData = inputData
  .filter((i) => !i.parent)
  .map((i) => {
    let children = inputData.filter((c) => c.parent == i.id);
    return { ...i, children };
  });

console.log(newData);