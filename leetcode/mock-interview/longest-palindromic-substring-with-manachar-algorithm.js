/**
 * @param {string} s
 * @return {string}
 */
const manachar = function(s) {
    let n = s.length;
    if (n < 2) return s;
    if (n == 2 && s[0] == s[1]) return s;
    n = 2 * n + 1;
    const L = Array(n);
    L[0] = 0;
    L[1] = 1;
    let C = 1, R = 2, i = 0, iMirror;
    let diff = -1;
    let maxLen = 0, maxCPos = 0;
    let start = -1, end = -1;
    
    for (let i = 2; i < n; ++i) {
        iMirror = 2 * C - i;
        L[i] = 0;
        diff = R - i;
        if (diff > 0) {
            L[i] = Math.min(L[iMirror], diff);
        }
        while (((i + L[i]) < n && (i - L[i]) > 0) && 
              (((i + L[i] + 1) % 2 == 0) || 
              (s[Math.floor((i + L[i] + 1) / 2)] == s[Math.floor((i - L[i] - 1) / 2)]))) {
            L[i]++;
        }
        if (L[i] > maxLen){
            maxLen = L[i];
            maxCPos = i;
        }
        if (i + L[i] > R) {
            C = i;
            R = i + L[i];
        }
    }
    start = Math.floor((maxCPos - maxLen) / 2);
    return s.substring(start, start + maxLen);
}

const longestPalindrome = function(s) {
    return manachar(s);
};

// "babad"
// "cbbd"
// "babad"
