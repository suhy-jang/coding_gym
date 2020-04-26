/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
const longestCommonSubsequence = function(text1, text2) {
    const m = text1.length, n = text2.length;
    const dp = Array.from(Array(m), () => new Array(n).fill(0));
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if (text1[i] === text2[j]) {
                if (i > 0 && j > 0) dp[i][j] = dp[i-1][j-1];
                dp[i][j] += 1;
            } else {
                if (i === 0 && j === 0) dp[i][j] = 0;
                else if (i === 0) dp[i][j] = dp[i][j-1];
                else if (j === 0) dp[i][j] = dp[i-1][j];
                else dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
            }
        }
    }
    return dp[m-1][n-1];
};
