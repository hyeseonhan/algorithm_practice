// 최소공배수
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

n = input.shift()

for(let i = 0; i < n; i++){
    let arr = input[i].split(' ')
    let a = arr[0]
    let b = arr[1]

    while (a % b !== 0) {
        let r = a % b

        if(r !== 0){
            a = b
            b = r
        }        
    }
    const gcd = b
    const lcm = arr[0] * arr[1] / gcd
    console.log(lcm)
}
