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
    const s1Count = new Array(26).fill(0);
    for (const c of s1) {
        s1Count[charCode(c)]++;
    }
    const strS1Count = JSON.stringify(s1Count);
    const s2Count = new Array(26).fill(0);
    let res = false;
    for (let i = 0; i < s2.length; i++) {
        s2Count[charCode(s2[i])]++;
        const passed = i - s1.length;
        if (passed >= 0) {
            s2Count[charCode(s2[passed])]--;
        }
        if (JSON.stringify(s2Count) === strS1Count) {
            res = true;
            break;
        }
    }
    return res;
};
