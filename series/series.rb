class Series
  def initialize(numbers)
    @numbers = numbers
  end

  attr_reader :numbers

  def slices(piece)
    raise ArgumentError if piece > numbers.length

    numbers.split('').each_cons(piece).map { |cons| cons.join('') }
  end
end
