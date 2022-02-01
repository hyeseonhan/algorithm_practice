function solution(s) {}

function solution(s) {
  console.log(typeof Number(s));
  return nNumber(s);
}

function solution(s) {
  return +s;
  return Number(s);
}

function solution(s) {
  return s / 1;
  // return Number(s)
}

function solution(arr) {
  let answer = [];

  for (let i = 0; i < arr.length; i = i + 1) {
    // console.log(arr[i])
    if (arr[i] !== arr[i + 1]) {
      answer.push(arr[i]);
    }
  }
  return answer;
}