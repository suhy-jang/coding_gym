class Matrix
  def initialize(str)
    @str_matrix = str
  end

  def rows
    @rows ||= transform
  end

  def columns
    @columns ||= rows.transpose
  end

  private

  def transform
    @str_matrix.lines.map { |line| line.split.map(&:to_i) }
  end
end

#matrix = Matrix.new("9 8 7\n19 18 17")
#p matrix.rows[0], matrix.columns[0]
#p matrix.rows[1], matrix.columns[1]
