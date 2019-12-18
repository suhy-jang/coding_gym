class Solution {
public:
    bool isAnagram(string s, string t) {
        unordered_map<char, int> match;
        for(char c : s) {
            match[c]--;
        }
        for(char c : t) {
            match[c]++;
        }
        bool res = true;
        unordered_map<char, int>::iterator itr = match.begin();
        while(itr != match.end()) {
            if (itr->second != 0) {
                res = false;
                break;
            }
            itr++;
        }
        return res;
    }
};
