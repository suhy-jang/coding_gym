class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        unordered_map<int, int> hash;
        vector<int> res;
        for(int i=0; i<nums.size(); i++) {
            int num = nums[i];
            if(hash.find(num) != hash.end()) {
                res.push_back(hash[num]);
                res.push_back(i);
                break;
            }
            hash[target-num] = i; 
        }
        return res;
    }
};
