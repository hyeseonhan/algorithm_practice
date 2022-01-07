const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(+input[0])

function solution(num){
    let arr = []
    let i = 2;
    while(true){
        if( num % i === 0){
            num = num / i
            arr.push(i)
            i = 1;
        }
        i++
        if( i > num){
            break
        }    
    }
    console.log(arr.join("\n"))
}