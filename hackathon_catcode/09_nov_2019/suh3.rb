def border_check(arr, r, c)
  return arr[r][c][:id] if r-1 < 0 || c-1 < 0 || r+1 >= arr.length || c+1 >= arr[0].length

  id = arr[r][c][:id]
  if (arr[r-1][c][:id] != id) ||
    (arr[r+1][c][:id] != id) ||
    (arr[r][c-1][:id] != id) ||
    (arr[r][c+1][:id] != id)
    return arr[r][c][:id]
  end
  -1
end

# def border_check(content, r, c)
#   arr = content[:coords]
#   return arr[r][c][:id] if r-1 < 0 || c-1 < 0 || r+1 >= arr.length || c+1 >= arr[0].length
#
#   id = arr[r][c][:id]
#   if (arr[r-1][c][:id] != id) ||
#     (arr[r+1][c][:id] != id) ||
#     (arr[r][c-1][:id] != id) ||
#     (arr[r][c+1][:id] != id)
#     return arr[r][c][:id]
#   end
#   -1
# end

# bool PointInPolygon(Point point, Polygon polygon) {
#   vector<Point> points = polygon.getPoints();
#   int i, j, nvert = points.size();
#   bool c = false;
#
#   for(i = 0, j = nvert - 1; i < nvert; j = i++) {
#     if( ( (points[i].y >= point.y ) != (points[j].y >= point.y) ) &&
#         (point.x <= (points[j].x - points[i].x) * (point.y - points[i].y) / (points[j].y - points[i].y) + points[i].x)
#       )
#       c = !c;
#   }
#
#   return c;
# }

def point_in_polygon(point, polygon)
  nvert = polygon.length
  i, j = 0, nvert - 1
  nvert = polygon.length
  count = false
  r, c = 0, 1
  while i < nvert
    if ((polygon[i][r] >= point[r]) != (polygon[j][r] >= point[r]) &&
      (point[c] <= (polygon[j][c] - polygon[i][c]) * (point[r] - polygon[i][r]) /
      (polygon[j][r] - polygon[i][r]) + polygon[i][c])
    )
      count = !count
    end
    j = i
    i += 1
  end
  count
end

def euclidean(from, to)
  Math.sqrt((from[0] - to[0]).pow(2) + (from[1] - to[1]).pow(2))
end

def closest(arr, from)
  results = []
  to = { distance: nil }
  arr.each do |point|
    temp = euclidean(from, point)
    if to[:distance].nil? || to[:distance] > temp
      to[:distance] = temp
      results = [point]
    elsif to[:distance] == temp
      results.push point
    end
  end
  results
end

def find_capital(id, content)
  coords = content[:coords]
  borders = content[:borders]
  in_borders = content[:in_borders]

  avg = average(coords)
  border = borders.find{ |b| b == avg }
  middle_dot = [avg[0]+0.5, avg[1]+0.5]
  # in_range = in_borders.find{ |temp| temp == avg }
  in_range = point_in_polygon(middle_dot, borders)
  return [avg[1], avg[0]] if !border && in_range


  results = closest(in_borders, avg)
  r = results.sort {|a,b| a[1] == b[1] ? a[0] <=> b[0] : a[1] <=> b[1]}.first
  # print results, "\n "
  [r[1], r[0]]
end

def average(coordinates)
  row_sum, col_sum = 0, 0
  length = coordinates.length
  coordinates.each_with_index do |coord, i|
    row, col = coord[0], coord[1]
    row_sum += row
    col_sum += col
  end
  [row_sum / length, col_sum / length]
end

def solution(fname1, fname2)
  f1 = File.open(fname1, "r")
  out = File.open(fname2, "w")

  row = -1
  n, m, arr = nil, nil, nil
  f1.each_line do | line |
    if row == -1
      temp = line.split(' ')
      n, m = temp[0].to_i, temp[1].to_i
      arr = Array.new(n) { Array.new(m) { Hash.new() } }
    else
      line.split(' ').each_with_index do |str_num, col|
        if (col % 2).zero?
          arr[row][col/2][:altitude] = str_num.to_i
        else
          arr[row][col/2][:id] = str_num.to_i
        end
      end
    end
    row += 1
  end
  data = Hash.new
  0.upto(n-1) do |r|
    0.upto(m-1) do |c|
      id = arr[r][c][:id]
      data[id] = { coords: [], borders: [], in_borders: [], length: 0 } unless data[id]
      data[id][:coords].push [r, c]
      data[id][:length] += 1
      if border_check(arr, r, c) != -1
        data[id][:borders].push [r, c]
      else
        data[id][:in_borders].push [r, c]
      end
    end
  end
  data.sort_by{|k, v| k}.each do |id, content|
    capital = find_capital(id, content)
    r, c = capital[0], capital[1]
    out.print "#{r} #{c}\n"
  end
end

n = "3"
# solution("./level#{n}/level#{n}_example.in", "./level#{n}_out/level#{n}_test.out")
1.upto(5) do |file|
  m = file.to_s
  solution("./level#{n}/level#{n}_#{m}.in", "./level#{n}_out/level#{n}_#{m}.out");
end
