/**
 * Merge sorted array in increasing order
 * @param a {Array}
 * @param b {Array}
 */
function sortedMerge(a, b) {
    let mergedIdx = a.length - 1;

    let bIdx = b.length - 1;
    let aIdx = a.length - b.length - 1;

    while (mergedIdx >= 0) {
        let aVal = a[aIdx]? a[aIdx] : Number.MIN_VALUE;
        let bVal = b[bIdx]? b[bIdx] : Number.MIN_VALUE;

        if(aVal > bVal){
            a[mergedIdx] = aVal;
            aIdx--;
        } else {
            a[mergedIdx] = bVal;
            bIdx--;
        }
        mergedIdx --;
    }
}

module.exports = sortedMerge;
