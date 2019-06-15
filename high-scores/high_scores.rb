class HighScores
  attr_reader :scores

  def initialize(scores)
    @scores = scores
  end

  def latest
    @scores.last
  end

  def personal_best
    @scores.max
  end

  def personal_top_three
    @top_three ||= generate_top_three
  end

  def generate_top_three
    @scores.max_by(min_top_three){|a| a}
  end

  def min_top_three
    [@scores.length, 3].min
  end
end
