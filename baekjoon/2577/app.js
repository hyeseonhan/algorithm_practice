const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input.map((item) => +item)

solution(input)

function solution(input){
    const result = String(input[0] * input[1] * input[2])
    // console.log(result.length)
    const answer = Array(10).fill(0)
    for(let i = 0; i < result.length; i++){
        const char = +result[i]
        answer[char]++
    }
    for(let i = 0; i < answer.length; i++){
        console.log(answer[i])
    }
}