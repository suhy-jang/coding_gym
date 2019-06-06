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
    @words.each_with_object({}){|k,hash| hash[k] ? (hash[k] += 1) : (hash[k]=1)}
  end

end
