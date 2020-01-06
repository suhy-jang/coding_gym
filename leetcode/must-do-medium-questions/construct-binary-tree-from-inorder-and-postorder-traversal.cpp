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
    vector<int> inorder;
    vector<int> postorder;
    int postIdx;
    unordered_map<int, int> m;
    
    TreeNode* buildTree(vector<int>& inorder, vector<int>& postorder) {
        this->inorder = inorder;
        this->postorder = postorder;
        postIdx = postorder.size() - 1;
        int i = 0;
        for(int val : inorder) m[val] = i++;
        return helper(0, inorder.size() - 1);
    }

    TreeNode* helper(int left, int right) {
        if (left > right) return NULL;

        int rootVal = postorder[postIdx--];
        int index = m[rootVal];
        TreeNode* root = new TreeNode(rootVal);
        root->right = helper(index + 1, right);
        root->left = helper(left, index - 1);
        return root;
    }
};
