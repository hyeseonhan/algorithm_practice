const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input)

function solution(input){
    let n = +input[0]
    let m = n -(String(n).length * 9)
    let answer

    while (true) {
        m++
        let sum = m

        for(let i = 0; i < String(m).length; i++){
            sum += Number(String(m)[i])
        }
        
        if(sum === n){
            answer = m;
            break;
        }
        if(m >= n){
            answer = 0;
            break
        }
    }
    console.log(answer)
}

// https://nyang-in.tistory.com/214