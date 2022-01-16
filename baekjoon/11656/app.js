// 접미사 배열
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input = input[0].split('')
let answer = []

for(let i = 0; i < input.length; i++){
    answer.push(input.slice(i).join(''))
    // console.log(input.slice(i))
}
console.log(answer.sort().join("\n"))
