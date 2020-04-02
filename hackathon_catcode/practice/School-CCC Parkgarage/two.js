const fs = require('fs');

const level = 'level2'
const cnt = 5;
let f = 1;

for(f = 1; f <= cnt; f++) {
  const reader = fs.createReadStream(`${level}/input.${f}`);
  const writer = fs.createWriteStream(`${level}/output.${f}`);

  reader.on('data', function(chunk) {
    let occupy = 0;
    let maxOcc = 0;
    let maxWaiting = 0;
    const [nmStr, ticketsStr] = chunk.toString().split('\n');
    const [n, m] = nmStr.split(' ');
    const tickets = ticketsStr.split(' ');
    tickets.forEach((ticket, i) => {
      ticket >= 0 ? occupy += 1 : occupy -= 1;
      if (occupy >= n) {
        maxOcc = n;
        maxWaiting = Math.max(maxWaiting, occupy - n);
      } else {
        maxOcc = Math.max(maxOcc, occupy);
      }
    })

    writer.write(`${maxOcc} ${maxWaiting}`);
    writer.end('');
    writer.on('finish', function() {
      console.log('finish')
    });
  })
}
