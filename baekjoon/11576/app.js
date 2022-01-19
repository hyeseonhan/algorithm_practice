// Base Conversion
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let numbers = input[0].split(' ').map(item => +item)


let A = numbers[0]
let B = numbers[1]
let m = input[2].split(' ').map(item => +item)
let decimal = 0
let result = []

for(let i = 0; i < +input[1]; i++){
    decimal += m[i] * Math.pow(A, +input[1] - i -1)

    while (decimal) {
        result.push(decimal % B)
        result.reverse()
        decimal = Math.floor(decimal / B)
    }
    console.log(result)
}


