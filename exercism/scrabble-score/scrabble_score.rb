class Scrabble
  def initialize(script)
    @script = script
    @score = nil
  end

  def script
    @script
  end

  def self.score(in_script)
    new(in_script).score
  end

  def score
    @score ||= set_score
  end

  def set_score
    return 0 if script.nil?
    script.upcase.split('').inject(0) do |acc,letter|
      acc + seperate_sort(letter)
    end
  end

  def seperate_sort(a_letter)
    value = 0
    case a_letter
    when /[AEIOULNRST]/
      value = 1
    when /[DG]/
      value = 2
    when /[BCMP]/
      value = 3
    when /[FHVWY]/
      value = 4
    when /[K]/
      value = 5
    when /[JX]/
      value = 8
    when /[QZ]/
      value = 10
    else
      value = 0
    end
  end
end
