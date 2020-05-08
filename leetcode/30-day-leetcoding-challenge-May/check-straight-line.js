/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
const checkStraightLine = function(coordinates) {
    // tan ~ = y / x -> x divisor cannot be zero
    const [x0, y0] = coordinates[0];
    const [x1, y1] = coordinates[1];
    if (x0 === x1) { // same x
        for (const [x, y] of coordinates) {
            if (x0 !== x) {
                return false;
            }
        }
    } else if (y0 === y1) { // same y
        for (const [x, y] of coordinates) {
            if (y0 !== y) {
                return false;
            }
        }
    } else {
        const tan = (y1 - y0) / (x1 - x0);
        for (let i = 2; i < coordinates.length; i++) {
            const [x, y] = coordinates[i];
            if (x - x0 === 0) { // divisor cannot be zero, and this case is at above.
                return false;
            }
            const tempTan = (y - y0) / (x - x0);
            if (tan !== tempTan) {
                return false;
            }
        }
    }
    return true;
};
