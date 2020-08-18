/**
 * @param {string} s
 * @return {number[]}
 */
var findPermutation = function(s) {
    const st = [];
    const res = [];
    s += 'D';
    for (let i = 0; i < s.length; i++) {
        st.push(i+1);
        while ((s[i] === 'I' || i === s.length - 1) && st.length > 0) {
            res.push(st.pop());
        }
    }
    return res;
};
