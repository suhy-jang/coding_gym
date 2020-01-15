# @param {String} address
# @return {String}
def defang_i_paddr(address)
    dots = []
    address.split('').each_with_index do |e, i|
        dots.push i if e == '.'
    end
    add = 0
    dots.each do |i|
        address.insert(i + add, '[')
        address.insert(i + add + 2, ']')
        add += 2
    end
    address
end
