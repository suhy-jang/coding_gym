/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = function(s) {
    const m = 'z'.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
    let counts = Array(m).fill(-1);
    for(let i = 0; i < s.length; i++) {
        const idx = (s[i]).charCodeAt(0) - 'a'.charCodeAt(0);
        switch (counts[idx]) {
        case -1:
            counts[idx] = i;
        case Infinity:
            break;
        default:
            counts[idx] = Infinity;
        }
    }
    counts = counts.filter(c => c !== -1 && c !== Infinity)
    return counts.length === 0 ? -1 : Math.min(...counts);
};

// "leetcode" -> 0
// "" -> -1
// "z" -> 0
// "cc" -> -1
