const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n'),

bar = input[0]
let answer = 0
let stack = []

for(let i = 0; i < bar.length; i++){
    if(bar[i] === "(" ){
        stack.push(bar[i])
    } else {
        stack.pop();
        if(bar[i - 1] === "("){
            answer += stack.length
        } else {
            answer++
        }
    }
}

console.log(answer)

// https://velog.io/@younoah/boj-10799