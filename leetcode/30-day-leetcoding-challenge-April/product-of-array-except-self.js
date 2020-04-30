/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function(nums) {
    const output = new Array(nums.length);

    // for left product of each elements
    output[0] = 1;
    for(let i = 0; i < output.length; i++) {
        if(i-1 >= 0) output[i] = output[i-1] * nums[i-1];
    }
    // for right product of each elements
    for(let i = nums.length - 1; i >= 0; i--) {
        if(i+1 < nums.length) nums[i] *= nums[i+1];
    }
    nums.shift();
    nums.push(1);
    
    // combine
    for(let i = 0; i < output.length; i++) {
        output[i] *= nums[i];
    }
    return output;
};
