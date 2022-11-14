//Q2. Make a function in javascript which will take following data as input and will sort data based on total score:

const studentsExamScore = [
  {
    name: "Patty Colon",
    roll: "1001",
    subjects: [
      {
        name: "Match",
        score: 76,
      },
      {
        name: "Physics",
        score: 84,
      },
      {
        name: "Chemistry",
        score: 82,
      },
    ],
  },
  {
    name: "Fredrick Hubbard",
    roll: "1002",
    subjects: [
      {
        name: "Match",
        score: 86,
      },
      {
        name: "Physics",
        score: 88,
      },
      {
        name: "Chemistry",
        score: 67,
      },
    ],
  },
  {
    name: "Deanna Hogan",
    roll: "1003",
    subjects: [
      {
        name: "Match",
        score: 77,
      },
      {
        name: "Physics",
        score: 75,
      },
      {
        name: "Chemistry",
        score: 94,
      },
    ],
  },
  {
    name: "Carrie Schneider",
    roll: "1004",
    subjects: [
      {
        name: "Match",
        score: 88,
      },
      {
        name: "Physics",
        score: 83,
      },
      {
        name: "Chemistry",
        score: 65,
      },
    ],
  },
];

//sol:--
function addToTotalScore(data) {
  data.forEach((element) => {
    let subjectsNum = element.subjects.reduce((a, c) => (a = a + c.score), 0);
    element.totalMarks = subjectsNum;
  });
  data.sort((a, b) => b.totalMarks - a.totalMarks);
  return data;
}
console.log(addToTotalScore(studentsExamScore));

// const newArry = [];
// function sortedStudents(data) {
//   let totalScors = 0;
//   let newObj = {};
//   let subArray = [];
//   data.forEach((student) => {
//     student.subjects.forEach((sub) => {
//       totalScors += sub.score;
//       subArray.push(sub);
//     });
//     newObj = { name: student.name, roll: student.roll, totalScors: totalScors };
//     newObj.subjects = subArray;
//     newArry.push(newObj);
//     totalScors = 0;
//   });
//   newArry.sort((a, b) => b.totalScors - a.totalScors);
//   console.log(newArry);
// }

// sortedStudents(studentsExamScore);

// const myResult = (studentsExamScore) => {
//   const result = [];
//   for (let i = 0; i < studentsExamScore; i++) {
//     result = [...result,
//       {
//       name: studentsExamScore[i].name,
//     }]
//   }
//   return result;
// };

// console.log(myResult(studentsExamScore));
