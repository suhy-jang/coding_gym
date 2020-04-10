/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
const backspaceCompare = function(S, T) {
    const os = [], ot = [];
    for(const el of S) {
        if (el == '#') {
            if(os.length > 0) os.pop();
        } else {
            os.push(el);
        }
    }
    for(const el of T) {
        if (el == '#') {
            if (ot.length > 0) ot.pop();
        } else { 
            ot.push(el);
        }
    }
    if (os.length !== ot.length) return false;
    for(let i = 0; i < os.length; i++) {
        if (os[i] !== ot[i]) return false;
    }
    return true;
};
