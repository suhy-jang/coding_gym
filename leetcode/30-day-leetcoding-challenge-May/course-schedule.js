/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
const canFinish = function(numCourses, prerequisites) {
    const match = Array.from(Array(numCourses), () => Array(null))
    const cnt = Array(numCourses).fill(0)
    let q = []
    for (const p of prerequisites) {
        cnt[p[0]] += 1
        match[p[1]].push(p[0])
    }
    for (let i = 0; i < numCourses; i++) {
        if (cnt[i] === 0) q.push(i)
    }
    let count = 0
    while (q.length > 0) {
        count += 1
        let temp = q.shift()
        for (const course of match[temp]) {
            cnt[course] -= 1
            if (cnt[course] === 0) {
                q.push(course)
            }
        }
    }
    return count === numCourses
};

// 2
// [[1,0],[0,1]]

// 3
// [[0,1],[0,2],[1,2]]

