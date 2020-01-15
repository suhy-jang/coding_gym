# Definition for a binary tree node.
# class TreeNode
#     attr_accessor :val, :left, :right
#     def initialize(val)
#         @val = val
#         @left, @right = nil, nil
#     end
# end

# @param {TreeNode} root
# @return {Boolean}
#         1
#   2         2
# 3   5     5   3
#    2 4   4 2

# O(N) / O(N)
         
def is_symmetric(root)
    return true if root.nil?
    
    check_sym(swap(root.left), root.right)
end

def swap(root)
    return nil if root.nil?
    temp = root.right
    root.right = swap(root.left)
    root.left = swap(temp)
    root
end

def check_sym(first, second)
    return true if first.nil? && second.nil?
    return false if first.nil? ^ second.nil?
    first.val == second.val && check_sym(first.left, second.left) && check_sym(first.right, second.right)
end
