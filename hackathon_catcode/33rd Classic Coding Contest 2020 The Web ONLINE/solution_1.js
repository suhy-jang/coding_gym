const fs = require('fs');

const level = 'level1'
const cnt = 5;
let f = 'example';

for(f = 1; f <= cnt; f++) {
  const writer = fs.createWriteStream(`${level}/${level}_out_${f}.out`);

  fs.readFile(`${level}/${level}_${f}.in`, 'utf8', function(error, chunk) {
    let [n, ...datas] = String(chunk).split('\n').filter(e => e !== '');
    n = Number(n);
    const res = {
      minTimestamp: -1,
      maxTimestamp: -1,
      minLat: -1.0,
      maxLat: -1.0,
      minLong: -1.0,
      maxLong: -1.0,
      maxAltitude: -1.0,
    };

    const minUpdate = (resVal, tempVal) => {
      return (resVal == -1 || resVal > tempVal) ? tempVal : resVal;
    }
    const maxUpdate = (resVal, tempVal) => {
      return (resVal == -1 || resVal < tempVal) ? tempVal : resVal;
    }
    datas.forEach(data => {
      const [timestamp, lat, long, altitude] = data.split(',').map(e => Number(e));
      res.minTimestamp = minUpdate(res.minTimestamp, timestamp);
      res.maxTimestamp = maxUpdate(res.maxTimestamp, timestamp);
      res.minLat = minUpdate(res.minLat, lat);
      res.maxLat = maxUpdate(res.maxLat, lat);
      res.minLong = minUpdate(res.minLong, long);
      res.maxLong = maxUpdate(res.maxLong, long);
      res.maxAltitude = maxUpdate(res.maxAltitude, altitude);
    })
    writer.write(`${res.minTimestamp} ${res.maxTimestamp}\n${res.minLat} ${res.maxLat}\n${res.minLong} ${res.maxLong}\n${res.maxAltitude.toFixed(1)}`);
    writer.end('');
    writer.on('finish', function() {
      console.log('finish')
    });
  });
}
