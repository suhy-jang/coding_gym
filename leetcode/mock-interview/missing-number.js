/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function(nums) {
    nums.push(-1);
    let xPlace = 0;
    for(let i = 0; i < nums.length; i++) {
      while (nums[i] !== -1 && nums[i] !== i) {
        const rightPlace = nums[i];
        [nums[i], nums[rightPlace]] = [nums[rightPlace], nums[i]];
      }
      if (nums[i] === -1) {
        xPlace = i;
      }
    }
    return xPlace;
};

// const x = missingNumber([8,6,4,2,3,5,7,0,1]);
// console.log(x);
// 3 0 1 x
// 0 1 x 3
