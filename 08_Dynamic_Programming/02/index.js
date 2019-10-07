/**
 * Find path in grid
 *
 * @param grid {Array{Array{Number}}}
 * @return Array{Number} | undefined
 */
function findGridPath(grid) {
    function step(i, j, route = []) {
        if (!grid[i] || !grid[i][j]) {
            return undefined;
        }
        route.push([i, j]);
        if (i === grid.length - 1 && j === grid[0].length - 1) {
            return route;
        }

        return step(i + 1, j, [...route]) || step(i, j + 1, [...route]);
    }

    return step(0, 0);
}

module.exports = findGridPath;
