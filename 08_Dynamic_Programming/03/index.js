/**
 * Find index where input[i] === i
 *
 * @param input {Array} of sorted uniqeu numbers
 */
function findMagicIndex(input) {

    function find(input, idx) {
        if (input.length === 1) {
            return input[0] === idx ? idx : undefined;
        } else {
            if (input[Math.floor(input.length / 2)] === idx) {
                return idx;
            } else {
                if (input[Math.floor(input.length / 2)] < idx) {
                    return find(input.slice(Math.floor(input.length / 2) + 1, input.length), Math.floor(idx + idx / 2))
                } else {
                    return find(input.slice(0, Math.floor(input.length / 2)), Math.floor(idx / 2))
                }
            }
        }
    }

    return find(input, input.length / 2);
}

module.exports = findMagicIndex;
