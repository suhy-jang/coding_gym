const fs = require('fs');

const level = 'level3'
const cnt = 5;
let f = 'example';

for(f = 1; f <= cnt; f++) {
  const writer = fs.createWriteStream(`${level}/${level}_out_${f}.out`);
  fs.readFile(`${level}/${level}_${f}.in`, 'utf8', function(error, chunk) {
    let [n, ...datas] = String(chunk).split('\n').filter(e => e !== '');
    n = Number(n);
    const points = [];
    Math.radians = (degrees) => degrees * Math.PI / 180;
    datas.forEach(data => {
      let [lat, long, altitude] = data.split(',').map(e => Number(e));
      const h = 6371 + altitude;
      const z = Math.cos(Math.radians(long)) * h;
      const y = Math.sin(Math.radians(long)) * h;
      const x = Math.cos(Math.radians(lat)) * h;
      points.push(`${x} ${y} ${z}`);
    })
    writer.write(points.join('\n'));
    writer.end('');
    writer.on('finish', function() {
      console.log('finish')
    });
  });
}
