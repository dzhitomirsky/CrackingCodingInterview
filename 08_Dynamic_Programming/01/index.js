/**
 * Count all possibles ways to hop 1,2,3 steps
 *
 * @param steps {Number}
 */
function countHops(steps) {
    if (!steps || steps <= 0) {
        return 0;
    }

    function hop(steps, memo = {}) {
        if (steps < 0) {
            return 0;
        }

        if (steps === 0) {
            return 1;
        }

        if(memo[steps]) {
            return memo[steps];
        }

        memo[steps] =
            hop(steps - 1, memo) +
            hop(steps - 2, memo) +
            hop(steps - 3, memo);
        return memo[steps];
    }

    return hop(steps);
}

module.exports = countHops;
