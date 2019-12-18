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
    TreeNode* invertTree(TreeNode* root) {
        if (root == NULL) return NULL;
        queue<TreeNode*> q;
        q.push(root);
        while(!q.empty()) {
            TreeNode* curr = q.front();
            q.pop();
            TreeNode* temp = curr->left;
            curr->left = curr->right;
            curr->right = temp;
            if(curr->left) q.push(curr->left);
            if(curr->right) q.push(curr->right);
        }
        return root;
    }
};
