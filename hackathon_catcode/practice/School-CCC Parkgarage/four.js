const fs = require('fs');

const level = 'level4'
const cnt = 3;
let f = 1;

for(f = 1; f <= cnt; f++) {
  const reader = fs.createReadStream(`${level}/input.${f}`);
  const writer = fs.createWriteStream(`${level}/output.${f}`);

  reader.on('data', function(chunk) {
    let price = 0;
    let queue = [];
    const [firstRow, secondRow, thirdRow, fourthRow] = chunk.toString().split('\n');
    const [n, m] = firstRow.split(' ').map(e => Number(e));
    const prices = secondRow.split(' ').map(e => Number(e));
    const weights = thirdRow.split(' ').map(e => Number(e));
    const tickets = fourthRow.split(' ').map(e => Number(e));
    let park = new Array(n).fill(null);
    const upperNum = (num) => {
      str = String(num)
      const digit = Math.pow(10, 2);
      return Math.ceil(num / digit);
    }
    const calculatePrice = () => {
      const val = queue.shift();
      park[p] = val;
      const weight = upperNum(weights[val - 1]);
      return prices[p] * weight;
    }
    const condition = (ticket) => {
      if (ticket >= 0) {
        queue.push(ticket);
        p = park.indexOf(null);
        if (p == -1) return;

        price += calculatePrice();
      } else {
        p = park.indexOf(-ticket);
        if (queue.length == 0) {
          park[p] = null;
        } else {
          price += calculatePrice();
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
