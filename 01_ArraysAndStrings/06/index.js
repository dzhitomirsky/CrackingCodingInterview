/**
 * Compression
 *
 * @param string {string}
 * @return {string}
 */
module.exports = function compress(string) {
    const compressed =  [...string].reduce((acc, letter) => {
        if(acc[acc.length - 1] && acc[acc.length - 1].letter === letter) {
            acc[acc.length - 1].count ++;
        } else {
            acc.push({
                letter: letter,
                count: 1
            })
        }
        return acc
    }, [])
        .map(({letter, count}) => `${letter}${count}`)
        .join('');

    return compressed.length >= string.length? string : compressed
};
