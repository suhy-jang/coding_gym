/**
 * @param {number} num
 * @return {number}
 */
const findComplement = function(num) {
    let bit = 0;
    let copy = num;
    while(copy > 0) {
        copy >>= 1;
        bit++;
    }
    const fullBits = Math.pow(2, bit) - 1;
    return fullBits - num;
};

// 10101 = 16 + 4 + 1
// 01010
// 11111 = 16 + 8 + 4 + 2 + 1 = 
