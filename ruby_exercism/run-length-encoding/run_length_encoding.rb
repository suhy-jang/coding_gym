# frozen_string_literal: true

class RunLengthEncoding
  class << self
    def encode(letters)
      result = ''
      prev_letter = ''
      count = 1
      letters.each_char do |letter|
        if prev_letter == letter
          count += 1
        else
          result += count.to_s if count > 1
          result += prev_letter unless prev_letter.empty?
          count = 1
        end
        prev_letter = letter
      end
      result += count.to_s if count > 1
      result += prev_letter
      result
    end

    def decode(letters)
      result = ''
      count = '0'
      letters.each_char do |letter|
        if '0' <= letter && letter <= '9'
          count == '0' ? count = letter : count += letter
        else
          count = '1' if count == '0'
          (count.to_i).times { result += letter }
          count = '0'
        end
      end
      result
    end
  end
end
