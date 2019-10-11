/**
 * Calculate ways to represent n in 1,5,10,25 cents
 *
 * @param n {number}
 * @return {number}
 */
const PENNY = 1;
const NICKEL = 5;
const DIME = 10;
const QUOTER = 25;

function coins(n) {
    if (!n || n <= 0) {
        return 0;
    }
    const ways = new Set();
    const processedRoutes = new Set();

    function findStep(number = 0, route = []) {
        let stringRoute = route.sort((a, b) => a - b).join(',');

        if (processedRoutes.has(stringRoute)) {
            return;
        }

        if (number > n) {
            return;
        }

        if (n === number) {
            ways.add(stringRoute);
            return;
        }

        findStep(number + PENNY, route.concat(PENNY));
        findStep(number + NICKEL, route.concat(NICKEL));
        findStep(number + DIME, route.concat(DIME));
        findStep(number + QUOTER, route.concat(QUOTER));

        processedRoutes.add(stringRoute);
    }

    findStep();

    return ways.size;
}

module.exports = coins;
