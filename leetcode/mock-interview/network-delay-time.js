// Bellman-Ford Algorithm
// https://www.youtube.com/watch?v=obWXjtg0L64
/**
 * @param {number[][]} times
 * @param {number} N
 * @param {number} K
 * @return {number}
 */

const networkDelayTime = function(times, N, K) {
    const time = Array(N+1).fill(Infinity);
    time[K] = 0;
    let changing = true;
    for(let i = 0; i < N; i++) {
        if (changing === false) break;
        changing = false;
        for(const [u, v, w] of times) {
            if (time[u] === Infinity) continue;
            time[v] = Math.min(time[v], time[u] + w);
            changing = true;
        }
    }
    let res = 0;
    for (let i = 1; i <= N; i++) {
        res = Math.max(res, time[i]);
    }
    return res === Infinity ? -1 : res;
};
