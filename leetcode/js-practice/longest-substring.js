/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
    const pocket = new Set;
    let longestCnt = 0;
    let i = 0, j = 0;
    while(i < s.length && j < s.length) {
        if (pocket.has(s[j])) {
            pocket.delete(s[i++]);
        } else {
            pocket.add(s[j++]);
            longestCnt = Math.max(longestCnt, j - i);
        }
    }
    return longestCnt;
};

