# https://www.hackerrank.com/challenges/grid-challenge/problem

def gridChallenge(grid)
    grid = sort_by_matrix(grid)
    is_grid(grid) ? "YES" : "NO"
end

def sort_by_matrix(grid)
    row_size = grid.size
    0.upto(row_size - 1) do |row_i|
        grid[row_i] = grid[row_i].chars.sort.join
    end
    grid
end

def is_grid(grid)
    row_size = grid.size
    col_size = grid[0].size
    1.upto(row_size - 1) do |row_i|
        1.upto(col_size - 1) do |col_i|
            return false if grid[row_i][col_i] < grid[row_i - 1][col_i]
            return false if grid[row_i][col_i] < grid[row_i][col_i - 1]
        end
    end
    true
end

gridChallenge [[a,b,c],[l,m,p],[q,r,t]]
