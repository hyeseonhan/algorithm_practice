const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let arrX = [ ]
let arrY = [ ]

for(let i = 0; i < 3; i++){
    arrX.push(Number(input[i].split(' ')[0]))
    arrY.push(Number(input[i].split(' ')[1]))
}
arrX = arrX.sort()
arrY = arrY.sort()

let x = arrX[1] === arrX[0] ? arrX[2] : arrX[0];
let y = arrY[1] === arrY[0] ? arrY[2] : arrY[0];

console.log(x, y)