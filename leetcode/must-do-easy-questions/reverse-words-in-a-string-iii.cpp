class Solution {
public:
    void reverse(string& s, int start, int finish) {
        while (start < finish) {
            char temp = s[start];
            s[start] = s[finish];
            s[finish] = temp;
            start++;
            finish--;
        }
    }
    string reverseWords(string s) {
        int start = 0;
        for(int i = 0; i < s.length(); i++) {
            if (i+1 == s.length() || s[i+1] == ' ') {
                reverse(s, start, i);
                start = i+2;
            }
        }
        return s;        
    }
};
