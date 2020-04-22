/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const subarraySum = function(nums, k) {
    let cnt = 0;
    const map = new Map();
    let sum = 0;

    map.set(0, 1);
    for(const num of nums) {
        sum += num;
        const count = map.get(sum) || 0; 
        cnt += map.get(sum - k) || 0;
        map.set(sum, count + 1);
    }
    return cnt;
};

// [1,-1,2,-1,-1,1]
// 1

// [0,0,0]
// 0
