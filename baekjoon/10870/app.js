const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function fibonacci(num){
    if(num === 0) return 0
    if( num === 1 || num === 2) return 1

    return fibonacci(num - 1) + fibonacci(num -2)
}
console.log(fibonacci(+input[0]))