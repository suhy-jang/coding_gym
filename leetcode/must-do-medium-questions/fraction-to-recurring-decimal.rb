# @param {Integer} numerator
# @param {Integer} denominator
# @return {String}
def fraction_to_decimal(n, d)
    result = n * d < 0 ? '-' : ''
    n = n.abs
    d = d.abs
    result << (n / d).to_s
    n %= d
    return result if n.zero?
    check = {}
    result << '.'
    while !n.zero? and !check[n]
        check[n] = result.length
        n *= 10
        result << (n / d).to_s
        n %= d
    end
    result.insert(check[n], '(') << ')' if check[n]
    result
end
