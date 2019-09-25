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
        const relatives = q
            .pop()
            .relatives
            .filter(r => !r.visited);

        for(let i = 0; i < relatives.length; i ++) {
            if(relatives[i] === node2) {
                return true;
            } else {
                relatives[i].visited = true;
                q.push(relatives[i]);
            }
        }
    }

    return false;
}

module.exports = findRoute;
