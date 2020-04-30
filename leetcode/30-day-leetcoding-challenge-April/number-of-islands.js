/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = function(grid) {
    if (grid.length == 0) return 0;
    
    let cnt = 0;
    for(let row = 0; row < grid.length; row++) {
        for(let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] == 1) {
                const q = [];
                grid[row][col] = 0;
                q.push([row,col]);
                while(q.length > 0) {
                    const [r, c] = q.shift();
                    if (r-1 >= 0 && grid[r-1][c] == 1) {
                        grid[r-1][c] = 0;
                        q.push([r-1, c]);
                    }
                    if (c-1 >= 0 && grid[r][c-1] == 1) {
                        grid[r][c-1] = 0;
                        q.push([r, c-1]);
                    }
                    if (r+1 < grid.length && grid[r+1][c] == 1) {
                        grid[r+1][c] = 0;
                        q.push([r+1, c]);
                    }
                    if (c+1 < grid[0].length && grid[r][c+1] == 1) {
                        grid[r][c+1] = 0;
                        q.push([r, c+1]);
                    }
                }
                cnt += 1;
            }
        }
    }
    return cnt;
};


