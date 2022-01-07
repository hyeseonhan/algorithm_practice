const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input)

function solution(input){
    T = +input[0]
    for(let i = 1; i <= T; i++){
        
        const [x1, y1, r1, x2, y2, r2] = input[i].split(' ').map(el => parseInt(el))

       d = Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2)
       r = Math.sqrt(d)
       
       if( x1 === x2 && y1 === y2 && r1 === r2){
           input[i] = -1
       } else if((x1 === x2 && y1 === y2 && r1 !== r2) || (r > r1 + r2) || (r < Math.abs(r1 - r2))){
        input[i] = 0
       } else if((r === r1 + r2) || Math.abs(r1 - r2) === r){
        input[i] = 1
       } else {
        input[i] =2
       }
       console.log(input[i])
    } 
    
}
