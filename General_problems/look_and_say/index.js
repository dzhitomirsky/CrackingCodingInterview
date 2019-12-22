/**
 * Get n'th look and say expression
 *
 * @param n
 */
function lookAndSay(n) {
    let count = 1;
    let expression = [1];

    while (count !== n) {
        expression = expression.reduce((acc, value) => {
            if(acc[acc.length - 1] && acc[acc.length - 1].value === value) {
                acc[acc.length - 1].count += 1;
            } else {
                acc.push({
                    value,
                    count: 1
                });
            }
            return acc;
        }, []).reduce((acc, {value, count}) => {
            acc.push(count);
            acc.push(value);
            return acc;
        }, []);

        count++;
    }

    return expression.join('');
}

module.exports = lookAndSay;
