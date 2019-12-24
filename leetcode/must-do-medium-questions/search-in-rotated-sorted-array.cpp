class Solution {
public:
    int findPivot(vector<int>& nums, int first) {
        int s = 0;
        int f = nums.size() - 1;
        int pivot = 0;
        while(s <= f) {
            int m = s + (f - s) / 2;
            if (m+1 >= nums.size() || (first <= nums[m] && nums[m] > nums[m+1])) {
                pivot = m + 1;
                break;
            } else {
                first <= nums[m] ? s = m + 1 : f = m - 1;
            }
        }
        return pivot;
    }
    
    int binarySearch(vector<int>& nums, int target, int s, int f) {
        int search = -1;
        while (s <= f) {
            int m = s + (f - s) / 2;
            if (nums[m] == target) {
                search = m;
                break;
            } else if (nums[m] < target) {
                s = m + 1;
            } else {
                f = m - 1;
            }
        }
        return search;
    }
    
    int search(vector<int>& nums, int target) {
        if (nums.size() == 0) return -1;
        if (nums[0] == target) return 0;
        
        int res = -1;
        int pivot = findPivot(nums, nums[0]);
        if (pivot == 0 || pivot == nums.size()) {
            res = binarySearch(nums, target, 0, nums.size()-1);
        } else if (nums[0] <= target && target <= nums[pivot-1]) {
            res = binarySearch(nums, target, 0, pivot-1);
        } else {
            res = binarySearch(nums, target, pivot, nums.size()-1);
        }
        return res;
    }
};
