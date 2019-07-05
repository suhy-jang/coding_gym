class Scrabble
    attr_reader :script

  MATCHES = {
    "A" => 1, "E" => 1, "I" => 1, "O" => 1, "U" => 1, "L" => 1,
    "N" => 1, "R" => 1, "S" => 1, "T" => 1,
    "D" => 2, "G" => 2,
    "B" => 3, "C" => 3, "M" => 3, "P" => 3,
    "F" => 4, "H" => 4, "V" => 4, "W" => 4, "Y" => 4,
    "K" => 5,
    "J" => 8, "X" => 8,
    "Q" => 10, "Z" => 10
  }
  MATCHES.default = 0

  def initialize(script)
    @script = script ||= ''
  end

  def self.score(in_script)
    new(in_script).score
  end

  def score
    @score ||= letters.sum { |letter| MATCHES[letter.upcase] }
  end

  private

  def letters
    @letters ||= script.split('')
  end
end
