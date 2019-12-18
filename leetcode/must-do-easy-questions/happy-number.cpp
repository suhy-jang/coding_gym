class Solution {
public:
    int getNext(int n) {
        int totalSum = 0;
        while(n > 0) {
            int temp = n % 10;
            totalSum += temp * temp;
            n /= 10;
        }
        return totalSum;
    }
    bool isHappy(int n) {
        unordered_set<int> seen;
        while(n != 1 && seen.find(n) == seen.end()) {
            seen.insert(n);
            n = getNext(n);
        }
        return (n == 1);
    }
};

