class Solution {
public:
    void swapFourSide(vector<vector<int>>& matrix, int r, int c) {
        int n = matrix.size();
        int temp = matrix[r][c];
        matrix[r][c] = matrix[n-1-c][r];
        matrix[n-1-c][r] = matrix[n-1-r][n-c-1];
        matrix[n-1-r][n-c-1] = matrix[c][n-1-r];
        matrix[c][n-1-r] = temp;
    }

    void rotate(vector<vector<int>>& matrix) {
        for(int r = 0; r < (matrix.size() + 1) / 2; r++) {
            for(int c = 0; c < matrix.size() / 2; c++) {
                swapFourSide(matrix, r, c);
            }
        }
    }
};
