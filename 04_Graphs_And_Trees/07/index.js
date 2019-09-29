const {Node} = require('../graph');

/**
 * Find next nodes to build
 *
 * @param graph {Array{Node}}
 */
function getBuildableNodes(graph) {
    return graph.filter(node => node.relatives.length === 0);
}

/**
 * Utility function to build grapth strucuture

 * @param projects {Array{String}}
 * @param dependencies {Array{Array{String}}}
 * @return {Array{Node}}
 */
function buildGraph(projects, dependencies) {
    return projects.map(project => {
        const node = new Node(project);
        dependencies.forEach(([dep, p]) => {
            if(p === project) {
                node.relatives.push(new Node(dep));
            }
        });
        return node;
    });
}

/**
 * Calculate build order
 *
 * @param projects {Array{String}}
 * @param dependencies {Array{Array{String}}}
 * @return {Array{String}}
 */
function getBuildOrder(projects, dependencies) {
    let dependencyGraph = buildGraph(projects, dependencies);
    const buildQueue = [];
    let nextToBuild = getBuildableNodes(dependencyGraph);

    while (buildQueue.length !== projects.length && nextToBuild.length !== 0) {
        const nextProjects = nextToBuild.map(n => n.value);
        nextProjects.forEach(p => buildQueue.push(p));
        dependencyGraph = dependencyGraph.filter(n => !nextProjects.includes(n.value));
        dependencyGraph.forEach(node =>
            node.relatives = node.relatives.filter(dep => !nextProjects.includes(dep.value))
        );
        nextToBuild = getBuildableNodes(dependencyGraph);
    }
    if(buildQueue.length === projects.length) {
        return buildQueue;
    } else {
        throw new Error("Can't calculate build order.")
    }
}


module.exports = getBuildOrder;
