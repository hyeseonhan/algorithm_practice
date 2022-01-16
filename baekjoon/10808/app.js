const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

// let answer = new Array(26).fill(0)

// input.map((alphabet) => {
//     let ascii = alphabet.charCodeAt(0)
//     answer[ascii - 97] += 1
// })

// console.log(answer)

input = input[0].split('')

const alphabet = "abcdefghijklmnopqrstuvwxyz";
const count = new Array(26).fill(0);

input.forEach(i => count[alphabet.indexOf(i)]++)

console.log(count.join(" "))