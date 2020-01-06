class Solution {
public:
    vector<vector<int>> merge(vector<vector<int>>& intervals) {
        sort(intervals.begin(), intervals.end(), [](vector<int> a, vector<int> b) { return a[0] < b[0]; });
        vector<vector<int>> merged;
        for (vector<int> interval : intervals) {
            if (merged.empty() || merged.back()[1] < interval[0] ) {
                merged.push_back(interval);
            } else {
                merged.back()[1] = max(merged.back()[1], interval.back());
            }
        }
        return merged;
    }
};