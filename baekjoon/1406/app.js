const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let word = input[0].split("");
let stack = []
let m = parseInt(input[1]);

for(let i = 2; i < 2 + m; i++){
    let [cmd, value] = input[i].split(" ");
    if(cmd === "L" && word.length) stack.push(word.pop())
    else if(cmd ==="D" && stack.length) word.push(stack.pop())
    else if(cmd ==="B") word.pop()
    else if(cmd ==="P") word.push(value)
}
let answer = word.join('')
answer += stack.reverse().join('')
console.log(answer)
// https://gobae.tistory.com/23