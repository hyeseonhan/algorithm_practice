const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

T = input.shift()

for(let i = 0; i < T; i++){
    const c = input[i]
    const stack = []
    let result = 'YES'

    for(let j = 0; j < c.length; i ++){
        if(c[j] === '(' ){
            stack.push(1)
        } else {
            if( !stack.pop()){
                result = 'NO'
                break
            }
        }
    } 
    if(stack.length !== 0){
        result = 'NO'
    }
    console.log(result)
}

// '(' 와 ')' 을 각각 1 과 -1로 표시 
// VPS 문자열이면 합은 0이 나온다. 