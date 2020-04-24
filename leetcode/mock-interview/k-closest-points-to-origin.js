/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
const compare = function(a, b) {
    aDist = a[0] * a[0] + a[1] * a[1];
    bDist = b[0] * b[0] + b[1] * b[1];
    return aDist - bDist;
}
const kClosest = function(points, K) {
    return points.sort(compare).slice(0, K);
}
