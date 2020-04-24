/**
 * @param {number[]} heights
 * @return {number}
 */
const heightChecker = function(heights) {
    const sortedVersion = heights.slice().sort((a, b) => a - b);
    let cnt = 0;
    for(let i = 0; i < heights.length; i++) {
        if (sortedVersion[i] !== heights[i]) cnt += 1;
    }
    return cnt;
};
