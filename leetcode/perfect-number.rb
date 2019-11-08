# @param {Integer} num
# @return {Boolean}
def check_perfect_number(num)
    return false if num <= 0
    sum = 0
    i = 1
    while i * i <= num
        if num % i == 0
            sum += i
            sum += num / i if i * i != num
        end
        i += 1
    end
    sum - num == num
end
