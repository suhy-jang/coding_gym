/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
const isLongPressedName = function(name, typed) {
    if (name.length === 0) return typed.length === 0;
    
    let n = 0, t = 0;
    let prev = name[n];
    while(n < name.length && t < typed.length) {
        if (name[n] === typed[t]) {
            prev = name[n++];
            t += 1;
        } else if (prev === typed[t]) {
            t += 1;
        } else {
            return false;
        }
    }
    while(t < typed.length) {
        if (prev !== typed[t++]) return false;
    }
    return n === name.length;
};
