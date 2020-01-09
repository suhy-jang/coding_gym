class Solution {
public:
    int numIslands(vector<vector<char>>& grid) {
        if (grid.empty()) return 0;

        int num = 0;
        vector<vector<int>> visited(grid.size(), vector<int>(grid[0].size(), 0));
        for(int row = 0; row < grid.size(); row++) {
            for(int col = 0; col < grid[0].size(); col++) {
                queue<pair<int, int>> q;
                if (grid[row][col] == '1' && !visited[row][col]) {
                    q.push(make_pair(row, col));
                    visited[row][col] = 1;
                    num++;
                }
                while (!q.empty()) {
                    pair<int, int> point = q.front();
                    q.pop();
                    int r = point.first;
                    int c = point.second;
                    if (r-1 >= 0 && !visited[r-1][c] && grid[r-1][c] == '1') {
                        q.push(make_pair(r-1, c));
                        visited[r-1][c] = 1;
                    }
                    if (c-1 >= 0 && !visited[r][c-1] && grid[r][c-1] == '1') {
                        q.push(make_pair(r, c-1));
                        visited[r][c-1] = 1;
                    }
                    if (r+1 < grid.size() && !visited[r+1][c] && grid[r+1][c] == '1') {
                        q.push(make_pair(r+1, c));
                        visited[r+1][c] = 1;
                    }
                    if (c+1 < grid[0].size() && !visited[r][c+1] && grid[r][c+1] == '1') {
                        q.push(make_pair(r, c+1));
                        visited[r][c+1] = 1;
                    }
                }
            }
        }
        return num;
    }
};
