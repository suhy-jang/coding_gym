/**
 * @param {number[]} w
 */
var Solution = function(w) {
    this.map = new Map
    this.sum = 0
    for (let i = 0; i < w.length; i++) {
        this.sum += w[i]
        this.map.set(this.sum, i)
    }
    this.keys = [...this.map.keys()].sort((a, b) => a - b)
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
    const target = Math.floor(Math.random() * this.sum)
    for (const key of this.keys) {
        if (target < key) {
            return this.map.get(key)
        }
    }
    
};
