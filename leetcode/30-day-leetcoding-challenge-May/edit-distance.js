/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
const minDistance = function(word1, word2) {
    const n = word1.length, m = word2.length
    if (n * m === 0) return n + m
    
    const dp = Array.from(Array(n+1), () => Array(m+1))
    
    for (let i = 0; i <= n; i++) {
        dp[i][0] = i
    }
    for (let j = 0; j <= m; j++) {
        dp[0][j] = j
    }
    
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            let l = dp[i][j-1] + 1, d = dp[i-1][j] + 1, ld = dp[i-1][j-1]
            if (word1[i-1] !== word2[j-1]) ld += 1
            dp[i][j] = Math.min(l, d, ld)
        }
    }
    return dp[n][m]
};
