/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function(n, connections) {
    var graph = new Array(n);
    var result = 0;
    var visited = new Array(n);
    
    for (let i = 0;i < n;i++) {
        graph[i] = new Set();
    }
    
    var curr;
    var queue = [];
    for (let i = 0; i< connections.length; i++)
    {
        curr = connections[i];
        graph[curr[0]].add(curr[1]);
        graph[curr[1]].add(-curr[0]);
    }
    
    queue.push(0);
    
    while(queue.length > 0) {
        var node = queue.shift();
        visited[node] = true;
        var children = graph[node];
            children.forEach((val) => {
            if (!visited[Math.abs(val)]) {
                if (val > 0) {
                    result++;
                }
                queue.push(Math.abs(val));    
            }
        });
    }
    
    return result;
};  
