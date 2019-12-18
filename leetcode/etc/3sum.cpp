class Solution {
public:
    vector<vector<int>> threeSum(vector<int>& nums) {
        vector<vector<int>> res;
        sort(nums.begin(), nums.end());
        int s, l, r;
        
        for (s = 0; s < nums.size(); s++) {
            if (s > 0 && nums[s - 1] == nums[s]) continue;
            l = s + 1;
            r = nums.size() - 1;
            while (l < r) {
                if (nums[s] + nums[l] + nums[r] < 0) {
                    l++;
                } else if (nums[s] + nums[l] + nums[r] > 0) {
                    r--;
                } else if (nums[s] + nums[l] + nums[r] == 0) {
                    res.push_back(vector<int> { nums[s], nums[l], nums[r] });
                    do { l++; } while (l < r && nums[l-1] == nums[l]);
                    do { r--; } while (l < r && nums[r+1] == nums[r]);
                }
            }
        }
        return res;
    }
};
