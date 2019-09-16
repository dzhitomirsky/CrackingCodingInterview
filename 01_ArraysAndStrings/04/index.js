/**
 * Palindrome permutation string
 *
 * @param string {string}
 * @return {boolean}
 */
function palindromePermutation(string) {
    const filteredString = [...string.toLowerCase()]
        .filter(letter => letter.match(/[a-zA-z]/));
    const letterCount = filteredString
        .reduce((acc, letter) => ({
        ...acc,
        [letter]: acc[letter] ? acc[letter] + 1 : 1
    }), {});

    const oddLetterCounts = Object.values(letterCount).filter(count => count % 2 !== 0);

    return filteredString.length % 2 === 0 ? oddLetterCounts.length === 0 : oddLetterCounts.length === 1;
}

module.exports = palindromePermutation;
