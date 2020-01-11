const Trie = function() {
    this.root = new Map();
};

Trie.prototype.insert = function(word) {
    let currentNode = this.root;
    for (let ch of word) {
        if (!currentNode.get(ch)) currentNode.set(ch, new Map());
        currentNode = currentNode.get(ch);
    }
    currentNode.isTerminal = true;
};

Trie.prototype.search = function(word) {
    let currentNode = this.root;
    for (let ch of word) {
        currentNode = currentNode.get(ch);
        if (currentNode === undefined) return false;
    }
    return !!currentNode.isTerminal;
};

Trie.prototype.startsWith = function(prefix) {
    let currentNode = this.root;
    for (let ch of prefix) {
        currentNode = currentNode.get(ch);
        if (currentNode === undefined) return false;
    }
    return true;
};
