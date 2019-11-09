/**
 * Quick sort implementation
 *
 * @param {Array}
 * @returns {Array}
 */
function quickSort(array) {
    const copy = [...array];
    quick_sort(copy, 0, array.length - 1);
    return copy;
}

function quick_sort(array, left, right) {
    let index = partition(array, left, right);
    if(left < index - 1) {
        quick_sort(array, left, index - 1);
    }
    if(right > index){
        quick_sort(array, index, right);
    }
}

/**
 * Get partition point
 *
 * @param array {Array}
 * @param left {Number}
 * @param right {Number}
 * @return {Number}
 */
function partition(array, left, right) {
    const pivot = array[Math.floor((right + left) / 2)];
    while (left <= right) {
        while (array[left] < pivot){
            left ++;
        }
        while (array[right] > pivot){
            right --;
        }

        if(left <= right) {
            let tmp = array[left];
            array[left] = array[right];
            array[right] = tmp;

            left++;
            right--;
        }
    }

    return left;
}


module.exports = quickSort;
