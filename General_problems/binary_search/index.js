
function binarySearch(array, k) {
    if(!array) {
        return undefined
    }

    let start = 0;
    let end = array.length - 1;

    while (start <= end) {
        let idx = Math.floor((end + start) / 2);
        if(array[idx] === k) {
            return idx
        }
        if(array[idx] < k) {
            start = idx + 1;
        } else {
            end = idx - 1;
        }
    }

    return -1
}

function binarySearchRecursive(array, k, start = 0, end = array.length - 1) {
    if(start > end) {
        return -1
    }
    let idx = Math.floor((start + end) / 2);
    if(array[idx] === k) {
        return idx
    }
    if(array[idx] > k) {
        return binarySearchRecursive(array, k, start, idx - 1)
    } else {
        return binarySearchRecursive(array, k, idx + 1, end)
    }
}

module.exports = {
    binarySearch,
    binarySearchRecursive
};
