/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
const canFinish = (numCourses, prerequisites) => {
    const mat = Array.from(Array(numCourses), () => new Array(null));
    const cnt = new Array(numCourses);
    cnt.fill(0);
    let q = [];
    prerequisites.forEach((p) => {
        cnt[p[0]] += 1;
        mat[p[1]].push(p[0]);
    })
    for (let i = 0; i < numCourses; i++) {
        if (cnt[i] == 0) {
            q.push(i);
        }
    }
    let c = 0;
    while (q.length > 0) {
        c += 1;
        let curr = q.shift();
        mat[curr].forEach((i) => {
            cnt[i] -= 1;
            if (cnt[i] == 0) {
                q.push(i);
            }
        });
    }
    return c === numCourses ? true : false;
};
