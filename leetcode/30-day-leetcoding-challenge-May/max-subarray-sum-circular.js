/**
 * @param {number[]} A
 * @return {number}
 */
var maxSubarraySumCircular = function(A) {
    if (A.length === 0) return 0;
    
    let s = A.reduce((v, acc) => v + acc, 0);
    let ans1 = A[0];
    let cur = 0;
    // ans1: answer for one-interval subarray
    for (const a of A) {
        cur = a + Math.max(cur, 0);
        ans1 = Math.max(ans1, cur);
    }
    
    // ans2: answer for two-interval subarray, interior in A[1:]
    let ans2 = A.length > 1 ? A[1] : 0;
    cur = 0;
    for (let i = 1; i < A.length; ++i) {
        cur = A[i] + Math.min(cur, 0);
        ans2 = Math.min(ans2, cur);
    }
    ans2 = s - ans2;
    
    // ans3 = answer for two-interval subarray, interior in A[:-1]
    let ans3 = A[0];
    cur = 0;
    for (let i = 0; i < A.length - 1; ++i) {
        cur = A[i] + Math.min(cur, 0);
        ans3 = Math.min(ans3, cur);
    }
    
    return Math.max(ans1, ans2, ans3);
};
    
// [-2,-3,-1]
// [-2]
