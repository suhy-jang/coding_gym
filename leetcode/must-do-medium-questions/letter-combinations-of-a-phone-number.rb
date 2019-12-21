MATCHES = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
}

$output = nil

def backtrack(combination, next_digits)
    if next_digits.length == 0
        $output.push(combination)
    else
        digit = next_digits[0]
        letters = MATCHES[digit.to_sym]
        0.upto(letters.length - 1) do |i|
            backtrack(combination + letters[i], next_digits[1..-1])
        end
    end
end

def letter_combinations(digits)
    $output = []
    backtrack('', digits) if (digits.length != 0)
    return $output;
end
