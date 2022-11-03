/* 
1. list / property 
2. must be sorted
implement the binary search : - 


*/

let sortedArray = [11, 12, 13, 14, 15, 16, 17, 18, 19];
const binary_search = (sortedArray, key) => {
    let start = 0;
    let end = sortedArray.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);
        if (sortedArray[middle] === key) {
            return middle;
        } else if (sortedArray[middle] < key) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }
    return -1;
};

let result = binary_search(sortedArray, 18);
console.log(result);
