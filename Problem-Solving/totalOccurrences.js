var words = [
    ["one", "two", "three"],
    ["nine", "one", "four"],
    ["six", "two", "eight"],
    ["seven", "five", "one", "ten"],
];



const calculateCount = (arr, query) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === query) {
            count++;
            continue;
        };
        if (Array.isArray(arr[i])) {
            count += calculateCount(arr[i], query);
        }
    };
    return count;
};


console.log(calculateCount(words, "one"));

//2