
var StockSpanner = function() {
    this.prices = [];
    this.weights = [];
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    let w = 1;
    while (this.prices.length > 0 && this.prices[0] <= price) {
        this.prices.shift();
        w += this.weights.shift();
    }
    this.prices.unshift(price);
    this.weights.unshift(w);
    return w;
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
