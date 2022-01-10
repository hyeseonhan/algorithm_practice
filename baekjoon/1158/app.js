const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, k] = input[0].split(' ')

const queue = []
const answer = []

for(let i = 0; i < n; i++){
    queue.push(i + 1)
}

let count = 1
while(queue.length){
    const item = queue.shift()
    if( count % k === 0){
        answer.push(item)
    } else {
        queue.push(item)
    }
    count++
}
console.log(`<${answer.join(", ")}>`)

// https://rrecoder.tistory.com/197
// https://gigibean.tistory.com/16?category=983079
// https://junghyeonsu.tistory.com/241