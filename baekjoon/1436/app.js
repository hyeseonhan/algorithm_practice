const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(+input[0])

function solution(n){
    let num = 666
    let count = 1

    while(count !== n){
        num++
        if(String(num).includes("666")) count++
    }
    console.log(num)
}

// https://tesseractjh.tistory.com/42