class Solution {
public:
    unordered_map<char, int> roman = { {'I', 1}, {'V', 5}, {'X', 10}, {'L', 50}, {'C', 100}, {'D', 500}, {'M', 1000} };

    int romanToInt(string s) {
        int res = 0;
        int i = 0;
        while(i < s.length()) {
            if (i+1 < s.length() && roman[s[i]] < roman[s[i+1]]) {
                res -= roman[s[i]];
            } else {
                res += roman[s[i]];
            }
            i++;
        }
        return res;
    }
};
