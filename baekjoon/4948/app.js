// 모르겟음

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input.map((item) => +item))

function solution(n){
    for(let i = 0; i < n.length; i++){
        if(n[i] === 0){
            break
        }
        // console.log(n[i])
        let primenum = 0;
        for(let j = n[i] + 1; j <= n[i] * 2; j++){
            if((j === 2) | (j === 3) | (j === 5) | (j === 7)){
                primenum++
            } else if(
                (j % 2 === 0) |
                (j % 3 === 0) |
                (j % 5 === 0) |
                (j % 7 === 0)
            ){
                continue;
            } else {
                let count = 0;
                for( let k =2; k <= Math.sqrt(j); k++){
                    if(Number.isInteger(j / k)){
                        count++
                    }
                }
                if(count === 0){
                    primenum++
                }
            }
        }
        console.log(primenum)
    }
}