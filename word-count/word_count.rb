class Phrase
  def initialize(words)
    @words = words.downcase.scan(/\b[\w']+\b/)
  end

  def word_count
    @words_count ||= generate
    @words_count
  end

  def generate
    hash = Hash.new
    @words.each do |p|
      hash[p] ? (hash[p] += 1) : (hash[p] = 1)
    end
    hash
  end

end
