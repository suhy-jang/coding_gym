# http://codeforces.com/contest/1207/problem/A

def maximum_profit
  q = gets.chomp.to_i
  results = Array.new
  until q.zero? do
    ingredients = gets.chomp
    ingredients = get_each(ingredients)
    prices = gets.chomp
    prices = get_each(prices)
    results << get_maximum(ingredients, prices)
    q -= 1
  end
  results
end
$burger_num = 0

def get_maximum(ingredients, prices)
  $burger_num = ingredients[0]/2
  ham_num = ingredients[1]
  chicken_num = ingredients[2]
  pay = 0
  if prices[0] >= prices[1]
    pay += payment(prices[0], ham_num)
    pay += payment(prices[1], chicken_num)
  else
    pay += payment(prices[1], chicken_num)
    pay += payment(prices[0], ham_num)
  end
  pay
end

def payment(price, ingredient)
  pay = 0
  if $burger_num >= ingredient
    pay = price * ingredient
    $burger_num -= ingredient
  else
    pay = price * $burger_num
    $burger_num = 0
  end
  pay
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
  arr << num unless num.zero?
  arr
end

puts maximum_profit
