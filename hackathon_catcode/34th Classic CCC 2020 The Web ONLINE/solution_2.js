const fs = require('fs');

const level = 'level2'
const cnt = 5
let file;

for(file = 1; file <= cnt; file++) {
  // const readFileName = `${level}/${level}_example.in`;
  // const writeFileName = `${level}/${level}_example_.out`;
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
      const [index, completionTime] = datas[i].trim().split(' ');
      infos.push({
        index,
        completionTime: Number(completionTime),
        startIndex: 0,
        sumPrice: 0,
        minimumPrice: Number.MAX_VALUE,
        minimumPriceIndex: undefined,
      });
    }

    for (let i = 0; i < m; i++) { 
      const { completionTime } = infos[i];
      for (let j = 0; j < n; j++) { // current time
        const currTime = j;
        const price = prices[j];
        infos[i].sumPrice += price;
        if (currTime + 1 < completionTime) continue; // upcoming

        if (infos[i].minimumPrice > infos[i].sumPrice) {
          infos[i].minimumPrice = infos[i].sumPrice;
          infos[i].minimumPriceIndex = infos[i].startIndex;
        }
        infos[i].sumPrice -= prices[infos[i].startIndex];
        infos[i].startIndex++;
      }
    }

    let result = '';
    result += String(m) + '\n';
    for (let i = 0; i < m; i++) {
      const { index, minimumPriceIndex } = infos[i];
      result += `${index} ${String(minimumPriceIndex)}\n`;
    }

    writer.write(result);
    writer.end('');
    writer.on('finish', function() {
      console.log('finish')
    });
  }
  fs.readFile(readFileName, 'utf8', readFunc);
}