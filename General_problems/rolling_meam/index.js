/**
 * Write a function which takes an array and returns another array of same size which contains the
 * rolling mean with window size k.
 *
 * A    [ 1    2      3      4    5    6     7   8] . k=3
 * Out:   1 .  1.5    2      3 .  4 .  5     6 . 7
 * @param array Array{Number}
 * @param k{Number}
 */
function rollingMean(array, k) {
    if(k <= 0 || !array) {
         throw new Error('Invalid input');
    }
    const result = [];
    for(let i = 0; i < array.length; i++) {
        let sum = 0;
       if(k - 1 > i) {
           for(let j = 0; j <= i; j ++) {
               sum += array[j];
           }
           result[i] = sum / (i + 1);
       } else {
           for(let j = i - (k - 1); j <= i; j ++) {
               sum += array[j];
           }
           result[i] = sum / k;
       }
    }

    return result;
}

module.exports = rollingMean;
