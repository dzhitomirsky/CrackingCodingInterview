/**
 * Perform listy search
 *
 * @param listy {Listy}
 * @param n {Number}
 * @return {Number}
 */
function listySearch(listy, n) {
    let start = 0;
    let end = 1;
    while (listy.elementAt(end) !== -1) {
        end = end * 2;
    }

    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        if (listy.elementAt(mid) === n) {
            return mid;
        }
        if (listy.elementAt(mid) > n || listy.elementAt(mid) === -1) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return -1;
}

module.exports = listySearch;
