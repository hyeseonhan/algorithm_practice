const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(+input[0])

function solution(N){
    let line = 1; 
    let sum = 0 // 데이터갯수

    while(true){
        sum += line

        if( N <= sum){
            const a = line - (sum - N)
            const b = line + 1 - a
            
            if( line % 2 === 0){
                console.log(a + "/" + b)
            } else {
                console.log(b + "/" + a)
            }
            break;
        }
        line++
    }
}

// https://ming9mon.tistory.com/114