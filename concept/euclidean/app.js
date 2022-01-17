// 최대공약수 GCD
// 두 자연수의 공통된 약수 중 가장 큰 수
// 2개의 자연수 a, b(a > b)에 대해서 a를 b로 나눈 나머지가 r일 때, a와 b의 최대공약수는 b와 r의 최대공약수와 같다

function gcd(a, b){
    let r
    while(b !== 0){
        r = a % b
        a = b
        b = r
    }
    return a
}


// 최소공배수 LCM
// 두 자연수의 공통된 배수 중 가장 작은 수
// 두 수 a와 b의 최소공배수는 a와 b의 곱을 a와 b의 최대공약수를 나눈 것과 같다

function gcd(a, b){
    return (a * b) / gcd(a, b)
}
