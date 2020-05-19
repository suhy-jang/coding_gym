/**
 * @param {string} letter
 * @return {number}
 */
const charCode = function(letter) {
    return letter.charCodeAt(0) - 'a'.charCodeAt(0);
}
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const findAnagrams = function(s, p) {
    const ns = s.length, np = p.length;
    if (s.length < p.length) return [];
    
    const sCount = new Array(26).fill(0);
    const pCount = new Array(26).fill(0);
    for(const letter of p) {
        pCount[charCode(letter)]++;
    }
    const output = [];
    for (let i = 0; i < s.length; ++i) {
        sCount[charCode(s[i])]++;
        if (i >= np) {
            sCount[charCode(s[i - np])]--;
        }
        if (JSON.stringify(sCount) === JSON.stringify(pCount)) {
            output.push(i - np + 1);
        }
    }
    return output;
};

// s: "abab" p: "ab"
