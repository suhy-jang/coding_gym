class Solution {
private:
    vector<vector<string>> dp;
public:
    string collapse(string& s, int i, int j) {
        string temp = s.substr(i, j-i+1);
        auto pos = (temp + temp).find(temp, 1);
        if (pos >= temp.size()) {
            return temp;
        }
        return to_string(temp.size()/pos) + '[' + dp[i][i+pos-1] + ']';
    }

    string encode(string s) {
        int n = s.size();
        dp = vector<vector<string>>(n, vector<string>(n, ""));
        for (int step = 1; step <= n; step++) {
            for (int i = 0; i + step - 1 < n; i++) {
                int j = i + step - 1;
                dp[i][j] = s.substr(i, step);
                for (int k = i; k < j; k++) {
                    auto left = dp[i][k];
                    auto right = dp[k + 1][j];
                    if (left.size() + right.size() < dp[i][j].size()) {
                        dp[i][j] = left + right;
                    }
                }
                string replace = collapse(s, i, j);
                if (replace.size() < dp[i][j].size()) {
                    dp[i][j] = replace;
                }
            }
        }
        return dp[0][n - 1];
    }
};
