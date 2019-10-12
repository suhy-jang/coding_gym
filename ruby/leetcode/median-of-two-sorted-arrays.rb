# @param {Integer[]} nums1
# @param {Integer[]} nums2
# @return {Float}
def find_median_sorted_arrays(nums1, nums2)
    m = nums1.length
    n = nums2.length
    if m > n
        temp = nums1; nums1 = nums2; nums2 = temp
        temp = m; m = n; n = temp
    end
    # always m <= n
    i_min = 0; i_max = m; half_len = (m + n + 1) / 2
    while i_min <= i_max
        i = (i_min + i_max) / 2
        j = half_len - i
        if i < i_max && nums2[j-1] > nums1[i] # i is small
            i_min = i + 1
        elsif i > i_min && nums1[i-1] > nums2[j] # i is greater
            i_max = i - 1
        else # i is good
            max_left = 0
            if (i.zero?)
                max_left = nums2[j-1]
            elsif (j.zero?)
                max_left = nums1[i-1]
            else
                max_left = [nums1[i-1], nums2[j-1]].max
            end
            if (m+n)%2 == 1
                return max_left
            end
            
            min_right = 0
            if (i == m)
                min_right = nums2[j]
            elsif (j == n)
                min_right = nums1[i]
            else
                min_right = [nums2[j], nums1[i]].min
            end
            return (max_left + min_right).to_f / 2
        end
    end
    0.0
end
