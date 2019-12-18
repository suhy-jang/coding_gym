class Solution {
public:
    int getSum(int a, int b) {
        unsigned int carry = (unsigned int) a & b;
        return (b == 0) ? a : getSum(a ^ b, (int)(carry << 1));
    }
};

