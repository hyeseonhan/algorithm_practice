const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(+input[0])

function solution(r){
    const circle = r * r * Math.PI
    const texi = ((r * 2) * r * 0.5) * 2

    console.log(circle.toFixed(6))
    console.log(texi.toFixed(6))
}