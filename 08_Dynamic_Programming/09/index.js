/**
 * Give all possible options of parenthesis string
 *
 * @param number {Number}
 */
function parens(number) {
    const toId = (parensString) => parensString.map(v => v? v : ' ').join('');
    const empty = new Array(number * 2).fill(undefined);

    const queue = {[toId(empty)]: empty};
    const options = [];


    while (Object.keys(queue).length !== 0) {
        const branch = queue[Object.keys(queue)[0]];
        delete queue[Object.keys(queue)[0]];

        const emptyCellIdx = branch.indexOf(undefined);
        if(emptyCellIdx === -1) {
            options.push(branch);
        } else {
            for(let i = emptyCellIdx + 1; i < branch.length; i = i + 2) {
                if(!branch[i]){
                    let newBranch = [...branch];
                    newBranch[emptyCellIdx] = '(';
                    newBranch[i] = ')';
                    queue[toId(newBranch)] = newBranch;
                }
            }
        }
    }

    return options.map(seq => seq.join(''));
}

module.exports = parens;
