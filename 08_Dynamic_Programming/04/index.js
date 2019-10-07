/**
 * Get all possible subsets of set
 *
 * @param set {Array}
 * @return Array{Array}
 */
function getAllSubsets(set, idx = 0) {
    if(idx === set.length) {
        return [[]]
    } else {
        const subsets = getAllSubsets(set, idx + 1);
        const item = set[idx];
        return [...subsets, ...subsets.map(s => [...s, item])]
    }
}

module.exports = getAllSubsets;
