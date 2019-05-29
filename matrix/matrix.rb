class Matrix
  attr_reader :rows, :columns

  def initialize(str)
    @rows=nil
    @columns=nil
    SaveRC(str)
  end

  def SaveRC(str)
    str=str.split("\n")
    str.each_with_index do |p,idx|
      p=p.split(" ")
      if @columns.nil? && @rows.nil?
        InitRC(str.length, p.length)
      end
      SetRC(p,idx)
    end
  end

  def SetRC(arr,r)
    arr.each_with_index do |curr, c|
      curr=curr.to_i
      @rows[r][c] = curr
      @columns[c][r] = curr
    end
  end

  def InitRC(r, c)
    @columns=[]
    0.upto(c-1) do
      @columns << [""]*r
    end
    @rows=[]
    0.upto(r-1) do
      @rows << [""]*c
    end
  end
end
