/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = function(str) {
    let s = 0, e = str.length - 1
    
    while(s < e) {
        [str[s], str[e]] = [str[e], str[s]]
        s++
        e--
    }
};
