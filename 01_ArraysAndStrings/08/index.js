/**
 * Zero rows & cols of matrix that include 0
 *
 * @param matrix {Array<Array<number>>}
 * @return {Array<Array<number>>}
 */
module.exports = function zeroMatrix(matrix) {
   const rows = new Set();
   const cols = new Set();

   matrix.forEach((row, i) => row.forEach((elem, j) => {
       if(elem === 0) {
           rows.add(i);
           cols.add(j);
       }
   }));

   return matrix.map((row, i) => {
       if(rows.has(i)) {
           return new Array(matrix.length).fill(0)
       } else {
           return row.map((elem, j) => cols.has(j) ? 0 : elem)
       }
   })
};
