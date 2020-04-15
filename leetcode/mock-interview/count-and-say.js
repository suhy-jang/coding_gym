/**
 * @param {number} n
 * @return {string}
 */
const countAndSay = function(n) {
    let say = '1';
    while(--n > 0) {
      let nextSay = '';
      let cnt = 0;
      for(let i = 0; i < say.length; i++) {
        if (i+1 < say.length && say[i] === say[i+1]) {
          cnt += 1;
        } else {
          nextSay += `${cnt+1}${say[i]}`;
          cnt = 0;
        }
      }
      say = nextSay;
    }
    return say;
};

// const x = countAndSay(1);
// const x = countAndSay(6);
// console.log(x);
