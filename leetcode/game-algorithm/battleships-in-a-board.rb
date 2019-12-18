# @param {Character[][]} board
# @return {Integer}
def battleship_start_count(board, row, col)
    return 0 if row-1 >= 0 && board[row-1][col] == 'X'
    return 0 if col-1 >= 0 && board[row][col-1] == 'X'
    count = 0
    if board[row][col] == 'X'
        count += 1 
        if (row+1 < board.size && board[row+1][col] === 'X') && (col+1 < board[0].size && board[row][col+1] == 'X')
            count += 1 
        end
    end
    count
end

def count_battleships(board)
    count = 0
    0.upto(board.size-1) do |r|
        0.upto(board[0].size-1) do |c|
            count += battleship_start_count(board, r, c)
        end
    end
    count
end
