const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input)

function solution(input){
    T = input.shift()
    for(let i = 0; i < T; i++){
        const arr = input[i].split(' ').map((item) => +item)
        
        const H = arr[0]
        const N = arr[2]

        const h = (N % H === 0) ? H : N % H;
        const w = (N%H === 0) ? N/H : N/H+1;

        if (w < 10) console.log(`${h}0${Math.floor(w)}`)
			else { console.log(`${h}${Math.floor(w)}`) }
    }
}

// https://ming9mon.tistory.com/148?category=841132
// https://velog.io/@dragoocho/%EB%B0%B1%EC%A4%80-10250%EB%B2%88-Node.js-%EB%AC%B8%EC%A0%9C%ED%92%80%EC%9D%B4