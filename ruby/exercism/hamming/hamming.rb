module Hamming
  def self.compute(data_1, data_2)
      raise ArgumentError unless data_1.length == data_2.length
      (0...data_1.length).count { |idx| data_1[idx] != data_2[idx] }
  end
end
