const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(+input[0], input.slice(1))

function solution(N, arr){
    let answer = 0;
    for(let i = 0; i < N; i++){
        let current = arr[i];
        
        let obj = {};

        let cont = current[0]
        obj[cont] = true;

        let isGroupWord = true;
        for(let j = 1; j <current.length; j++){
            if (cont !== current[j]){
                if(obj[current[j]]){
                    isGroupWord = false
                } else {
                    cont = current[j];
                    obj[current[j]] = true
                }
            }
        }
        if(isGroupWord){
            answer++
        }
    }
    console.log(answer)
}