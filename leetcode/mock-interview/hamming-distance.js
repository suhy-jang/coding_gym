/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const bitCount = (n) => {
    let cnt = 0;
    while(n > 0) {
        cnt += n % 2;
        n = Math.floor(n / 2);
    }
    return cnt;
}
const hammingDistance = function(x, y) {
    return bitCount(x ^ y);
};
