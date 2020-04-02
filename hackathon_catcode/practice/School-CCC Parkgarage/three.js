const fs = require('fs');

const level = 'level3'
const cnt = 4;
let f = 1;

for(f = 1; f <= cnt; f++) {
  const reader = fs.createReadStream(`${level}/input.${f}`);
  const writer = fs.createWriteStream(`${level}/output.${f}`);

  reader.on('data', function(chunk) {
    let price = 0;
    let queue = [];
    const [firstRow, secondRow, thirdRow] = chunk.toString().split('\n');
    const [n, m] = firstRow.split(' ').map(e => Number(e));
    const prices = secondRow.split(' ').map(e => Number(e));
    const tickets = thirdRow.split(' ').map(e => Number(e));
    let park = new Array(n).fill(null);
    const condition = (ticket) => {
      if (ticket >= 0) {
        queue.push(ticket);
        p = park.indexOf(null);
        if (p == -1) return;
        park[p] = queue.shift();
        price += prices[p];
      } else {
        p = park.indexOf(-ticket);
        if (queue.length == 0) {
          park[p] = null;
        } else {
          park[p] = queue.shift();
          price += prices[p];
        }
      }
    }
    tickets.forEach((ticket, i) => condition(ticket))

    writer.write(`${price}`);
    writer.end('');
    writer.on('finish', function() {
      console.log('finish')
    });
  })
}
