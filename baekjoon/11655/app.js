const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let words = input[0].split('')

for(let i = 0; i < words.length; i++){
    word = String(words).charCodeAt(i)
    console.log(word)
    if('a' <= i && i <= 'z'){
        
    }
}
