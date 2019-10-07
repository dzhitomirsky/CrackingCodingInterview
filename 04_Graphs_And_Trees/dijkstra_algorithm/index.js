/**
 * Find the shortest path from to using Dijkstra's algorithm
 *
 * @param graph {Array{Array{Number}}}
 * @param from {Number} start vertex idx
 * @param to {Number} end vertex idx
 */
function findShortestPath(graph, from, to) {
    const prev = {};
    const pathWeights = {};
    graph.forEach((_, idx) => {
        pathWeights[idx] = (idx === from) ? 0 : Number.MAX_SAFE_INTEGER;
    });
    let remaining = Object
        .keys(pathWeights)
        .map(k => ({node: k, priority: pathWeights[k]}))
        .sort((a, b) => b.priority - a.priority);

    while (remaining.length !== 0) {
        const {node, priority} = remaining.pop();
        graph[node].forEach((weight, nodeIdx) => {
            if(weight !== undefined){
                if(priority + weight < pathWeights[nodeIdx]) {
                    pathWeights[nodeIdx] = priority + weight;
                    prev[nodeIdx] = node;
                    remaining = recalculateRemaining(remaining, pathWeights)
                }
            }
        })
    }

    const route = [];
    let prevNode = to;
    while (prevNode) {
        route.push(parseInt(prevNode));
        prevNode = prev[prevNode]
    }

    return route.reverse();
}

function recalculateRemaining(remaining, pathWeights) {
    return remaining.map(({node}) => ({
        node,
        priority: pathWeights[node]
    })).sort((a, b) => b.priority - a.priority);
}

module.exports = findShortestPath;
