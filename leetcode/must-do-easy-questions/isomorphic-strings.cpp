class Solution {
public:
    bool isIsomorphic(string s, string t) {
        unordered_map<char, char> m;
        unordered_set<char> seen;
        bool res = true;
        for(int i = 0; i < s.length(); i++) {
            int first = s[i];
            int second = t[i];
            if(m.find(first) != m.end()) {
                if (m[first] != second) {
                    res = false;
                    break;
                }
            } else {
                if (seen.find(second) != seen.end()) {
                    res = false;
                    break;
                }
                m.insert(make_pair(first, second));
                seen.insert(second);
            }
        }
        return res;
    }
};
