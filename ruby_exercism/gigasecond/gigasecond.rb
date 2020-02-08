class Gigasecond
  GIGA = 1_000_000_000
  def self.from(moment)
    moment + GIGA
  end
end

if defined? Minitest
  describe 'Custom Test' do
    it 'must work out fractional calculations with no surprise' do
      value(Gigasecond.from(0).to_f/60/60).must_equal 1e9/60/60
    end
  end
end
