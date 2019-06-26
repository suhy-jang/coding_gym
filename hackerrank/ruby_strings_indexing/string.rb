# Your code here

def serial_average(data)
    serial_number = data[0,4]
    x_number = data[4,5].to_f
    y_number = data[10,5].to_f
    avg = ((x_number+y_number)/2).round(2)
    serial_number += avg.to_s
end

#print serial_average('002-10.00-20.00')
