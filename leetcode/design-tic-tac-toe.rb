class Board
    attr_accessor :status
    def initialize(n)
        @rows = Array.new(n, 0)
        @cols = Array.new(n, 0)
        @diags = Array.new(2, 0)
        @n = n
        @major = 0
        @sub = 1
    end
    
    def put_piece(r, c, player)
        piece = player == 1 ? 1 : -1
        @rows[r] += piece
        @cols[c] += piece
        if r == c
            @diags[@major] += piece
        end
        if r + c == @n - 1
            @diags[@sub] += piece
        end
        return (@rows[r].abs == @n || @cols[c].abs == @n || @diags[@major].abs == @n || @diags[@sub].abs == @n) ? player : 0
    end
end

class TicTacToe

=begin
    Initialize your data structure here.
    :type n: Integer
=end
    def initialize(n)
        @board = Board.new(n)
    end

=begin
    Player {player} makes a move at ({row}, {col}).
        @param row The row of the board.
        @param col The column of the board.
        @param player The player, can be either 1 or 2.
        @return The current winning condition, can be either:
                0: No one wins.
                1: Player 1 wins.
                2: Player 2 wins.
    :type row: Integer
    :type col: Integer
    :type player: Integer
    :rtype: Integer
=end
    def move(row, col, player)
        @board.put_piece(row, col, player)
    end

end

# Your TicTacToe object will be instantiated and called as such:
# obj = TicTacToe.new(n)
# param_1 = obj.move(row, col, player)
