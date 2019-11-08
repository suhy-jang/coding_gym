def updateInfo(result, value)
  result[:min] = value if value < result[:min]
  result[:max] = value if value > result[:max]
  result[:length] += 1
  result[:sum] += value
end

def solution(fname1, fname2)
  f1 = File.open(fname1, "r")
  out = File.open(fname2, "w")

  i = 0
  n = nil; m = nil
  arr = []
  result = { min: 2_147_483_647, max: -2_147_483_648, sum: 0, length: 0 }
  f1.each_line do | line |
    if i.zero?
      temp = line.split(' ')
      n, m = temp[0].to_i, temp[1].to_i
      arr = Array.new(n) { Array.new(m) }
    else
      line.split(' ').each_with_index do |e, j|
        arr[i - 1][j] = e.to_i
        updateInfo(result, e.to_i)
      end
    end
    i += 1
  end
  result[:avg] = result[:sum] / result[:length]

  out.print "#{result[:min].to_s} #{result[:max].to_s} #{result[:avg].to_s}"
end

n = "1"
1.upto(5) do |file|
  m = file.to_s
  solution("./level#{n}/level#{n}_#{m}.in", "./level#{n}_out/level#{n}_#{m}.out");
end
