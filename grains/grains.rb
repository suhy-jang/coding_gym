# frozen_string_literal: true

module Grains
  class << self
    attr_reader :group, :total

    def initialize
      @@group = nil
      @@total = nil
    end

    def square(n)
      raise ArgumentError if out_range?(n)

      set_grains[n - 1]
    end

    def total
      total ||= set_total
    end

    private

    def set_grains
      group ||= (1..64).map { |e| 2**(e - 1) }
    end

    def set_total
      set_grains.inject(0) { |acc, e| acc += e }
    end

    def out_range?(n)
      (n < 1) || (n > 64)
    end
  end
end
