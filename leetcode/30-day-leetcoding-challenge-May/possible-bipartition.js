let graph = []
let colors = new Map
/**
 * @param {number} N
 * @param {number[][]} dislikes
 * @return {boolean}
 */
const dfs = function(node, c) {
    if (colors.has(node)) return colors.get(node) === c

    colors.set(node, c)
    for (const nachbar of graph[node]) {
        if (!dfs(nachbar, c ^ 1)) {
            return false;
        }
    }
    return true;
}

const possibleBipartition = function(N, dislikes) {
    graph = new Array(N+1)
    for (let i = 1; i <= N; i++) {
        graph[i] = new Array
    }
    for (const [first, second] of dislikes) {
        graph[first].push(second);
        graph[second].push(first);
    }
    colors = new Map
    for (let node = 1; node <= N; node++) {
        if (!colors.has(node) && !dfs(node, 0)) {
            return false;
        }
    }
    return true;
};

// 4
// [[1,2],[3,4],[1,4],[2,3]]
