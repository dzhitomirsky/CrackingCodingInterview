function getRouteToRoot(node) {
    const route = [];
    while(node) {
        route.push(node);
        node = node.parent
    }
    return route;
}

/**
 * Get first common n1 & n2 ancestor
 *
 * @param node1 {TreeNode}
 * @param node2 {TreeNode}
 * @returns {Number}
 */
function getCommonAncestor(node1, node2) {
    const route1 = getRouteToRoot(node1);
    const route2 = getRouteToRoot(node2);

    const shorter = route1.length > route2.length? route2 : route1;
    const longer = route1.length > route2.length? route1 : route2;

    const lenDiff = longer.length - shorter.length;

    for (let i = 0; i < Math.min(route1.length, route2.length); i++) {
        if (longer[i + lenDiff] === shorter[i]) {
            return shorter[i];
        }
    }

    throw new Error('Nodes do no have common ancestor');
}

module.exports = getCommonAncestor;
