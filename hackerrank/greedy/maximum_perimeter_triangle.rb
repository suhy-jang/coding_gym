# https://www.hackerrank.com/challenges/maximum-perimeter-triangle/problem

def maximumPerimeterTriangle(sticks)
    sticks.sort!
    max_sticks = []
    2.upto(sticks.size - 1) do |i|
        left = sticks[i-2] + sticks[i-1]
        right = sticks[i]
        next if left <= right
        max_sticks = [sticks[i-2], sticks[i-1], sticks[i]]
    end
    return [-1] if max_sticks.empty?
    max_sticks
end

maximumPerimeterTriangle([3,9,2,15,3]
