/**
 * Search in rotated array
 *
 * @param array {Array}
 * @param n {Number}
 * @return {Number} idx or -1
 */
function rotatedSearch(array, n) {
    if (array[0] <= array[array.length - 1]) {
        return binSearch(array, n, 0, array.length - 1);
    } else {
        let start = 0;
        let end = array.length - 1;
        let divider = -1;
        while (start <= end) {
            const mid = Math.floor((start + end) / 2);
            if (array[mid] > array[mid + 1]) {
                divider = mid;
                break;
            } else if (array[mid] < array[mid + 1] && array[mid] > array[0]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }

        if (n >= array[0] && n <= array[divider]) {
            return binSearch(array, n, 0, divider);
        } else if (n >= array[divider + 1] && n <= array[array.length - 1]) {
            return binSearch(array, n, divider + 1, array.length - 1);
        } else {
            return -1;
        }
    }
}

function binSearch(array, n, start, end) {
    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        if (array[mid] === n) {
            return mid;
        }
        if (array[mid] > n) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return -1;
}

module.exports = rotatedSearch;

