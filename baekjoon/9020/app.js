// 모르겟음

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input.map((item) => +item))

function solution(n){
    let answer = ''
    for(let i = 1; i <= n[0]; i++){
        let numArray = []
        for(let j = 2; j <= n[i]; j++){
            if((j === 2) | (j === 3) | (j === 5) | (j === 7)){
                numArray.push(j)
            } else if(
                (j % 2 === 0) |
                (j % 3 === 0) |
                (j % 5 === 0) |
                (j % 7 === 0)
            ){
                continue;
            }
            else {
                let decimal = 0;
                for(let k = 2; k <= Math.sqrt(j); k++){
                    if(Number.isInteger(j / k)){
                        decimal++
                    }
                }
                if(decimal === 0){
                    numArray.push(j)
                }
            } 
        }
        let minus = 186746578;
        let a = 13245646;
        let b = 45686765;
        for(let l = 0; l < numArray.length; l++){
            for(let m = 0; m < numArray.length; m++){
                if(numArray[l] + numArray[l+m] === n[i]){
                    if(minus > numArray[l+m] - numArray[l]){
                        minus = numArray[l +m] - numArray[l];
                        a = numArray[l]
                        b = numArray[l + m]
                    }
                }
            }
            // console.log(a, b)
        }
        answer += `${a} ${b}\n`; 
    }
    answer = answer.split("\n");
    answer.pop();
    answer = answer.join("\n");
    console.log(answer);
}