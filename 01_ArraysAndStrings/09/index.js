/**
 * Check if s1 is substring of s2
 * @param s1 {string}
 * @param s2 {string}
 * @returns {boolean}
 */
function isSubstring(s1, s2) {
    return s2.indexOf(s1) !== -1
}

/**
 * Check whether s1 is 'rotation' of s2
 *
 * @param s1 {string}
 * @param s2 {string}
 */
module.exports = function isRotation(s1, s2) {
    if(!s1 || !s2 || s1.length !== s2.length) {
        return false
    }
    return isSubstring(s2, s1 + s1)
};
