# https://codeforces.com/contest/1198/problem/A

def min_trans_mitters(x, k)
  x.sort!
  min_exchange = x.size
  i = 0
  while i < x.size do
    temp = trans_mitters(x, k, i)
    min_exchange = [temp, min_exchange].min
    i += 1
  end
  min_exchange
end

def trans_mitters(x, k, start_i)
  l = x[start_i]
  r = x[start_i] + 2 * k
  i = start_i
  count = start_i
  i = binary_search(x, r, start_i, x.size - 1) + 1
  count += x.size - i
end

def binary_search(x, goal, l, r)
  index = l
  while l <= r do
    mid = (l + r) / 2
    if x[mid] < goal
      index = mid
      l = mid + 1
    else
      r = mid - 1
    end
  end
  index
end

p min_trans_mitters([2, 1, 2, 3, 4, 3], 1) # => 2
p min_trans_mitters([2, 1, 2, 3, 4, 3], 2) # => 0
p min_trans_mitters([1, 1, 2, 2, 3, 3], 1) # => 2
