class ListNode
    attr_accessor :key, :val, :prev, :next

    def initialize(key, val)
        @key = key
        @val = val
    end
end

class LRUCache
#    :type capacity: Integer
    def initialize(capacity)
        @capacity = capacity
        @cache = {}
        @head = ListNode.new(-1, -1)
        @tail = ListNode.new(-1, -1)
        @head.next = @tail
        @tail.prev = @head
    end

#    :rtype: Integer
    def get(key)
        return -1 unless node = @cache[key]

        move_to_head(node)
        node.val
    end

#    :rtype: Void
    def put(key, value)
        if node = @cache[key]
            node.val = value
            move_to_head(node)
        else
            if @capacity.zero?
                @cache.delete pop_tail()
                @capacity += 1
            end
            node = ListNode.new(key, value)
            add_to_head(node)
            @cache[key] = node
            @capacity -= 1
        end
    end

    private

    def add_to_head(node)
        next_n = @head.next
        @head.next = node
        node.next = next_n
        next_n.prev = node
        node.prev = @head
    end

    def move_to_head(node)
        remove_node node
        add_to_head node
    end

    def remove_node(node)
        prev = node.prev
        next_n = node.next
        prev.next = next_n
        next_n.prev = prev
    end

    def pop_tail
        node = @tail.prev
        prev = node.prev
        remove_node node
        prev.next = @tail
        @tail.prev = prev
        node.key
    end
end

# Your LRUCache object will be instantiated and called as such:
# obj = LRUCache.new(capacity)
# param_1 = obj.get(key)
# obj.put(key, value)
