/**
 * @param {string} s
 * @return {string}
 */
const frequencySort = function(s) {
    let freq = new Map;
    let ans = "";
    for(const c of s) {
        const cnt = freq.get(c) || 0;
        freq.set(c, cnt+1);
    }
    freq = [...freq.entries()].sort((a, b) => b[1] - a[1]).some(([k, v]) => {
        for(let i = 0; i < Number(v); i++) {
            ans += k;
        }
    });
    return ans;
};
