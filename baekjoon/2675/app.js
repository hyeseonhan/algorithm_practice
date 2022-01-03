const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const T = input.shift()

solution(T)

function solution(T){
    for(let i = 0; i < T; i++){
        let answer= ''

        const [num, str] = input[i].split(' ')

        for(let j =0; j < str.length; j++){
            for(let k = 0; k < num; k++){
                answer += str[j]
            }
        }
        console.log(answer)
    }
}