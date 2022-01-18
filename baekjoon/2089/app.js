// -2진수
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let num = +input[0]
let remainder
let answer = []

while (num / -2 !== 0) {
    remainder = num % -2
    if(remainder === -1 || remainder === 1){
        num = Math.floor(num / -2) +1
        answer.push(1)
    } else if(remainder === 0){
        num = Math.floor(num / -2)
        answer.push(0)
    }
}
console.log(answer.length === 0 ? 0 : answer.reverse().join(''))