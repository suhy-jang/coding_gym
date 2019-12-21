class Solution {
public:
    vector<string> generateParenthesis(int n) {
        vector<string> res;
        if (n != 0) {
            for(int c = 0; c < n; ++c) {
                for(string left : generateParenthesis(c)) {
                    for (string right : generateParenthesis(n - 1 - c)) {
                        res.push_back("(" + left + ")" + right);
                    }
                }
            }
        } else {
            res.push_back("");
        }
        return res;
    }
};
