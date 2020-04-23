/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const rangeBitwiseAnd = function(m, n) {
    if (m.toString(2).length !== n.toString(2).length) return 0;
    
    let shift = 0;
    while (m < n) {
        m >>= 1;
        n >>= 1;
        shift++;
    }
    return m << shift;
};

// 00001 1
// 00010 0
// 00011 10
// 00100 0
// 00101 100
// 00110 100
// 00111 100 or 110
// 01000 0
// 01001 1000
// 01010 1000
// 01011 1001 or 1011
