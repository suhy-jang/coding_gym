class Solution {
public:
    void swap(vector<int>& nums, int first, int second) {
        int temp = nums[first];
        nums[first] = nums[second];
        nums[second] = temp;
    }

    void sortColors(vector<int>& nums) {
        int zero = 0;
        int two = nums.size() - 1;
        int i = 0;
        while (i <= two) {
            if(nums[i] == 0) {
                swap(nums, zero, i);
                zero++;
                i++;
            } else if(nums[i] == 2) {
                swap(nums, two, i);
                two--;
            } else {
                i++;
            }
        }

        return;
    }
};
