/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
const removeKdigits = function(num, k) {
    while(k > 0 && num.length > 0) {
        const erste = num.slice(1);
        let entZweite = num;
        for(let i = 0; i < num.length; i++) {
            if (num[0] < num[i] && (i+1 >= num.length || num[i] > num[i+1])) {
                entZweite = num.slice(0,i) + num.slice(i+1);
                break;
            }
        }
        num = erste < entZweite ? erste : entZweite;
        k--;
    }
    // Remove leading zero
    for(let i = 0; i < num.length; i++) {
        if (0 < num[i]) {
            num = num.slice(i);
            break;
        }
    }
    
    return Number(num) === 0 ? '0' : num;
};

// "1783"
// 1
