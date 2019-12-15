def solution
  n = gets.chomp.to_i
  mi = Array.new(n-1)
  n.times do
    s, c = gets.chomp.split(' ')
    n = s.size
    mi[n-1] = n-1
    (n-2).downto(0) do |i|
      mi[i] = s[i] < s[mi[i+1]] ? i : mi[i+1]
    end
    0.upto(n-1) do |i|
      if s[i] > s[mi[i]]
        s[i], s[mi[i]] = s[mi[i]], s[i]
        break
      end
    end
    puts (s < c ? s : '---')
  end
end

solution
