// 2진수 8진수
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let n = String(input)
let answer = ''


while (n.length >= 3) {
    answer = parseInt(n.slice(n.length - 3), 2).toString(8) + answer
    n = n.slice(0, n.length - 3)
}
console.log(n ? answer = parseInt(n,2).toString(8) + answer :  answer)

// https://leylaoriduck.tistory.com/509