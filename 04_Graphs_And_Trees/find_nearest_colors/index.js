function findShortest(graphNodes, graphFrom, graphTo, ids, val) {
    const graph = buildAdjacencyNodes(buildAdjacencyMatrix(graphNodes, graphFrom, graphTo), ids);

    return findNearestWithTheSameColor(graph, val);
}

function findNearestWithTheSameColor(nodes, search) {
    const q = [];
    nodes.forEach((node, idx) => {
        if (node.color === search) {
            node.dist = 0;
            node.source = idx;
            q.push(idx);
        }
    });

    while (q.length !== 0) {
        let nodeIdx = q.shift();
        for (let adjIdx of nodes[nodeIdx].adjacent) {
            if (nodes[adjIdx].source !== nodes[nodeIdx].source) {
                if (nodes[adjIdx].source > 0) {
                    return nodes[adjIdx].dist + nodes[nodeIdx].dist + 1;
                } else {
                    nodes[adjIdx].source = nodes[nodeIdx].source;
                    nodes[adjIdx].dist = nodes[nodeIdx].dist + 1;

                    q.push(adjIdx);
                }
            }
        }
    }

    return -1;
}

function buildAdjacencyMatrix(size, graphFrom, graphTo) {
    const matrix = new Array(size)
        .fill(0).map(() => new Array(size).fill(0));

    graphFrom.forEach((n, idx) => {
        matrix[n - 1][graphTo[idx] - 1] = 1;
        matrix[graphTo[idx] - 1][n - 1] = 1;
    });

    return matrix;
}

function buildAdjacencyNodes(adjMatrix, colors) {
    return adjMatrix.map((row, idx) => ({
        color: colors[idx],
        adjacent: row
            .map((v, i) => ({v, i}))
            .filter(({v}) => !!v)
            .map(({i}) => i),
        dist: -1,
        source: -1
    }))
}


let r = findShortest(4, [1, 2, 3], [2, 3, 4], [1, 2, 3, 1], 1);

console.log(r);
