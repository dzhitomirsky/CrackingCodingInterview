/**
 * Merge sort
 *
 * @param array {Array}
 * @return {Array} sorted
 */
function mergeSort(array) {
    if(array.length < 2) {
        return array;
    }

    const mid = Math.floor(array.length / 2);
    return merge(
        mergeSort(array.slice(0, mid)),
        mergeSort(array.slice(mid, array.length))
    );
}

/**
 * Merge a1 & a2 in ascending order
 *
 * @param a1 {Array}
 * @param a2 {Array}
 */
function merge(a1, a2) {
    const merged = [];
    let idx1 = 0;
    let idx2 = 0;

    while (idx1 < a1.length || idx2 < a2.length) {
        let el1 = idx1 < a1.length ? a1[idx1] : Number.MAX_VALUE;
        let el2 = idx2 < a2.length ? a2[idx2] : Number.MAX_VALUE;
        if(el1 < el2) {
            merged.push(el1);
            idx1 ++;
        } else {
            merged.push(el2);
            idx2 ++;
        }
    }

    return merged;
}


module.exports = mergeSort;
