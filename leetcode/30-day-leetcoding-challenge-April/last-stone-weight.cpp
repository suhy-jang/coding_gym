#include <queue>
class Solution {
public:
    int lastStoneWeight(vector<int>& stones) {
        priority_queue<int, vector<int>, less<int>> pq;
        for (int &s : stones) {
            pq.push(s);
        }
        while(pq.size() > 1) {
            int first = pq.top();
            pq.pop();
            int second = pq.top();
            pq.pop();
            int newVal = first - second;
            pq.push(newVal);
        }
        int ret = pq.top();
        pq.pop();
        return ret;
    }
};
