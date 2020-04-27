/**
 * @param {character[][]} matrix
 * @return {number}
 */
const maximalSquare = function(matrix) {
    const m = matrix.length, n = m > 0 ? matrix[0].length : 0;
    const dp = Array(n + 1).fill(0);
    let maxVal = 0, prev = 0;
    
    for (let r = 1; r <= m; r++) {
        for (let c = 1; c <= n; c++) {
            const temp = dp[c];
            if (matrix[r-1][c-1] === '1') {
                dp[c] = Math.min(prev, dp[c], dp[c-1]) + 1;
                maxVal = Math.max(maxVal, dp[c]);
            } else {
                dp[c] = 0;
            }
            prev = temp;
        }
    }
    return Math.pow(maxVal, 2);
}


// [["0","0","0","1"],["1","1","0","1"],["1","1","1","1"],["0","1","1","1"],["0","1","1","1"]]
// => 9
// [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
// => 4
// [["1","0","1","1","1"],["0","1","0","1","0"],["1","1","0","1","1"],["1","1","0","1","1"],["0","1","1","1","1"]]
// => 4
// [["0"]]
// => 0
