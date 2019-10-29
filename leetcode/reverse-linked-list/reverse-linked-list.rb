# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val)
#         @val = val
#         @next = nil
#     end
# end

# @param {ListNode} head
# @return {ListNode}
def reverse_list(head)
    prev_node = nil
    while head
        next_node = head.next
        head.next = prev_node
        prev_node = head
        head = next_node
    end
    prev_node
end
