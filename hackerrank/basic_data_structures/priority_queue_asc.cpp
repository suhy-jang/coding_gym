int cookies(int k, vector<int> A) {
    priority_queue <int,vector<int>,greater<int>> q;
    for(int el : A) {
        q.push(el);
    }
    int count=0;
    while (q.size() >= 2 && q.top() < k) {
        int x = q.top();
        q.pop();
        int y = 2 * q.top();
        q.pop();
        q.push(x+y);
        count++;
    }
    return (!q.empty() && q.top() >= k) ? count : -1;
}
