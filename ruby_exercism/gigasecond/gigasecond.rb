require 'time'

class Gigasecond
  GIGA = 10**9
  def self.from(moment)
    moment + GIGA
  end
end
