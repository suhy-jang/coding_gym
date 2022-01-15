const readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const data = [];
rl.on('line', (line) => {
  data.push(line);
  if (data.length >= 2) {
    rl.close();
  }
});

rl.on('close', () => {
  const count = data[0];
  const heights = data[1].split(' ').map((e) => Number(e));
  let maxHeight = 0;

  for (const height of heights) {
    if (height > maxHeight) {
      maxHeight = height;
    } else {
      break;
    }
  }
  console.log(maxHeight);
  rl.close();
  process.exit();
});
