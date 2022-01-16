const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let a = input[0].split('')
let postfix = ''
let stack = []

for(let i = 0; i <a.length; i++){
    let character = a[i]

    if(character >= "A" && character <= "Z") postfix += character
    else if(character === "(" ) stack.push(character)
    else if(character === ")" ){
        while(stack.length && stack[stack.length -1] !== "(" ) postfix += stack.pop()
        stack.pop()
    } else if(character === "+" || character === "-"){
        while(stack.length && stack[stack.length -1] !== "(" ) postfix += stack.pop()
        stack.push(character)
    } else if(character === "*" || character === "/"){
        while (stack.length && (stack[stack.length -1] === "*" || stack[stack.length -1] === "/")) postfix += stack.pop()
        stack.push(character)
    }    
}

while (stack.length) postfix += stack.pop()

console.log(postfix)