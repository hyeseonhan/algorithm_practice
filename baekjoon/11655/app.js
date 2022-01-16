const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let words = input[0]
let answer = ''

for(let i = 0; i < words.length; i++){
   if('A' <= words[i] && words[i] <= 'Z'){
        nums = String(words).charCodeAt(i) +13
        if(nums> 90){
            nums -= 26
        }
        answer += String.fromCharCode(nums)
    } else if( 'a' <= words[i] && words[i] <= 'z' ){
        nums = String(words).charCodeAt(i) + 13
        if(nums > 122){
            nums -= 26
        }
        answer += String.fromCharCode(nums)
    } else {
        answer += words[i]
    }
}
console.log(answer)

//    let word = String(words).charCodeAt(i)
//    let lower = words[i].replace(/[a-z]/g, word + 13)
//    let upper = words[i].replace(/[A-Z]/g, word + 13)

//    if(lower > 122){
//        lower -= 26
//        answer += 
//    }
//    console.log(lower)
    
    // if('a' <= i && i <= 'z'){
    //     word = String(words).charCodeAt(i)
    //     console.log(word)
    // }


    // if( 'a' <= words[i] && words[i] <= 'z' ){
    //     nums = String(words).charCodeAt(i) + 13
    //     if(nums > 122){
    //         nums -= 26
    //     }
    //     answer += String.fromCharCode(nums)
        
    // } else if('A' <= words[i] && words[i] <= 'Z'){
    //     nums = String(words).charCodeAt(i) +13
    //     if(nums> 90){
    //         nums -= 26
    //     }
    //     answer += String.fromCharCode(nums)
    // } 

    //https://youjin86.tistory.com/45