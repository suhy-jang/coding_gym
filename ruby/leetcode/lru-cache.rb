class DLinkedNode
    attr_accessor :key, :value, :prev, :next
    def initialize
        @key = 0
        @value = 0
        @prev = nil
        @next = nil
    end
end

class LRUCache
    
    def add_node(node)
        node.prev = @head
        node.next = @head.next
        
        @head.next.prev = node
        @head.next = node
    end
    
    def remove_node(node)
        prev = node.prev
        new = node.next
        
        prev.next = new
        new.prev = prev
    end
    
    def move_to_head(node)
        remove_node(node)
        add_node(node)
    end
    
    def pop_tail()
        res = @tail.prev
        remove_node(res)
        res
    end

=begin
    :type capacity: Integer
=end
    def initialize(capacity)
        @cache = {}
        @size = 0
        @capacity = capacity
        @head = DLinkedNode.new
        @tail = DLinkedNode.new
        @head.next = @tail
        @tail.prev = @head
    end


=begin
    :type key: Integer
    :rtype: Integer
=end
    def get(key)
        node = @cache[key]
        return -1 if node.nil?
        move_to_head(node)
        node.value
    end


=begin
    :type key: Integer
    :type value: Integer
    :rtype: Void
=end
    def put(key, value)
        node = @cache[key]
        if node.nil?
            if(@size >= @capacity)
                tail = pop_tail()
                @cache.delete(tail.key)
                @size -= 1
            end
            newNode = DLinkedNode.new
            newNode.key = key
            newNode.value = value
            
            @cache[key] = newNode
            add_node(newNode)
            
            @size += 1
        else
            node.value = value
            move_to_head(node)
        end
    end


end

# Your LRUCache object will be instantiated and called as such:
# obj = LRUCache.new(capacity)
# param_1 = obj.get(key)
# obj.put(key, value)
