# @param {String} s
# @return {String}
def reverse_words(s)
    s.split(' ').select{ |w| w != '' }.reverse().join(' ')
end
