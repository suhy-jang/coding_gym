/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
const maxUncrossedLines = function(A, B) {
    const record = new Map;
    function helper(i, j, total) {
        if (i >= A.length || j >= B.length) return total;
        const key = `${i}:${j}:${total}`;
        if (record.has(key)) return record.get(key);
        const index = B.slice(j).indexOf(A[i]);
        if (index === -1) return helper(i+1,j,total);

        const res = Math.max(helper(i+1, j+index+1, total+1), helper(i+1, j, total));
        record.set(key, res);
        return res;
    }
    return helper(0, 0, 0);
};
