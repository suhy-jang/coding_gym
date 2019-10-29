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
    ListNode* reverseList(ListNode* head) {
        ListNode* prev_node = NULL;
        while(head) {
            ListNode* next_node = head->next;
            head->next = prev_node;
            prev_node = head;
            head = next_node;
        }
        return prev_node;
    }
};
