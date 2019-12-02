def solution
  countOfCase = gets.chomp.to_i
  data = []
  countOfCase.times do
    temp = gets.chomp
    data.push temp.split(' ').map(&:to_i)
  end
  data.each do |elem|
    n, s = elem[0], elem[1]
    if (n === 0)
      puts 0
    elsif (s <= n)
      puts s
    else
      base = s / n
      count = s % n
      puts (n - count) * base * base + count * (base + 1) * (base + 1);
    end
  end
end

solution
