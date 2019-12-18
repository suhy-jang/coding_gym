class MinStack {
public:
    /** initialize your data structure here. */
    priority_queue<int, vector<int>, greater<int>> pq;
    stack<int> st;

    MinStack() {
    }
    
    void push(int x) {
        st.push(x);
        pq.push(x);
    }
    
    void pop() {
        if (pq.top() == st.top()) pq.pop();
        st.pop();
    }
    
    int top() {
        return st.top();
    }
    
    int getMin() {
        return pq.top();
    }
};

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack* obj = new MinStack();
 * obj->push(x);
 * obj->pop();
 * int param_3 = obj->top();
 * int param_4 = obj->getMin();
 */
