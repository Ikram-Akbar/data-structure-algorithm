/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  const result = Math.sqrt(x);
  if (result % 1 !== 0) {
    return Math.floor(result);
  } else {
    return result;
  }
};
console.log(mySqrt(25));
