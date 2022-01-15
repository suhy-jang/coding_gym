const readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (input) => {
  const data1 = Number(input);
  const data2 = Number(input[1] + input[2] + input[0]);
  const data3 = Number(input[2] + input[0] + input[1]);
  console.log(data1 + data2 + data3);
  rl.close();
});
