/**
 * // This is the BinaryMatrix's API interface.
 * // You should not implement it, or speculate about its implementation
 * function BinaryMatrix() {
 *     @param {integer} x, y
 *     @return {integer}
 *     this.get = function(x, y) {
 *         ...
 *     };
 *
 *     @return {[integer, integer]}
 *     this.dimensions = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {BinaryMatrix} binaryMatrix
 * @return {number}
 */
const leftMostColumnWithOne = function(binaryMatrix) {
    const [row, col] = binaryMatrix.dimensions();
    let r = 0, c = col-1;
    let res = -1;
    while(r < row && c >= 0) {
        const val = binaryMatrix.get(r,c);
        if (val === 1) {
            res = c--;
        } else {
            r++;
        }
    }
    return res;
};

// [[1,1,1,1,1],[0,0,0,1,1],[0,0,1,1,1],[0,0,0,0,1],[0,0,0,0,0]]
// [[0,0,0],[0,0,0]]
// [[0,0,0],[0,1,1]]
