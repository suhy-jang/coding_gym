/**
 * @param {number[]} arr
 * @return {number}
 */
const countElements = function(arr) {
    const map = {};
    arr.forEach(el => {
        map[el-1] = map[el-1] ? map[el-1] + 1 : 1;
    });
    let cnt = 0;
    arr.forEach(el => {
        if (map[el]) cnt += 1;
    });
    return cnt;
};
