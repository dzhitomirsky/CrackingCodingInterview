/**
 * Calculate square root of number
 *
 * @param number
 * @returns {number}
 */
function sqrt(number) {
    if (!number) {
        return number
    }
    const eps = 0.0001;
    let n = number / 2;
    let delta = n;

    while (Math.abs(n * n - number) > eps) {
        delta = delta / 2;
        if (n * n < number) {
            n = n + delta;
        } else {
            n = n - delta;
        }
    }

    return n;
}

module.exports = sqrt;
