/**
 * Rotate matrix
 *
 * @param matrix {Array<Array<Number>>>}
 * @return {Array<Array<Number>>>}
 */
module.exports = function rotate(matrix) {
    const copy = matrix.map(row => [...row]);

    for(let i = 0; i < matrix.length; i ++) {
        for(let j = 0; j < matrix.length; j ++) {
            copy[j][matrix.length - 1 - i] = matrix[i][j];
        }
    }

    return copy;
};


