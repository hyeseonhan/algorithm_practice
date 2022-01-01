const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const L = +input[0]
const items = input.slice(1)

solution(L, items)

function solution(L, items){
    for(let i = 0; i < L; i++){
        const resultList = items[i]
        let cnt = 0;
        let score = 0;

        for(let j = 0; j < resultList.length; j++){
            const OX = resultList[j];
            if( OX === 'O'){
                cnt++
                score = score + cnt;
            } else { 
                cnt = 0;
            }
        }
        console.log(score)
    }
}