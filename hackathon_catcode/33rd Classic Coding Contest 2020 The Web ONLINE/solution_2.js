const fs = require('fs');

const level = 'level2'
const cnt = 5;
let f = 'example';

for(f = 1; f <= cnt; f++) {
  const writer = fs.createWriteStream(`${level}/${level}_out_${f}.out`);
  fs.readFile(`${level}/${level}_${f}.in`, 'utf8', function(error, chunk) {
    let [n, ...datas] = String(chunk).split('\n').filter(e => e !== '');
    n = Number(n);
    const routes = {};
    datas.forEach(data => {
      let [timestamp, lat, long, altitude, start, destination, takeoff] = data.split(',');
      const prevRoute = routes[`${start} ${destination}`];
      const nextCnt = prevRoute == undefined ? 1 : prevRoute.cnt + 1;
      if (prevRoute == undefined || prevRoute.takeoff != takeoff) {
        routes[`${start} ${destination}`] = { cnt: nextCnt, takeoff };
      }
    })
    let newArr = Object.entries(routes).map(([k, v]) => (`${k} ${v.cnt}`)).sort();
    writer.write(newArr.join('\n'));
    writer.end('');
    writer.on('finish', function() {
      console.log('finish')
    });
  });
}
