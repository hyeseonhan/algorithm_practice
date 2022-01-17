// 소수
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

num = input[1].split(' ').map((item) => +item)

solution(+input[0], num)

function solution(T, num ){
    let answer = 0

    for(let i = 0; i < num.length; i++){
        if(num[i] === 1){
            continue
        } else {
            let count = 0;
            for(let j = 2; j < num[i]; j++){
                if(num[i] % j === 0){
                    count++
                }
            }
            if(count === 0){
                answer++
            }
        }
    }
    console.log(answer)
}
