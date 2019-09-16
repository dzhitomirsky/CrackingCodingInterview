/**
 * Using additional object we can get O(n)
 */
function isUnique(string) {
    const cache = {};
    for(let idx in string) {
        debugger
        if(cache[string[idx]] === string[idx]) {
            return false;
        }
        cache[string[idx]] = string[idx];
    }

    return true;
}


/**
 * Without additional cache object we can get only O(NlogN)
 */
function isUniqueWithNoAdditionDataStructures(string) {
    const sorted = [...string].join('');
    for(let idx = 1; idx < sorted.length; idx ++) {
        if(sorted[idx - 1] === sorted[idx]) {
            return false;
        }
    }
    return true
}

module.exports = {
    isUnique,
    isUniqueWithNoAdditionDataStructures
};

