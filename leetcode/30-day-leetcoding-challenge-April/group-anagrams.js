/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function(strs) {
    const anagrams = {};
    strs.forEach(str => {
        const word = str.split('').sort().join('');
        if (anagrams[word]) {
            anagrams[word].push(str);
        } else {
            anagrams[word] = [str];
        }
    });
    return Object.values(anagrams);
};

