/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const nextGreaterElement = function(nums1, nums2) {
    const map = new Map;
    const st = [];
    for(const num of nums2) {
        let last = st.length - 1;
        while (st.length > 0 && st[last] < num) {
            map.set(st[last--], num);
            st.pop();
        }
        st.push(num);
    }
    for(let i = 0; i < nums1.length; i++) {
        nums1[i] = map.get(nums1[i]) || -1;
    }
    return nums1;
};
