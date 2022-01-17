const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let num = input[0].split(' ').map((item) => +item)
let a = num[0]
let b = num[1]

while (a % b !== 0) {
    let r = a % b
    if(r !== 0){
        a = b
        b = r
    }
}

console.log(b)
console.log( num[0] * num[1] / b )