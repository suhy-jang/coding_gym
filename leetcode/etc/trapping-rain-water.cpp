class Solution {
public:
    int trap(vector<int>& height) {
        if (height.size() <= 2) return 0;
        vector<int> ltor(height.size());
        vector<int> rtol(height.size());
        ltor[0] = height[0];
        for(int i = 1; i < height.size(); i++) {
            ltor[i] = max(ltor[i-1], height[i]);
        }
        int lastIndex = height.size() - 1;
        rtol[lastIndex] = height[lastIndex];
        for(int i = lastIndex; i >= 0; i--) {
            if (i == lastIndex) continue;
            rtol[i] = max(rtol[i+1], height[i]);
        }
        int sum = 0;
        for (int i = 0; i <= lastIndex; i++) {
            sum += (min(ltor[i], rtol[i]) - height[i]);
        }
        return sum;
    }
};
