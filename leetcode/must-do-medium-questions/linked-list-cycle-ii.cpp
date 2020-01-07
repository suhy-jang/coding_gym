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
    ListNode *getIntersect(ListNode *head) {
        ListNode *tortoise = head;
        ListNode *hare = head;

        while (hare != NULL && hare -> next != NULL) {
            tortoise = tortoise -> next;
            hare = hare -> next -> next;
            if (tortoise == hare) {
                return hare;
            }
        }
        return NULL;
    }

    ListNode *detectCycle(ListNode *head) {
        if (head == NULL) return NULL;

        ListNode *intersect = getIntersect(head);
        if (intersect == NULL) return NULL;

        ListNode *ptr1 = head;
        ListNode *ptr2 = intersect;
        while (ptr1 != ptr2) {
            ptr1 = ptr1 -> next;
            ptr2 = ptr2 -> next;
        }
        return ptr1;
    }
};
