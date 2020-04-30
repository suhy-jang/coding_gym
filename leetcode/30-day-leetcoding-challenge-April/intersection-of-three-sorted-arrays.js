/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number[]} arr3
 * @return {number[]}
 */
const arraysIntersection = function(arr1, arr2, arr3) {
    let a = 0, b = 0, c = 0;
    const res = [];
    while(a < arr1.length && b < arr2.length && c < arr3.length) {
        const leng = res.length;
        if (arr1[a] === arr2[b] && arr1[a] === arr3[c] && res[leng - 1] !== arr1[a]) {
            res.push(arr1[a++]);
        }
        const maxTri = Math.max(arr1[a], arr2[b], arr3[c]);
        while (a < arr1.length && arr1[a] < maxTri) a += 1;
        while (b < arr2.length && arr2[b] < maxTri) b += 1;
        while (c < arr3.length && arr3[c] < maxTri) c += 1;
    }
    return res;
};
