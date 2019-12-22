function findShortest(graphNodes, graphFrom, graphTo, ids, val) {
    const graph = buildAdjacencyMatrix(graphNodes, graphFrom, graphTo);

    return ids
        .map((color, node) => ({color, node}))
        .filter(({color}) => color === val)
        .reduce((result, {node}) =>
                Math.min(
                    result,
                    findNearestWithTheSameColor(graph, node, val, ids)),
            Number.MAX_SAFE_INTEGER
        );
}

function findNearestWithTheSameColor(graph, start, search, colors) {
    const nodes = colors.map((c, idx) => ({
        color: c,
        source: c === search ? idx : -1,
        dist: c === search ? 0 : -1,
        idx
    }));
    const q = [];

    nodes
        .filter(({color}) => color === search)
        .forEach(n => q.push(n));

    while (q.length !== 0) {
        const node = q.shift();
        for(let adjIdx in graph[node.idx]) {
            if(graph[node.idx][adjIdx] === 1) {
                if (nodes[adjIdx].source !== nodes[node.idx].source) {
                    if (nodes[adjIdx].source > 0) {
                        return nodes[adjIdx].dist + nodes[node.idx].dist + 1;
                    } else {
                        nodes[adjIdx].source = nodes[node.idx].source;
                        nodes[adjIdx].dist = nodes[node.idx].dist + 1;

                        q.push(nodes[adjIdx]);
                    }
                }
            }
        }
    }

    return -1;
}

function buildAdjacencyMatrix(size, grapthFrom, grapthTo) {
    const matrix = new Array(size)
        .fill(0).map(() => new Array(size).fill(0));

    grapthFrom.forEach((n, idx) => {
        matrix[n - 1][grapthTo[idx] - 1] = 1;
        matrix[grapthTo[idx] - 1][n - 1] = 1;
    });

    return matrix;
}


let r = findShortest(4, [1, 2, 3], [2, 3, 4], [1, 2, 2, 1], 1);

console.log(r);
