# @param {Integer[]} nums
# @return {String}

def compare(a, b)
    order1 = a + b
    order2 = b + a
    order1 <=> order2
end

def largest_number(nums)
    res = nums.map(&:to_s).sort{ |a, b| compare(a, b) }.reverse.join
    res[0] == '0' ? '0' : res
end
