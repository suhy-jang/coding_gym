def number_of_products
  n = gets.chomp.to_i
  elements = gets.chomp
  elements = elements.split(" ").map(&:to_i)
  positive, negative = recursive(elements, 0, 0, Hash.new(false))
  print negative, " ", positive, "\n"
end

def recursive(arr, start, finish, memo)
  return 0 if start > finish || memo[[start, finish]] || start < 0 || finish >= arr.size
  multiply = arr[start..finish].count{|e| e < 0} & 1 == 1 ? -1 : 1
  memo[[start, finish]] = true
  one = recursive(arr, start, finish+1, memo)
  two = recursive(arr, start+1, finish+1, memo)
  result = Array.new(2)
  pos = one[0] + two[0]
  neg = one[1] + two[1]
  multiply > 0 ? pos = pos + 1 : neg = neg + 1
  return [pos, neg]
end

number_of_products
