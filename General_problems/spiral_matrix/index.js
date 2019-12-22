/**
 * Create square spiral matrix of size n
 * @param n {Number}
 */
function spiralMatrix(n) {
    const matrix = new Array(n).fill(0).map(() => new Array(n).fill(0));
    let idx = 0;
    let elem = 0;

    while (idx < n / 2) {
        for (let j = idx; j < n - idx; j++) {
            matrix[idx][j] = ++elem;
        }

        for (let i = idx + 1; i < n - idx; i++) {
            matrix[i][n - idx - 1] = ++elem;
        }

        for (let j = n - idx - 2; j >= idx; j--) {
            matrix[n - idx - 1][j] = ++elem;
        }

        for (let i = n - idx - 2; i > idx; i --) {
            matrix[i][idx] = ++elem;
        }

        idx++;
    }


    return matrix;
}

spiralMatrix(5).forEach(r => console.log(r));
