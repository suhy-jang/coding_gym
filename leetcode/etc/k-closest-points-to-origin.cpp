class Solution {
public:
    static bool compare(const vector<int>& a, const vector<int>& b) {
        double aDist = a[0] * a[0] + a[1] * a[1];
        double bDist = b[0] * b[0] + b[1] * b[1];
        return (aDist < bDist);
    }
    vector<vector<int>> kClosest(vector<vector<int>>& points, int K) {
        sort(points.begin(), points.end(), compare); 
        points.resize(K);
        return points;
    }
};
