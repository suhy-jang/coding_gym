class Solution {
public:
    vector<int> topKFrequent(vector<int>& nums, int k) {
        unordered_map<int, int> frequent;
        for(int n : nums) { ++frequent[n]; }
        priority_queue<int, vector<int>, greater<int>> pq;
        unordered_map<int, int>::iterator itr = frequent.begin();
        while(itr != frequent.end()) {
            if (pq.size() < k) pq.push(itr->second);
            else if (pq.top() < itr->second) {
                pq.pop();
                pq.push(itr->second);
            }
            itr++;
        }
        int cutOff = pq.top();
        vector<int> res;
        itr = frequent.begin();
        while(itr != frequent.end()) {
            if (itr->second >= cutOff) {
                res.push_back(itr->first);
            }
            itr++;
        }
        return res;
    }
};
