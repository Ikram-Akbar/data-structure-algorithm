const myWord = " I love   Bangladesh form the my core of Heartaaaaa    ";
const countLength = (s) => {
  let length = 0;
  const result = s.trim();
  console.log(result);

  for (let i = 0; i < result.length; i++) {
    if (result[i] == " ") {
      length = 0;
    } else {
      length++;
    }
    }
    return length;
};
console.log(countLength(myWord));
