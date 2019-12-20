class Solution {
public:
    int findLengthOfLCIS(vector<int>& nums) {
        int res = 0;
        int anchor = 0;
        for(int i = 0; i < nums.size(); i++) {
            if(i > 0 && nums[i-1] >= nums[i]) {
                anchor = i;
            }
            res = max(res, i - anchor + 1);
        }
        return res;
    }
};
