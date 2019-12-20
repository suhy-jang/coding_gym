/*
// Definition for a Node.
class Node {
public:
    int val;
    vector<Node*> children;

    Node() {}

    Node(int _val) {
        val = _val;
    }

    Node(int _val, vector<Node*> _children) {
        val = _val;
        children = _children;
    }
};
*/
class Solution {
public:
    vector<int> preorder(Node* root) {
        if (root == NULL) return {};
        
        vector<int> res = { root->val };
        for(Node* child : root->children) {
            vector<int> temp = preorder(child);
            res.insert(res.end(), temp.begin(), temp.end());
        }
        return res;
    }
};
