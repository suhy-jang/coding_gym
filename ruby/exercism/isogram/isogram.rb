require 'set'

module Isogram
  def self.isogram?(input)
    input.split('').each_with_object(Set.new) do |elem,once|
      next unless elem =~ /[\w]/
      elem.downcase!
      return false if once.include?(elem)
      once.add(elem)
    end
    true
  end
end
