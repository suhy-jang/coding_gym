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
    ListNode* swapPairs(ListNode* head) {
        ListNode* node = head;
        ListNode* newHead = node;
        ListNode* prev = NULL;
        while (node != NULL && node->next != NULL) {
            auto mid = node;
            auto right = node->next->next;
            node = node->next;
            if (prev) prev->next = node;
            else newHead = node;
            node->next = mid;
            mid->next = right;
            prev = mid;
            node = right;
        }
        return newHead;
    }
};
