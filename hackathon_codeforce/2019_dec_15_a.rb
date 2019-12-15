def solution
  n = gets.chomp.to_i
  data = []
  n.times do
    input = gets.chomp
    if input.size >= 2 && input[-2..-1] == 'po'
      data.push 'FILIPINO'
    elsif input.size >= 4 && input[-4..-1] == 'desu' || input[-4..-1] == 'masu'
      data.push 'JAPANESE'
    elsif input.size >= 5 && input[-5..-1] == 'mnida'
      data.push 'KOREAN'
    end
  end
  data.each { |e| puts e }
end

solution
