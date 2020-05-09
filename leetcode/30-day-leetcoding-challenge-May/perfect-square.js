/**
 * @param {number} num
 * @return {boolean}
 */
const isPerfectSquare = function(num) {
    if (num === 1 || num === 0) return true;
    
    let s = 0, e = Math.floor(num/2);
    while(s <= e) {
        const m = Math.floor(s + (e - s)/2);
        if (m * m === num) return true;
        
        if (m * m < num) {
            s = m + 1;
        } else {
            e = m - 1;
        }
    }
    return false;
};
