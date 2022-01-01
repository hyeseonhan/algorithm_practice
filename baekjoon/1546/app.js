const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const T = input[0].split(' ').map((item) => +item)
const items = input[1].split(' ').map((item) => +item)

solution(T, items)

function solution(T, items){
    const max = Math.max(...items)

    let sum = 0;
    for(let i = 0; i < T; i++){
        sum = sum + items[i] / max * 100;
    }
    console.log(sum / T)
}