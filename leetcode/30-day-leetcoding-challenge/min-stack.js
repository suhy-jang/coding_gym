/**
 * initialize your data structure here.
 */
const MinStack = function() {
    this.saves = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    const currMin = this.saves.length > 0 ? Math.min(this.saves[0].min, x) : x;
    this.saves.unshift({min: currMin, val: x});
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    return this.saves.length > 0 ? this.saves.shift().val : '';
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.saves.length > 0 ? this.saves[0].val : '';
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.saves.length > 0 ? this.saves[0].min : '';
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
