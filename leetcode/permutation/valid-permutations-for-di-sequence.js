/**
 * @param {string} S
 * @return {number}
 */
var numPermsDISequence = function(S) {
    const output = [];
    const n = S.length;
    const mod = 1e9 + 7;
    let dp = Array(n+1).fill(1);
    let dp2 = Array(n);
    for (let i = 0; i < n; dp = dp2.map(e => e), i++) {
        if (S[i] === 'I') {
            for (let j = 0, cur = 0; j < n - i; j++) {
                dp2[j] = cur = (cur + dp[j]) % mod;
            }
        } else {
            for (let j = n - i - 1, cur = 0; j >= 0; j--) {
                dp2[j] = cur = (cur + dp[j + 1]) % mod;
            }
        }
    }
    return dp[0];
};
