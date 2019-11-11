# @param {String[]} logs
# @return {String[]}
def letter?(lookAhead)
  lookAhead =~ /[[:alpha:]]/
end

def numeric?(lookAhead)
  lookAhead =~ /[[:digit:]]/
end

def reorder_log_files(logs)
    logs.sort do |log1, log2|
        delimiter = nil
        split1 = log1.split(' ', 2)
        split2 = log2.split(' ', 2)
        isDigit1 = numeric? split1[1]
        isDigit2 = numeric? split2[1]
        if !isDigit1 && !isDigit2
            cmp = split1[1] <=> split2[1]
            if cmp != 0
                delimiter = cmp 
            else
                delimiter = split1[0] <=> split2[0]
            end
        else
            delimiter = isDigit1 ? (isDigit2 ? 0 : 1) : -1
        end
        delimiter
    end
end
