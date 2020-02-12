class TwelveDays
  CARD_NUM = ['a', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve']
  ORD_NUM = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth', 'eleventh', 'twelfth']
  PRESENTS = ['Partridge in a Pear Tree', 'Turtle Doves', 'French Hens', 'Calling Birds', 'Gold Rings', 'Geese-a-Laying', 'Swans-a-Swimming', 'Maids-a-Milking', 'Ladies Dancing', 'Lords-a-Leaping', 'Pipers Piping', 'Drummers Drumming']
  LINE_BREAK = '
'

  def self.song
    lyric = ''
    ORD_NUM.each_with_index do |nth, i|
      lyric += "On the #{nth} day of Christmas my true love gave to me: "
      i.downto(1) do |j|
        lyric += "#{CARD_NUM[j]} #{PRESENTS[j]}, "
      end
      lyric += 'and ' unless i.zero?
      lyric += "#{CARD_NUM[0]} #{PRESENTS[0]}.#{LINE_BREAK}"
      lyric += "#{LINE_BREAK}" if i != 11
    end
    lyric
  end
end
