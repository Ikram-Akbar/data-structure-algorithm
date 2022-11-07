const demoArray = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
var outputArray = [];

var start = false;

for (j = 0; j < demoArray.length; j++) {
  for (k = 0; k < outputArray.length; k++) {
    if (demoArray[j] == outputArray[k]) {
      start = true;
    }
  }

  if (start == false) {
    outputArray.push(demoArray[j]);
  }
  start = false;
}
console.log(outputArray);
