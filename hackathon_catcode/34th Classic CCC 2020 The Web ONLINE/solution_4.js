const fs = require('fs');

const level = 'level4'
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
    const maxPower = Number(datas.shift());
    const maxElectricityBill = Number(datas.shift());

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
      const [taskId, power, startInterval, endInterval] = datas.shift().trim().split(' ');
      infos.push({
        taskId,
        power: Number(power),
        startInterval: Number(startInterval),
        endInterval: Number(endInterval),
        datas: [],
        minimumPrice: Number.MAX_VALUE,
      });
    }

    for (let i = 0; i < m; i++) { 
      const { startInterval, endInterval, power } = infos[i];
      let bottom = 1;
      if (maxPower < power) {
        bottom = Math.ceil(power / maxPower);
      }

      const tempPrices = prices.slice(startInterval, endInterval + 1).slice();
      const minIds = [];

      for (let j = startInterval; j <= endInterval; j++) {
        if (bottom === 0) break;

        const min = Math.min(...tempPrices);
        const currMinId = tempPrices.indexOf(min);
        const price = tempPrices.splice(currMinId, 1)[0];
        if (minIds.some(({ minuteId }) => minuteId + 1 === j || minuteId -1 === j)) {
          continue;
        }

        minIds.push({ minuteId: j, price });
        bottom--;
      }

      let leftPower = power;

      for (const { minuteId, price } of minIds) {
        if (leftPower === 0) break;

        const spendPower = leftPower < maxPower ? leftPower : maxPower;
        infos[i].datas.push({ 
          minuteId, 
          power: spendPower,
          charge: price * spendPower 
        });
        leftPower -= spendPower;
      }
    }

    let totalCharge = 0;
    let result = '';
    result += `${String(m)}\n`;
    for (let i = 0; i < m; i++) {
      const { taskId, datas } = infos[i];
      result += `${taskId} `;
      for (const data of datas) {
        const { minuteId, charge, power } = data;
        result += `${String(minuteId)} ${String(power)} `;
        totalCharge += charge;
        if (totalCharge > maxElectricityBill) {
          console.log('exception exceed charge');
        }
      }
      result += '\n';
    }

    writer.write(result);
    writer.end('');
    writer.on('finish', function() {
      console.log('finish')
    });
  }
  fs.readFile(readFileName, 'utf8', readFunc);
}