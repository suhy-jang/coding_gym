const memo = Array.from(Array(10), () => new Array(10));

// 1 1 2 3 5 8 (1)3 (2)1
module.exports = function fibonacci(n) {
  let a = 1;
  let b = 1;
  for (let i = 2; i < n; i++) {
    const val = memo[a][b] || (a + b) % 10;
    a = b;
    b = val;
  }
  return b;
};
