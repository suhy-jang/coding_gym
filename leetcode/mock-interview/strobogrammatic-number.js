/**
 * @param {string} num
 * @return {boolean}
 */
const isStrobogrammatic = function(num) {
    const rotates = [0, 1, 0, 0, 0, 0, 9, 0, 8, 6]; // 9->6, 2->0(no value)
    const reverse = String(num).split('').reverse().map(v => String(rotates[v]));
    for(let i = 0; i < num.length; i++) {
        if (reverse[i] !== num[i]) return false;
    }
    return true;
};
