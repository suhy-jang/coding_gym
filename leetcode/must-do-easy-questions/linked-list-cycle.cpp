/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
// hashmap
class Solution {
public:
    bool hasCycle(ListNode *head) {
        set<ListNode*> nodesSeen;
        while(head != NULL) {
            if (nodesSeen.find(head) != nodesSeen.end()) {
                return true;
            }
            nodesSeen.insert(head);
            head = head->next;
        }
        return false;
    }
};


// two pointers
class Solution {
public:
    bool hasCycle(ListNode *head) {
        if (head == NULL || head->next == NULL) return false;
        
        ListNode* fast = head->next;
        ListNode* slow = head;
        while(slow != fast) {
            if (fast == NULL || fast->next == NULL) return false;
            
            slow = slow->next;
            fast = fast->next->next;
        }
        return true;
    }
};
