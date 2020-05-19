/**
 * @param {string} str
 * @return {number}
 */
const charCode = function(str) {
    return str.charCodeAt(0) - 'a'.charCodeAt(0);
}
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const checkInclusion = function(s1, s2) {
    if (s1.length > s2.length) return false;
    
    const s1Count = new Array(26).fill(0);
    const s2Count = new Array(26).fill(0);
    for (const c of s1) {
        s1Count[charCode(c)]++;
        s2Count[charCode(c)]++;
    }
    let count = 0;
    for (let i = 0; i < 26; i++) {
        if (s1Count[i] === s2Count[i]) count++;
    }
    for (let i = 0; i < s2.length - s1.length; i++) {
        if (count === 26) return true;

        let r = charCode(s2[i+s1.length]), l = charCode(s2[i]);
        s2Count[r]++;
        if (s2Count[r] === s1Count[r]) {
            count++;
        } else if (s2Count[r] === s1Count[r] + 1) {
            count--;
        }
        s2Count[l]--;
        if (s2Count[l] === s1Count[l]) {
            count++;
        } else if (s2Count[l] === s1Count[l] - 1) {
            count--;
        }
    }
    return count === 26;
};
