module Raindrops
  def self.convert(factor)
    sounds = ""
    sounds += "Pling" if factor%3 == 0
    sounds += "Plang" if factor%5 == 0
    sounds += "Plong" if factor%7 == 0
    sounds += factor.to_s if sounds == ""
    sounds
  end
end
