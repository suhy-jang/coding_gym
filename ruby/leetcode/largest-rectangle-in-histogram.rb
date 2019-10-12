# @param {Integer[]} heights
# @return {Integer}
def largest_rectangle_area(heights)
    st = []
    st.push(-1)
    max_area = 0
    0.upto(heights.size-1) do |i|
        while st[-1] != -1 && heights[st[-1]] >= heights[i]
            max_area = [max_area, heights[st.pop]*(i-st[-1]-1)].max
        end
        st.push(i)
    end
    while st[-1] != -1
        max_area = [max_area, heights[st.pop]*(heights.size-st[-1]-1)].max
    end
    max_area
end
