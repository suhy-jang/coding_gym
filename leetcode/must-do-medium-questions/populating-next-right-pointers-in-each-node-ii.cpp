/*
// Definition for a Node.
class Node {
public:
    int val;
    Node* left;
    Node* right;
    Node* next;

    Node() : val(0), left(NULL), right(NULL), next(NULL) {}

    Node(int _val) : val(_val), left(NULL), right(NULL), next(NULL) {}

    Node(int _val, Node* _left, Node* _right, Node* _next)
        : val(_val), left(_left), right(_right), next(_next) {}
};
*/
class Solution {
public:
    Node* leftmost;
    Node* prev;

    void processChild(Node* child) {
        if(child) {
            if (prev) {
                prev -> next = child;
            } else {
                leftmost = child;
            }
            prev = child;
        }
    }

    Node* connect(Node* root) {
        leftmost = root;
        while(leftmost) {
            Node* curr = leftmost;
            leftmost = NULL;
            prev = NULL;
            while(curr) {
                processChild(curr->left);
                processChild(curr->right);
                curr = curr->next;
            }
        }
        return root;
    }
};
