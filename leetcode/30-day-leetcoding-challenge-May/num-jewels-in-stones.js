/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
const numJewelsInStones = function(J, S) {
    const jewel = new Set;
    
    for (const j of J) {
        jewel.add(j);
    }
    
    let cnt = 0;
    for (const s of S) {
        cnt += jewel.has(s) ? 1 : 0;
    }
    return cnt;
};
