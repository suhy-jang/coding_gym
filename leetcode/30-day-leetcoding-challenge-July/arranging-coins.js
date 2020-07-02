/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    if (n === 1) return 1
    const sqrt = Math.floor(Math.sqrt(2 * n))
    return sqrt * (sqrt + 1) <= 2 * n ? sqrt : sqrt - 1
};
