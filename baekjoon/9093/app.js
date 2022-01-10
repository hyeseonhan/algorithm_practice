const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

T = input.shift()

for(let i = 0; i < T; i++){
   let words = input[i].split(' ')
//    console.log(words)
   
   for(let j = 0; j < words.length; j++){
        words[j] = words[j].split('').reverse().join('')
   }
   console.log(words.join(' '))
}

// 다른 방법
for(let i = 0; i < T; i++){
    let words = input[i].split(' ')
    let answer = words.map((item) => item.split(' ').reverse().join('')).join(' ')
    console.log(answer)
}