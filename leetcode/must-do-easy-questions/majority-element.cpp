class Solution {
public:
    int majorityElement(vector<int>& nums) {
        int major = -1;
        int count = 0;
        for(int i = 0; i < nums.size(); i++) {
            if (i == 0) {
                major = nums[i];
                count = 1;
                continue;
            }
            (nums[i] != major) ? count-- : count++;
            if (count < 0) {
                major = nums[i];
                count = 1;
            }
        }
        return major;
    }
};
