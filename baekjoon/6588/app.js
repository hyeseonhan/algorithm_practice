// 골드바흐의 추측
// 소수
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input = input.map(item => +item)

const max = Math.max(...input)
const arr = new Array(max + 1).fill(true)

for(let i = 2; i <= max; i++){
    if(arr[i]){
        for(let j = i * i; j <= max; j += i){
            arr[j] = false
        }
    }
}

let result = ''
input.map((v) => {
    for(let i = 3; i < v; i += 2){
        if(arr[i] && arr[v - i]){
            result += `${v} = ${i} + ${v - i}\n`
            break
        }
    }
})
console.log(result)