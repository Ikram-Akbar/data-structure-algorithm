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

// const addTotalScore = (data) => {
//   data.forEach((d) => {
//     d.total_score = d.subjects.reduce((p, c) => (p += c.score), 0);
//   });
//   data.sort((a, b) => b.total_score - a.total_score);

//   return data;
// };

// console.log(addTotalScore(studentsExamScore));

function addTotalScore(studentsExamScore) {
  studentsExamScore.forEach((student) => {
    let totalScore = 0;
    student.subjects.forEach((subject) => {
      totalScore += subject.score;
    });
    student.total_score = totalScore;
  });
  return studentsExamScore;
}
console.log(addTotalScore(studentsExamScore));

