function generateSimilarWords(word) {
    const similarWords = new Set();

    for (let i = 0; i < word.length; i++) {
        for (let j = i + 1; j < word.length; j++) {
            const wordArray = [...word];
            let tmp = wordArray[i];
            wordArray[i] = wordArray[j];
            wordArray[j] = tmp;
            similarWords.add(wordArray.join(''));
        }
    }

    return [...similarWords];
}




function countSimilarityGroups(words) {
    let groupsCount = 0;
    const wordsSet = new Set(words);

    words.forEach(w => {
        if(!wordsSet.has(w)) {
            return;
        }
        groupsCount ++;
        const queue = [w];
        while(queue.length !== 0) {
            const word = queue.pop();
            wordsSet.delete(word);
            generateSimilarWords(word)
                .filter(w => wordsSet.has(w))
                .forEach(w => queue.push(w))
        }
    });

    return groupsCount;
}


module.exports = countSimilarityGroups;
