/* 
Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

 You must write an algorithm with O(log n) runtime complexity.
 
*/
// sol:-
/* 
1. array sorted dibe
2. integers 
3. ascending order 
4.target 

*/
let target = 6;
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function searchTarget(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    //   console.log(nums[i]);
    const element = nums[i];
    if (element == target) {
      console.log("target has been found");
    }
  }
}
searchTarget(nums, target);
