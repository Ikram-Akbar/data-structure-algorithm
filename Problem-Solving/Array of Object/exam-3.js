//Q3. Make a function which will accept following two arrays inputData1, inputData2 and will return an array as follows in outputSteps.

const inputData1 = [
  {
    stepId: 8,
    stepName: "Survey",
    stepCode: "SCSUR",
    isCompleted: true,
  },
  {
    stepId: 9,
    stepName: "Quotation",
    stepCode: "SCQUO",
    isCompleted: true,
  },
  {
    stepId: 10,
    stepName: "Review",
    stepCode: "SCREV",
    isCompleted: true,
  },
  {
    stepId: 11,
    stepName: "Installer",
    stepCode: "SCINS",
    isCompleted: false,
  },
  {
    stepId: 12,
    stepName: "Materials",
    stepCode: "SCMAT",
    isCompleted: false,
  },
  {
    stepId: 13,
    stepName: "Schedule",
    stepCode: "SCSCH",
    isCompleted: false,
  },
  {
    stepId: 14,
    stepName: "Budget",
    stepCode: "SCBUD",
    isCompleted: false,
  },
  {
    stepId: 15,
    stepName: "Estimate",
    stepCode: "SCEST",
    isCompleted: false,
  },
];

const inputData2 = [
  {
    url: "survey",
    stepCode: "SUR",
  },
  {
    url: "quotation",
    stepCode: "QUO",
  },
  {
    url: "review",
    stepCode: "REV",
  },
  {
    url: "installation",
    stepCode: "INS",
  },
  {
    url: "materials",
    stepCode: "MAT",
  },
  {
    url: "schedule",
    stepCode: "SCH",
  },
  {
    url: "budjet",
    stepCode: "BUD",
  },
];

// sol:-

// let arr3 = inputData1.map((val) => {
//   // console.log(val);

// })
// const demoData2 = inputData2.forEach((ele) => {
//   return ele;

//  });
//  console.log(demoData2);

// const newArr = inputData1.map((item) => {
//     const data = inputData2.filter((ele) => ele.url == item.stepName)
//     return {...item, data}
// })
// console.log(newArr);

// const newArr = inputData1.map(({ stepName, stepCode, ...rest }) => {
//   console.log(rest)
// })

// let outputSteps = [];
// inputData1.forEach((val) => {
//   outputSteps.push({
//     ...inputData1, ...(inputData2.find((url) => {
//      return url.url === inputData1[i].stepName
//     }))
//   })
// })
// console.log(outputSteps);
// let outputSteps = [];
// inputData1.forEach((val) => {
//  outputSteps.push({...inputData1, ...inputData2})
// })
// console.log(outputSteps);

// let newArr = [];
// inputData2.forEach((item) => {
//   const inputData1Item = inputData1.find((data) => {
//     data === item.stepCode
//   })
//   if (inputData1Item) {
//     newArr.push(...item, ...inputData1Item)
//   }
// })
// console.log(newArr);

const output = (inputData1, inputData2) => {
  let outputSteps = [];
  for (let i = 0; i < inputData1.length; i++) {
    outputSteps = [
      ...outputSteps,
      {
        stepId: inputData1[i].stepId,
        url: inputData2[i] ? inputData2[i].url : null,
        stepCode: inputData1[i].stepCode.substr(
          inputData1[i].stepCode.length - 3
        ),
        completed: inputData1[i].isCompleted,
      },
    ];
  }
  return outputSteps;
};
console.log(output(inputData1, inputData2));
