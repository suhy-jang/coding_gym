def number_of_products
  n = gets.chomp.to_i
  numbers = gets.chomp.split(" ").map(&:to_i)
  positive, negative, a, b = 0, 0, 0, 0
  numbers.each do |num|
    c, d = 0, 0
    if num > 0
      c, d = a+1, b
    else
      c, d = b, a+1
    end
    a, b = c, d
    positive += c
    negative += d
  end
  puts "#{negative} #{positive}"
end

number_of_products
