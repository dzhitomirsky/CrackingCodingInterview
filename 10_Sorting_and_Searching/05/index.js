/**
 * Sparse search
 *
 * @param strings {Array{String}}
 * @param str {String}
 * @return {Number}
 */
function sparseSearch(strings, str) {
    let start = 0;
    let end = strings.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        let midStr = strings[mid];
        if (strings[mid].length === 0) {
            let nearestIdx = -1;
            let idx = 1;
            while (mid - idx > -1 || mid + idx < strings.length) {
                if (strings[mid - idx] && strings[mid - idx].length !== 0) {
                    nearestIdx = mid - idx;
                    break
                }
                if (strings[mid + idx] && strings[mid + idx].length !== 0) {
                    nearestIdx = mid + idx;
                    break
                }
                idx++;
            }
            if (nearestIdx === -1) {
                return -1;
            }
            mid = nearestIdx;
            midStr = strings[nearestIdx];
        }
        if (midStr === str) {
            return mid;
        } else if (str.localeCompare(midStr) > 0) {
            start = mid + 1
        } else {
            end = mid - 1;
        }
    }
    return -1;
}

module.exports = sparseSearch;
