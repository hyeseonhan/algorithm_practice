const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input[0].split(" ")
solution(input)

function solution(input){
    const [a, b] = input.map(item => [...item].reverse().join(''))
    console.log(a > b ? a : b)
}