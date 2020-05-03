/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function(ransomNote, magazine) {
    const letters = new Map;
    for (const m of magazine) {
        const cnt = letters.has(m) ? letters.get(m) : 0;
        letters.set(m, cnt + 1);
    }
    res = true;
    for (const s of ransomNote) {
        const cnt = letters.get(s);
        if (cnt === undefined || cnt <= 0) {
            res = false;
            break;
        }
        letters.set(s, cnt - 1);
    }
    return res;
};
