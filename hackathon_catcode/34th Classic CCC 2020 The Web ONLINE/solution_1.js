const fs = require('fs');

const level = 'level1'
const cnt = 5
let file;
// let file = 'example';

for(file = 1; file <= cnt; file++) {
  // const readFileName = `${level}/example.in`;
  const readFileName = `${level}/${level}_${file}.in`;
  const writeFileName = `${level}/${level}_${file}.out`;

  const writer = fs.createWriteStream(writeFileName);
  fs.readFile(readFileName, 'utf8', function(error, chunk) {
    let [n, ...datas] = String(chunk).split('\n').filter(e => e !== '');
    n = Number(n);

    let minimumPower = datas[0];
    let minIndex = 0;
    for (let i = 0; i < datas.length; i++) {
      if (datas[i] < minimumPower) {
        minimumPower = datas[i];
        minIndex = i;
      }
    }
    writer.write(String(minIndex));
    writer.end('');
    writer.on('finish', function() {
      console.log('finish')
    });
  });
}