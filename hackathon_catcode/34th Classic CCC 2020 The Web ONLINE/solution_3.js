const fs = require('fs');

const level = 'level3'
const cnt = 5
let file;
// const readFileName = `${level}/${level}_example.in`;
// const writeFileName = `${level}/${level}_example_.out`;

for(file = 1; file <= cnt; file++) {
  const readFileName = `${level}/${level}_${file}.in`;
  const writeFileName = `${level}/${level}_${file}.out`;

  const writer = fs.createWriteStream(writeFileName);
  const readFunc = function(error, chunk) {
    const datas = String(chunk).split('\n').filter(e => e !== '');
    let n = datas.shift();
    n = Number(n);
    const prices = [];
    for (let i = 0; i < n; i++) {
      const price = datas.shift().trim();
      prices.push(Number(price));
    }

    let m = datas.shift();
    m = Number(m);
    const infos = [];
    for (let i = 0; i < m; i++) {
      const [taskId, power, startInterval, endInterval] = datas[i].trim().split(' ');
      infos.push({
        taskId,
        power: Number(power),
        startInterval: Number(startInterval),
        endInterval: Number(endInterval),
        minimumPrice: Number.MAX_VALUE,
        minuteId: undefined,
      });
    }

    for (let i = 0; i < m; i++) { 
      const { startInterval, endInterval } = infos[i];
      for (let j = startInterval; j <= endInterval; j++) { // current minute
        const currMinute = j;
        const price = prices[j];

        if (infos[i].minimumPrice > price) {
          infos[i].minimumPrice = price;
          infos[i].minuteId = currMinute;
        }
      }
    }

    let result = '';
    result += String(m) + '\n';
    for (let i = 0; i < m; i++) {
      const { taskId, minuteId, power } = infos[i];
      result += `${taskId} ${String(minuteId)} ${String(power)}\n`;
    }

    writer.write(result);
    writer.end('');
    writer.on('finish', function() {
      console.log('finish')
    });
  }
  fs.readFile(readFileName, 'utf8', readFunc);
}