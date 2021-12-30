const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

// let i = 0;

// while(i < input.length){
//     let numbers = input[i].split(' ').map(x => Number(x));
//     console.log(numbers[0] + numbers[1])
//     i++;
// }

let i=0;
while(i<input.length-1){
    let nums = input[i].split(' ').map(x => Number(x));
    
    a = nums[0];
    b = nums[1];

    console.log(a+b);
    i++;
}