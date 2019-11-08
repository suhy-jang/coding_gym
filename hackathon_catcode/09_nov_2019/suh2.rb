def border_check(arr, r, c)
  return arr[r][c][:id] if r-1 < 0 || c-1 < 0 || r+1 >= arr.length || c+1 >= arr[0].length
  id = arr[r][c][:id]
  if (arr[r-1][c][:id] != id) ||
    (arr[r+1][c][:id] != id) ||
    (arr[r][c-1][:id] != id) ||
    (arr[r][c+1][:id] != id)
    return arr[r][c][:id]
  end
  -1
end

def solution(fname1, fname2)
  f1 = File.open(fname1, "r")
  out = File.open(fname2, "w")

  row = -1
  n, m, arr = nil, nil, nil
  f1.each_line do | line |
    if row == -1
      temp = line.split(' ')
      n, m = temp[0].to_i, temp[1].to_i
      arr = Array.new(n) { Array.new(m) { Hash.new() } }
    else
      line.split(' ').each_with_index do |str_num, col|
        if (col % 2).zero?
          arr[row][col/2][:altitude] = str_num.to_i
        else
          arr[row][col/2][:id] = str_num.to_i
        end
      end
    end
    row += 1
  end
  result = Hash.new(0)
  0.upto(n-1) do |r|
    0.upto(m-1) do |c|
      id = border_check(arr, r, c)
      result[id] += 1 if id != -1
    end
  end
  result.sort_by{|k, v| k}.each do |id, count|
    out.puts count
  end
end

n = "2"
# solution("./level#{n}/level#{n}_example.in", "./level#{n}_out/level#{n}_test.out");
1.upto(5) do |file|
  m = file.to_s
  solution("./level#{n}/level#{n}_#{m}.in", "./level#{n}_out/level#{n}_#{m}.out");
end
