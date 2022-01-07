const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input)

function solution(input){

   for(let N of input){ 
    let num = N.split(' ').sort((a, b) => a - b)
    let x = num.shift()
    let y = num.shift()
    let z = num.shift()
    
    if(parseInt(x) === 0 && parseInt(y) === 0 && parseInt(z) === 0 ) break

    if( z * z === x * x + y * y){
        console.log("right")
    } else {
        console.log("wrong")
    }
   }
}