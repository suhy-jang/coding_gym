class ResistorColorDuo
  attr_reader :colors

  COLOR_MATCHES = {
    "black" => 0,
    "brown" => 1,
    "red" => 2,
    "orange" => 3,
    "yellow" => 4,
    "green" => 5,
    "blue" => 6,
    "violet" => 7,
    "grey" => 8,
    "white" => 9
  }

  def initialize(colors)
    @colors = colors
  end

  def self.value(colors)
    new(colors).value
  end

  def value
    numbers.join.to_i
  end

  private

  def numbers
    colors.map do |color|
      number = COLOR_MATCHES[color.downcase]
      raise ArgumentError if number.nil?
      number
    end
  end
end
