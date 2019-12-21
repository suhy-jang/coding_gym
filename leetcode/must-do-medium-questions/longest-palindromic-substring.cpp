class Solution {
public:
    string manacharAlgorithm(string s) {
        int n = s.size();
        if (n < 2) return s;
        if (n == 2 && s[0] == s[1]) return s;
        n = 2 * n + 1;
        int L[n];
        L[0] = 0;
        L[1] = 1;
        int C = 1, R = 2, i = 0, iMirror;
        int diff = -1;
        int maxLen = 0, maxCPos = 0;
        int start = -1, end = -1;
        
        for (i = 2; i < n; ++i) {
            iMirror = 2 * C - i;
            L[i] = 0;
            diff = R - i;
            if (diff > 0) {
                L[i] = min(L[iMirror], diff);
            }
            while (((i + L[i]) < n && (i - L[i]) > 0) && 
                  (((i + L[i] + 1) % 2 == 0) || 
                  (s[(i + L[i] + 1) / 2] == s[(i - L[i] - 1) / 2]))) {
                L[i]++;
            }
            if (L[i] > maxLen){
                maxLen = L[i];
                maxCPos = i;
            }
            if (i + L[i] > R) {
                C = i;
                R = i + L[i];
            }
        }
        start = (maxCPos - maxLen) / 2;
        return s.substr(start, maxLen);
    }
    
    string longestPalindrome(string s) {
        return manacharAlgorithm(s);
    }
};
