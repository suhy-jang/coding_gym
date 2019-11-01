# @param {Integer[][]} matrix
# @param {Integer} target
# @return {Boolean}
class Solution
    def initialize(matrix, target)
        @matrix = matrix
        @target = target
    end
    
    def searchRec( left, up, right, down )
        return false if left > right || up > down 
        return false if @target < @matrix[up][left] || @target > @matrix[down][right]
        
        mid = left + (right - left) / 2
        row = up
        while row <= down && @matrix[row][mid] <= @target
            return true if @matrix[row][mid] == @target
            
            row += 1
        end
        searchRec(left, row, mid-1, down) || searchRec(mid+1, up, right, row-1)
    end
    
    def search_matrix()
        return false if @matrix.nil? || @matrix.length == 0
        
        return searchRec(0, 0, @matrix[0].length-1, @matrix.length-1)
    end
end

def search_matrix(matrix, target)
    Solution.new(matrix, target).search_matrix
end
