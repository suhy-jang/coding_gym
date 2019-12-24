class Solution {
public:
    void swap(int& a, int& b) {
        int temp = a;
        a = b;
        b = temp;
    }
    void backtrack(int n, vector<int> nums, vector<vector<int>>& output, int first) {
        if (first == n) {
            output.push_back(nums);
        }
        for(int i = first; i < n; i++) {
            swap(nums[first], nums[i]);
            backtrack(n, nums, output, first + 1);
            swap(nums[first], nums[i]);
        }
    }
    vector<vector<int>> permute(vector<int>& nums) {
        vector<vector<int>> output;
        int n = nums.size();

        backtrack(n, nums, output, 0);
        return output;
    }
};
