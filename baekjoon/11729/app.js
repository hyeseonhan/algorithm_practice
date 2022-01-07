const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let n= +input[0]
let count = 0
let answer = []

function movement(n, first, second, third){
    if(n === 0){
        return
    } else{
        movement(n - 1, first, third, second)
        answer.push([first, third])
        count++
        movement(n - 1, second, first, third)
    }
}
movement(n, "1", "2", "3")
console.log(count)
console.log(answer.map((item) => item.join(" ")).join("\n"))

// https://nyang-in.tistory.com/210