/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    if (!wordList.includes(endWord)) return 0;
    
    const l = beginWord.length;
    
    const allComboDict = new Map();
    
    wordList.forEach(word => {
        for (let i = 0; i < l; i++) {
            const newWord = word.substr(0, i) + '*' + word.substr(i+1,l);
            const transformations = allComboDict.has(newWord) ? allComboDict.get(newWord) : [];
            transformations.push(word);
            allComboDict.set(newWord, transformations);
        }
    });
    
    const q = [];
    q.push([beginWord, 1]);
    
    const visited = new Map();
    visited.set(beginWord, true);
    
    while(q.length > 0) {
        const [word, level] = q.shift();
        for (let i = 0; i < l; i++) {
            const newWord = word.substr(0, i) + '*' + word.substr(i+1, l);
            if (!allComboDict.has(newWord)) continue;
            for (const adjacentWord of allComboDict.get(newWord)) {
                if (adjacentWord === endWord) {
                    return level + 1;
                }
                if (!visited.has(adjacentWord)) {
                    visited.set(adjacentWord, true);
                    q.push([adjacentWord, level + 1]);
                }
            }
        }
    }
    return 0;
};
