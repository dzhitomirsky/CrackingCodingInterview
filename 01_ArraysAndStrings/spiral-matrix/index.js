/**
 * Convert matrix to spiral array
 *
 * @param matrix {Array{Array{Number}}}
 */
function makeSpiral(matrix) {
    let N = matrix.length;
    let M = matrix[0].length;
    const res = [];
    let counter = 0;
    for (let l = 0; l < N / 2; l++) {
        for (let j = l; j < M - l; j++) {
            res.push(matrix[l][j]);
            counter++;
        }
        if (counter === N * M) {
            break;
        }

        for (let i = l + 1; i < N - l; i++) {
            res.push(matrix[i][M - l - 1]);
            counter++;
        }
        if (counter === N * M) {
            break;
        }

        for (let j = M - l - 2; j >= l; j--) {
            res.push(matrix[N - l - 1][j]);
            counter++;
        }
        if (counter === N * M) {
            break;
        }

        for (let i = N - l - 2; i > l; i--) {
            res.push(matrix[i][l]);
            counter++;
        }
    }

    return res;
}

module.exports = makeSpiral;
