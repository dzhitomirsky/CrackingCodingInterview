/**
 * Get all possible permutations of string with unique chars
 *
 * @param string
 * @returns {Array{string}}
 */
function permutationWithoutDuplicates(string) {
    if (!string) {
        return undefined
    }
    if (string.length === 1) {
        return [string];
    }

    const permutations = [];

    for (let i = 0; i < string.length; i++) {
        let first = string[0];
        let ith = string[i];

        let [firstLetter, ...rest] = string.replace(string[i], string[0]).replace(first, ith);

        permutations.push(...permutationWithoutDuplicates(rest.join('')).map(p => `${firstLetter}${p}`));
    }

    return permutations;
}

module.exports = permutationWithoutDuplicates;
