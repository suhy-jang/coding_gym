const readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const data = [];
let n, q;
rl.on('line', (line) => {
  data.push(line);
  if (data.length >= 2) {
    if (!q) {
      [n, q] = data[0].split(' ').map((e) => Number(e));
    }
    if (data.length >= q + 2) {
      rl.close();
    }
  }
});

rl.on('close', () => {
  const a = data[1].split(' ').map((e) => Number(e));
  const res = [];
  const N = 1000000001;
  const cases = [];
  for (let j = 0; j < a.length; j++) {
    const number = a[j];
    if (!cases[number]) {
      cases[number] = [];
    }
    cases[number].push(j + 1);
  }

  for (let i = 2; i < data.length; i++) {
    const [number, index] = data[i].split(' ').map((e) => Number(e));
    let value = -1;
    if (cases[number] && cases[number][index - 1]) {
      value = cases[number][index - 1];
    }
    res.push(value);
  }
  console.log(res.join('\n'));
  rl.close();
  process.exit();
});
