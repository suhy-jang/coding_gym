/**
 * @param {number[][]} matrix
 * @return {number}
 */
const countSquares = function(matrix) {
    if (matrix.length === 0) return 0;
    
    const n = matrix.length, m = matrix[0].length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (i-1 < 0 || j-1 < 0 || matrix[i][j] === 0) continue;
            matrix[i][j] += Math.min(matrix[i-1][j-1], matrix[i-1][j], matrix[i][j-1]);
        }
    }
    let sum = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            sum += matrix[i][j];
        }
    }
    
    return sum;
};

// 0 1 1 1
// 1 1 1 1
// 0 1 1 1

// 0 1 1 1
// 1 1 2 2
// 0 1 2 3


// 0 1 1 1
// 1 1 1 1
// 1 1 1 1


