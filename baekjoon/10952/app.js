// while 이해가 아직

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

while(input[0][0] != 0){
    const numbers = input.shift().split(" ")
    // console.log(numbers)
    console.log(+numbers[0] + +numbers[1])
}