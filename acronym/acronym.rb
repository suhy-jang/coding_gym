class Acronym
  def self.abbreviate(sentense)
    sentense.split(/[\s-]/).map { |word| word[0] }.join.upcase
  end
end
