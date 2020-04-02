const fs = require('fs');

const level = 'level1'
let f = 1;

for(f = 1; f <= 3; f++) {
  const reader = fs.createReadStream(`${level}/input.${f}`);
  const writer = fs.createWriteStream(`${level}/output.${f}`);

  reader.on('data', function(chunk) {
    let occupy = 0;
    let maxOcc = 0;
    const [nmStr, ticketsStr] = chunk.toString().split('\n');
    const [n, m] = nmStr.split(' ');
    const tickets = ticketsStr.split(' ');
    tickets.forEach((ticket, i) => {
      if (ticket >= 0) {
        occupy += 1;
      } else {
        occupy -= 1;
      }
      maxOcc = Math.max(maxOcc, occupy);
    })

    writer.write(`${maxOcc}`);
    writer.end('');
    writer.on('finish', function() {
      console.log('finish')
    });
  })

}
