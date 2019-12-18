// using extra space: O(n), O(n)
class Solution {
public:
    void rotate(vector<int>& nums, int k) {
        vector<int> a(nums.size());
        int n = nums.size();
        for(int i = 0; i < n; i++) {
            a[(i + k) % n] = nums[i];
        }
        copy(a.begin(), a.end(), nums.begin());
    }
};

// using stl
class Solution {
public:
    void rotate(vector<int>& nums, int k) {
        if (nums.size() <= 1) return;

        int n = nums.size();
        std::rotate(nums.begin(), nums.begin()+n-k%n, nums.end());
    }
}

// using reverse (0~n-1), (0~k-1), (k~n-1)
class Solution {
public:
    void reverse(vector<int>& nums, int start, int finish) {
        while(start < finish) {
            int temp = nums[start];
            nums[start++] = nums[finish];
            nums[finish--] = temp;
        }
    }
    void rotate(vector<int>& nums, int k) {
        int n = nums.size();
        k %= n;
        reverse(nums, 0, n-1);
        reverse(nums, 0, k-1);
        reverse(nums, k, n-1);
    }
};
