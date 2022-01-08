// 자꾸 틀렸다는데 답은 맞음

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

solution(input)

function solution(input){
    const [n, ...person] = input
    const arr = person.map(item=> item.split(' '))
   
    let answer = [ ];
    for(let i = 0; i < n; i++){
        let rank = 1;
        const [x, y] = arr[i]
        for(let j = 0; j < n; j++){
            const [p, q] = arr[j]
            if(i != j && x < p && y < q){
                rank += 1
            }
        }
        answer.push(rank)
    }
    console.log(answer.join(' '))
}

// const n = +input[0]
// const arr = input.slice(1).map((item)=> item.split(' '))

// https://what-whale-wants-to-say-is.tistory.com/43