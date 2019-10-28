/* https://www.hackerrank.com/challenges/beautiful-pairs/problem */

def beautifulPairs(a, b)
    m = Hash.new(0)
    flag = false
    pair = 0

    for num in a
        m[num] += 1
    end
    for num in b
        m[num] -= 1
        pair += 1 if m[num] >= 0
        flag = true if m[num] < 0
    end
    return pair + 1 if flag
    pair - 1
end

print beautifulPairs([1,2,3,4], [1,2,3,3])
