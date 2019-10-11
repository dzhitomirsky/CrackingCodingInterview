/**
 * Fill area
 *
 * @param image {Array{Array{Number}}}
 * @param startPoint {Array{Number}} e.g. [0,1]
 * @param newColor {Number}
 */
function fillArea(image, startPoint, newColor) {
    if (!image || !image[0]) {
        return undefined
    }

    const originalColor = image[startPoint[0]][[startPoint[1]]];
    const visited = new Set();

    function belongsToImage(i, j) {
        if ((i > image.length - 1 || i < 0) || (j > image[0].length - 1 || j < 0)) {
            return false
        }
        return true
    }

    function fillPoint(point) {
        visited.add(point.join('_'));

        if (image[point[0]][point[1]] !== originalColor) {
            return;
        }

        image[point[0]][[point[1]]] = newColor;
        if (!visited.has([point[0] + 1, point[1]].join('_')) && belongsToImage(point[0] + 1, point[1])) {
            fillPoint([point[0] + 1, point[1]]);
        }
        if (!visited.has([point[0] - 1, point[1]].join('_')) && belongsToImage(point[0] - 1, point[1])) {
            fillPoint([point[0] - 1, point[1]]);
        }
        if (!visited.has([point[0], point[1] + 1].join('_')) && belongsToImage(point[0], point[1] + 1)) {
            fillPoint([point[0], point[1] + 1]);
        }
        if (!visited.has([point[0], point[1] - 1].join('_')) && belongsToImage(point[0], point[1] - 1)) {
            fillPoint([point[0], point[1] - 1]);
        }
    }

    fillPoint(startPoint);
}

module.exports = fillArea;
