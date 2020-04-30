/**
 * @param {number[][]} grid
 * @return {number}
 */
const minPathSum = function(grid) {
    for(let r = 0; r < grid.length; r++) {
        for(let c = 0; c < grid[0].length; c++) {
            if(r-1 >= 0 && c-1 >= 0) {
                grid[r][c] += Math.min(grid[r-1][c], grid[r][c-1]);
            } else if (r-1 >= 0) {
                grid[r][c] += grid[r-1][c];
            } else if (c-1 >= 0) {
                grid[r][c] += grid[r][c-1];
            }
        }
    }
    return grid[grid.length-1][grid[0].length-1];
};
