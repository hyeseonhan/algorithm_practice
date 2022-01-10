const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const arr = input.shift()

// const stack = []
// const result = []

// for(let i = 0; i < arr; i++){
//     switch(input[i]){
//         case 'pop':
//             result.push(stack.pop() || -1)
//             break
        
//         case 'size':
//             result.push(stack.length);
//             break
        
//         case 'empty':
//             result.push(stack[0] ? 0 : 1)
//             break
        
//         case 'top':
//             result.push(stack[stack.length - 1] || -1)
//             break

//         default:
//             stack.push(input[i].split(' ')[1])
//             break
//     }
// }
// console.log(result.join('\n'))

// reduce
const stack = []

const fun = {
    pop: () => stack.pop() || -1,
    size: () => stack.length,
    empty: () => stack[0] ? 0 : 1,
    top: () => stack[stack.length -1] || -1,
    push: (item) => {
        stack.push(item.split(" ")[1])
        return ''
    }
}
const result = arr.reduce((acc, v) =>
    acc + (fun[v] ? `${fun[v]}\n` : fun.push((v)), '')
)
console.log(result)

// https://gurtn.tistory.com/67

