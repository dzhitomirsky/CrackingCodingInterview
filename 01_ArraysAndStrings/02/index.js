/**
 * Check whether the the second string is a permutation of the first one
 *
 * @param strA {string}
 * @param strB {string}
 * @returns {boolean}
 */
module.exports = function isPermutationOf(strA, strB) {
    if(!strA || !strB || strA.length !== strB.length) {
        return false;
    }

    const stringALetters = [...strA].reduce((acc, letter) => ({
        ...acc,
        [letter]: !acc[letter]? 1 : acc[letter] + 1
    }), {});

    const stringBLetters = [...strB].reduce((acc, letter) => ({
        ...acc,
        [letter]: !acc[letter]? 1 : acc[letter] + 1
    }), {});

    Object.keys(stringALetters).forEach(letter => {
        if(stringBLetters[letter]) {
            stringBLetters[letter] = stringBLetters[letter] - stringALetters[letter];
        }
    });

    return Object.values(stringBLetters).filter(v => v !== 0).length === 0
};
