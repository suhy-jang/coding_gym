# @param {Integer[]} a
# @param {Integer} k
# @return {Integer}

## modify max with index version

def two_sum_less_than_k(a, k)
    hash = Hash.new{ |a, b| a[b] = [] }
    a.each_with_index do |e, i|
        hash[e] << i
    end
    hash = hash.sort_by{ |k, v| k }
    i = 0
    j = hash.size-1
    max = [-1, []]
    while i < j
        sum = hash[i][0] + hash[j][0]
        if sum > max[0] && sum < k
            max[0] = sum
            max[1] = [i, j]
        end
        sum < k ? i += 1 : j -= 1
    end
    max[1]
end

## original version

def two_sum_less_than_k(a, k)
    i = 0
    j = a.size - 1
    a.sort!
    max = -1
    while i < j
        sum = a[i] + a[j]
        max = sum if sum < k && max < sum
        (sum < k) ? i += 1 : j -= 1
    end
    max
end
