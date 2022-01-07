const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

[x, y, w, h] = input[0].split(' ').map((item => +item))

solution(x, y, w, h)

function solution(x, y, w, h){
    const array = [x, w - x, y, h - y]
    console.log(Math.min(...array))
}