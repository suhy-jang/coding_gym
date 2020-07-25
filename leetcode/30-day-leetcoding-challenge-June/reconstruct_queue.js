const listAdd = function(list, h, k) {
    let i = 0, j = 0
    while(i < list.length && j <= k) {
        if (!list[i] || list[i][0] >= h) j++
        i++
    }
    list.splice(i-1, 1, [h, k])
}


/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    people = people.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0])
    
    let list = new Array(people.length)

    for(const [h, k] of people) {
        listAdd(list, h, k)
    }
    return list
};
 
