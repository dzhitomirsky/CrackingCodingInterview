function levelAvg(root) {
    const levelValues = {};


    function traverse(node, level) {
        if(!node) {
            return;
        }
        if(!levelValues[level]) {
            levelValues[level] = {sum: 0, count: 0};
        }

        levelValues[level].sum += node.value;
        levelValues[level].count += 1;

        traverse(node.left, level + 1);
        traverse(node.right, level + 1);
    }

    traverse(root, 0);

    return Object.values(levelValues).reduce((acc, {sum, count}) => {
        acc.push(sum / count);
        return acc;
    }, []);
}

module.exports = levelAvg;
