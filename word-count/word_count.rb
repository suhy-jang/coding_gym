class Phrase
  def initialize(str)
    @str = str.downcase.scan(/\b[\w']+\b/)
    @hash = nil
  end

  def word_count
    generating_hash if @hash.nil?
    @hash
  end

  def generating_hash
    @hash = Hash.new
    @str.each do |p|
      @hash[p] ? (@hash[p] += 1) : (@hash[p] = 1)
    end
  end

end
