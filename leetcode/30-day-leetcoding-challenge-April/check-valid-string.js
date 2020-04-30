/**
 * @param {string} s
 * @return {boolean}
 */
const checkValidString = function(s) {
    let low = 0, high = 0;
    for(let c of s) {
        low += c === '(' ? 1 : -1;
        high += c !== ')' ? 1 : -1;
        if (high < 0) break;
        low = Math.max(low, 0);
    }
    return low === 0;
};

/*
(
[1,1]
(*
[0,2]
(**
[0,3]
(***
[0,4]
(***)
[0,3]
*/
// ")("
