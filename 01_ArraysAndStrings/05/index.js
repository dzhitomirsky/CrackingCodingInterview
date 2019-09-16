/**
 * OneWay
 *
 * @param original {string}
 * @param changed {string}
 * @return {boolean}
 */
module.exports = function oneWay(original, changed) {
   if(Math.abs(original.length - changed.length) > 1) {
       return false
   }

   if(original.length === changed.length){
       return checkReplace(original, changed);
   }

   if(original.length > changed.length) {
       return checkDeletion(original, changed)
   }

   if(original.length < changed.length) {
       return checkAddition(original, changed)
   }

   return false
};

/**
 * Check for added letter
 *
 * @param original {string}
 * @param changed {string}
 * @return {boolean}
 */
function checkAddition(original, changed) {
    let idxO = 0;
    let idxC = 0;

    while(idxO < original.length && idxC < changed.length) {
        if(original[idxO] === changed[idxC]) {
            idxO ++;
            idxC ++;
        } else {
            idxC ++;
        }
    }

    return idxC - idxO <= 1;
}

/**
 * Check for deleted letter
 *
 * @param original {string}
 * @param changed {string}
 * @return {boolean}
 */
function checkDeletion(original, changed) {
    let idxO = 0;
    let idxC = 0;
    while(idxO < original.length && idxC < changed.length) {
        if(original[idxO] === changed[idxC]) {
            idxO ++;
            idxC ++;
        } else {
            idxO ++;
        }
    }

    return idxO - idxC <= 1;
}

/**
 * Check for replaced letter
 *
 * @param original {string}
 * @param changed {string}
 * @return {boolean}
 */
function checkReplace(original, changed) {
    let diffCount = 0;
    for (let idx = 0; idx < original.length; idx ++) {
        if(original[idx] !== changed[idx]) {
            diffCount ++;
        }
    }

    return diffCount <= 1;
}
