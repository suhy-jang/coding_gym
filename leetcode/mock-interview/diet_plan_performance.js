/**
 * @param {number[]} calories
 * @param {number} k
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
const dietPlanPerformance = function(calories, k, lower, upper) {
    let score = 0
    const n = calories.length
    
    for(let i = 0; i <= n - k; i++) {
        let sum = 0
        for(let j = i; j < i+k; j++) {
            sum += calories[j]
        }
        if (sum < lower) {
            score -= 1
        } else if (sum > upper) {
            score += 1
        }
    }
    return score
};
