/**
 * Sort the array of string to have anagrams one near each other
 *
 * @param strings {Array{String}}
 */
function anagramSort(strings) {

   let sortedToIdx = strings.map((str, idx) => ({
       str: [...str].sort(),
       originalStr: str,
       idx
   }));

   return sortedToIdx.sort((s1,s2) => {
        if(s1.str.length > s2.str.length) {
            return s2;
        } else if(s1.str.length < s2.str.length) {
            return s1
        } else {
            for(let i = 0; i< s1.str.length; i++) {
                const cmpRes = s1.str[i].charCodeAt(0) - s2.str[i].charCodeAt(0);
                if(cmpRes !== 0) {
                    return cmpRes;
                }
            }
            return 0;
        }
   }).map(({originalStr}) => originalStr);
}

module.exports = anagramSort;
