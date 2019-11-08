# http://codeforces.com/contest/1207/problem/B

def board
  nm = get_each gets.chomp
  n, m = nm[0], nm[1]
  a = Array.new
  color = Array.new(n) { Array.new(m, 0)}

  n.times do
    row = get_each(gets.chomp)
    a << row
  end

  paint = Array.new

  0.upto(n-2) do |r|
    0.upto(m-2) do |c|
      if 4 == (a[r][c] + a[r+1][c] + a[r][c+1] + a[r+1][c+1])
        coloring(color, r, c)
        paint << [r, c]
      end
    end
  end

  if !array_match(a, color)
    puts -1
    return
  elsif paint.empty?
    puts 0
    return
  end

  puts paint.count
  0.upto(paint.size-1) do |i|
    print "#{paint[i][0]+1} #{paint[i][1]+1}\n"
  end
end

def array_match(arr1, arr2)
  0.upto(arr1.size-1) do |r|
    0.upto(arr1[0].size-1) do |c|
      return false unless arr1[r][c] == arr2[r][c]
    end
  end
  true
end

def coloring(color, r, c)
  color[r][c], color[r+1][c], color[r][c+1], color[r+1][c+1] = 1, 1, 1, 1
end

def get_each(str)
  arr = Array.new
  num = 0
  str.each_char do |e|
    if e == ' '
      arr << num
      num = 0
    else
      num = num * 10 + e.to_i
    end
  end
  arr << num #unless num.zero?
  arr
end

board
