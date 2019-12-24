class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
        if (strs.size() == 0) return {{}};

        unordered_map<string, vector<int>> m;
        for(int i = 0; i < strs.size(); i++) {
            string s = strs[i];
            sort(s.begin(), s.end());
            m[s].push_back(i);
        }
        vector<vector<string>> ana;
        for(auto itr = m.begin(); itr != m.end(); itr++) {
            vector<string> temp;
            for(int i = 0; i < itr->second.size(); i++) {
                temp.push_back(strs[itr->second[i]]);
            }
            ana.push_back(temp);
            temp.clear();
        }
        return ana;
    }
};
