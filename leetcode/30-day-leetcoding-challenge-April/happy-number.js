/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = function(n) {
    pocket = new Set;
    while(!pocket.has(n) && n != 1) {
        pocket.add(n);
        n = String(n).split('').map(e => e * e).reduce((acc, v) => acc + v);
    }
    return n == 1;
};
