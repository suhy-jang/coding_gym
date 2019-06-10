class Phrase
  attr_reader :word_count

  def initialize(words)
    @words = words.downcase.scan(/\b[\w']+\b/)
  end

  def word_count
    @word_count ||= generate
  end

  private

  def generate
    @words.each_with_object(Hash.new(0)){|w,hash| (hash[w] += 1)}
  end

end
