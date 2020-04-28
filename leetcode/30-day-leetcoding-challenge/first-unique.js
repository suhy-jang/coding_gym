/**
 * @param {number[]} nums
 */
const FirstUnique = function(nums) {
    this.uniqueList = [];
    this.set = new Set;
    for(const n of nums) {
        this.add(n);
    }
};

/**
 * @return {number}
 */
FirstUnique.prototype.showFirstUnique = function() {
    if (this.uniqueList.length === 0) return -1;
    return this.uniqueList[0];
};

/** 
 * @param {number} value
 * @return {void}
 */
FirstUnique.prototype.add = function(value) {
    if (!this.set.has(value)) {
        this.set.add(value);
        this.uniqueList.push(value);
    } else {
        const idx = this.uniqueList.indexOf(value);
        this.uniqueList.splice(idx, 1);
    }
};

/** 
 * Your FirstUnique object will be instantiated and called as such:
 * var obj = new FirstUnique(nums)
 * var param_1 = obj.showFirstUnique()
 * obj.add(value)
 */
