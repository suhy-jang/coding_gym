def marcsCakewalk(calories)
    calories.sort!.reverse!
    calculate(calories)[:sum]
end

def calculate(calories)
    calories.each_with_object( {sum: 0, walk: 1} ) do |calorie, acc|
        acc[:sum] += calorie * acc[:walk]
        acc[:walk] *= 2
    end
end

marcsCakewalk [1,3,2]
