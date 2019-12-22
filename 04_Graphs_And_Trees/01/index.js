const {Node} = require('../graph');
/**
 * Determine if there is route between 2 nodes in directed graph
 *
 * @param node1 {Node}
 * @param node2 {Node}
 */
function findRoute(node1, node2) {

    let root = node1;
    const q = [];

    root.visited = true;
    q.push(root);
    //start BFS
    while (q.length !== 0 ) {
        const next = q.shift();
        if(next === node2) {
            return true;
        } else {
            next.relatives
                .filter(r => !r.visited)
                .map(n => {
                    n.visited = true;
                    return n;
                })
                .forEach(n => q.push(n));
        }
    }

    return false;
}

module.exports = findRoute;
