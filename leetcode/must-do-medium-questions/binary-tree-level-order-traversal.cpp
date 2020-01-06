/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
class Solution {
public:
    vector<vector<int>> levelOrder(TreeNode* root) {
        if (root == NULL) return vector<vector<int>> {};

        vector<vector<int>> res;
        queue<TreeNode*> q;
        q.push(root);
        while (!q.empty()) {
            vector<int> temp;
            queue<TreeNode*> curr_q;
            while(!q.empty()) {
                TreeNode* curr = q.front();
                temp.push_back(curr->val);
                q.pop();
                if (curr->left) curr_q.push(curr->left);
                if (curr->right) curr_q.push(curr->right);
            }
            q = curr_q;
            res.push_back(temp);
        }
        return res;
    }
};
