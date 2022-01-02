const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(+input[0])

function solution(num){
    let count = 0

    for( let i = 1; i <= num; i++){
        let numArr = String(i)
        if( i < 100){
            count++
            continue;
            
        }
        let A = Number(numArr[0]) - Number(numArr[1])
        let B = Number(numArr[1]) - Number(numArr[2])
        if( A === B){
            count++
        }
    }
    console.log(count)
}