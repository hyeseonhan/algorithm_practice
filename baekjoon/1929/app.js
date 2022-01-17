// 소수
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input[0].split(' ').map((item) => +item)

solution(input[0], input[1])

function solution(M, N){
    let arr = Array.from(Array(N+1).keys())

    for(let i = 2; i <= Math.sqrt(N); i++){
        if(arr[i])
        for(let j = i * i; j<= N; j += i){
            arr[j] = false;
        }
    }
    arr.splice(0,2,false,false)
    for(let i = M; i<= N; i++){
        if(arr[i]) console.log(arr[i])
    }
   
}

