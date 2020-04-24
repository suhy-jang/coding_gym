/**
 * @param {string} s
 * @return {boolean}
 */
const checkRecord = function(s) {
    let a = 0, l = 0; // count
    for(const n of s) {
        if (n === 'A') a += 1;
        if (n === 'L') {
            l += 1;
        } else {
            l = 0;
        }
        if (l > 2 || a > 1) return false;
    }
    return true;
};


