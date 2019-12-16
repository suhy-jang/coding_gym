/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution {
public:
    ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) {
        ListNode* node = new ListNode(0);
        ListNode* head = node;
        
        while(l1 != NULL && l2 != NULL) {
            if(l1->val <= l2->val) {
                node->next = l1;
                node = l1;
                l1 = l1->next;
            } else {
                node->next = l2;
                node = l2;
                l2 = l2->next;
            }
        }
        node->next = (l2 == NULL) ? l1 : l2;
        
        return head->next;
    }
};
