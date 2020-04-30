/**
 * @param {character[][]} matrix
 * @return {number}
 */
const maximalSquare = function(matrix) {
    const m = matrix.length, n = m > 0 ? matrix[0].length : 0;
    const dp = Array.from(Array(m + 1), () => Array(n + 1).fill(0));
    let maxVal = 0;
    
    for (let r = 1; r <= m; r++) {
        for (let c = 1; c <= n; c++) {
            if (matrix[r-1][c-1] === '1') {
                dp[r][c] = Math.min(dp[r][c-1], dp[r-1][c], dp[r-1][c-1]) + 1;
                maxVal = Math.max(maxVal, dp[r][c]);
            }
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
