const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input)

function solution(input){
    let T = +input[0]
    let arr = []
    for(let i = 1; i <= T; i++){
        input[i] = input[i].split(' ').map((item) => +item)
        const x = input[i][0]
        const y = input[i][1]

        if(Math.sqrt(y - x) % 1 === 0){
            result = 2 * Math.sqrt(y - x) -1
        } else{
            a = Math.pow(Math.ceil(Math.sqrt(y-x)), 2)
            b = Math.pow(Math.ceil(Math.sqrt(y-x)) - 1, 2) + 1

            if((a + b) / 2 <= y - x){
                result = 2 * Math.ceil(Math.sqrt(y - x)) - 1
            } else {
                result = 2 * Math.ceil(Math.sqrt(y - x)) - 2
            }
        }
        arr.push(result)
        console.log(arr[arr.length - 1])
    }
}

// https://nyang-in.tistory.com/177