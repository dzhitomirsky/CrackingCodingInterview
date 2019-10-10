function multiply(a, b, memo = {}) {
    const greater = b > a ? b : a;
    const less = a > b ? b : a;

    if (!a || !b) {
        return 0;
    }

    if (memo[`${less}_${greater}`]) {
        return memo[`${less}_${greater}`];
    }

    let powOfTwo = 0;
    for (let i = 2; i <= less; i = i * 2) {
        powOfTwo += 1;
    }
    let timesTaken = 1 << powOfTwo;
    let timesRemain = less - timesTaken;

    let partialResult = greater << powOfTwo;

    if (timesRemain === 0) {
        return partialResult;
    } else {
        memo[`${less}_${greater}`] = partialResult + multiply(greater, timesRemain);
        return memo[`${less}_${greater}`];
    }
}

module.exports = multiply;
