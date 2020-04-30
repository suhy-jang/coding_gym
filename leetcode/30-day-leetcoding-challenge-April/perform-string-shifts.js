const rotateRight = function(arr, right) {
    while(right !== 0) {
        if (right > 0) {
            const el = arr.pop();
            arr.unshift(el);
            right -= 1;
        }
        if (right < 0) {
            const el = arr.shift();
            arr.push(el);
            right += 1;
        }
    }
    return arr;
}

/**
 * @param {string} s
 * @param {number[][]} shift
 * @return {string}
 */
const stringShift = function(s, shift) {
    let right = 0;
    for(el of shift) {
        const [direction, amount] = el;
        direction === 1 ? right += amount : right -= amount;
    }
    return rotateRight(s.split(''), right % s.length).join('');
};
