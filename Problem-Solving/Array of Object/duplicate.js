let data = [
  { id: 1, name: "aa" },
  { id: 2, name: "gg" },
  { id: 1, name: "yy" },
  { id: 3, name: "dd" },
  { id: 1, name: "cc" },
];
// find out the duplicate object :-

function findDuplicate(data) {
    let duplicate = [];
    let duplicateId = 1;
    for (let i = 0; i < data.length; i++){
        console.log(data[i].id);
        const id = data[i].id;
        if (id == duplicateId) {
            duplicate.push(data[i])
        }
    }

    return duplicate;
}
let result = findDuplicate(data);
console.log(result);


