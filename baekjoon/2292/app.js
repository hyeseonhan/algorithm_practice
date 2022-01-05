const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

N = +input[0]

    let range = 1;
    let block = 1;

    while(block < N){
        block += 6 * range;
        range++;
    }
    console.log(range)
