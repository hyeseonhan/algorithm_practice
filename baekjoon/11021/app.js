const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const numArray = []
for(let i = 1; i <= +input[0]; i++){
    const numValue = input[i].split(' ').map((item) => +item)
    numArray.push({A: numValue[0], B: numValue[1]})
}

solution(+input[0], numArray)

function solution(T, numArray){
    for(let i = 0; i < T; i++){
        const A = numArray[i].A;
        const B = numArray[i].B;
        console.log(`Case #${i + 1}: ${A + B}`)
    }
}