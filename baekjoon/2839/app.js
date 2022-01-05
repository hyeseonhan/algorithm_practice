const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(+input[0])

function solution(N){
    let big = 0
    let small = 0;

    while(true){
        if( N % 5 === 0){
            big = N / 5
            console.log( big + small)
            break
        } 
        if( N < 0){
            console.log(-1)
            break
        }
        N -= 3
        small ++
    }
}

// https://nyang-in.tistory.com/175