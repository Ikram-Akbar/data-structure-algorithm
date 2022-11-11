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

function mergeInputOutput(inputData) {
    let newData = inputData.filter((val) => !val.parent);
    
  let newData1 = newData.map((element) => {

    let pId = element.id; 
    let children = inputData.filter((child) => child.parent == pId);
    console.log(children);
    
     return { ...element, children };
   }); 
    return newData1;
}
let result = mergeInputOutput(inputData);
console.log(result);