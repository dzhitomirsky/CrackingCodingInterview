/**
 * Replace all spaces with '%20'
 *
 * @param string {string}
 * @param length {number}
 * @returns {string}
 */
function URLify(string, length) {
    return string.substring(0, length).split(' ').join('%20');
}

module.exports = URLify;
