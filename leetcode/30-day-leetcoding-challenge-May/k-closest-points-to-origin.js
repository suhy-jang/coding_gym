/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
const kClosest = function(points, K) {
    const n = points.length
    const elements = []
    
    for (const [a, b] of points) {
        const sqDist = a*a + b*b
        elements.push([sqDist, [a, b]])
    }
    elements.sort((a, b) => b[0] - a[0])
    return elements.slice(n-K).map(el => el[1])
};
