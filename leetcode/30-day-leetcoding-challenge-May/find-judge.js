/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
const findJudge = function(N, trust) {
    const counts = new Array(N+1).fill(0);
    
    for (const [a, b] of trust) {
        counts[b] += 1;
        counts[a] -= 1;
    }
    for (let i = 1; i < counts.length; i++) {
        if (counts[i] === N-1) return i;
    }
    return -1;
};

// 3
// [[3,1],[1,3],[2,3]]
// => -1
