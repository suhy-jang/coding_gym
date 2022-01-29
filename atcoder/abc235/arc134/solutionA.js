const readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const data = [];
rl.on('line', (line) => {
  data.push(line.split(' ').map((e) => BigInt(e)));
  if (data.length >= 2) {
    rl.close();
  }
});

rl.on('close', () => {
  const [nn, ll, ww] = data[0];
  const n = BigInt(nn);
  const l = BigInt(ll);
  const w = BigInt(ww);
  const list = data[1];

  let i = 0n;
  let index = 0n;
  let count = 0n;
  while (i < l) {
    if (index < n && i >= list[index]) {
      while (index < n && i >= list[index]) {
        i = list[index] + w;
        index++;
      }
    } else {
      const next = index < n ? list[index] : l;
      const calc = (next - i + w - 1n) / w;
      count += calc;
      i += w * calc;
    }
  }
  console.log(String(count));
  process.exit();
});
