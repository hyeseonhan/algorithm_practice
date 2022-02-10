// Number
// Math 내장객체


// toString();
// 숫자를 문자로 변환
// 10진수 -> 2진수, 16진수
    let num = 10;
    num.toString(); // outcome: '10'

    // 괄호 안의 숫자의 진법으로 변환
    num.toString(2); // outcome: '1010'

    let num2 = 255;
    num2.toString(16); // outcome: 'ff'


// Math
    Math.PI; // outcome: 3.141592653589793

    let num1 = 5.1;
    let num2 = 5.7;

    // Math.ceil(); 올림
        Math.ceil(num1); // outcome: 6
        Math.ceil(num2); // outcome: 6

    // Math.floor(); 내림
        Math.floor(num1); // outcome: 5
        Math.floor(num2); // outcome: 5

    // Math.round(); 반올림
        Math.round(num1); // outcome: 5
        Math.round(num2); // outcome: 6


// 소수점 자릿수
let userRate = 30.1234;

    // 소수점 둘째자리까지 표현(셋째자리에서 반올림)
        userRate * 100; // outcome: 3012.34
        Math.round(userRate * 100); // outcome: 3012
        Math.round(userRate * 100) / 100 // outcome: 30.12

    // toFixed(); 메서드
    // 문자열로 반환 (숫자열로 변경해줘야한다.)
        userRate.toFixed(2); // outcome: '30.12'
        userRate.toFixed(0); // outcome: '30' 정수부분만 남는다.
        userRate.toFixed(6); // outcome: '30.123400'
        Number(userRate.toFixed(2)); // outcome: 30.12


// isNaN();
// NaN인지 판단할 수 있는 유일한 방법
// NaN = Not a Number 숫자가 아니다.
    let x = Number('x');
    x // outcome: NaN

    x == NaN; // outcome: false
    NaN == NaN; // outcome: false
    isNaN(x); // outcome: true
    isNaN(3) // outcome: false


// parseInt();
// 문자열을 숫자열로 바꿔준다.
// 읽을 수 있는데까지 읽고, 문자를 만나면 숫자를 반환한다.
// 소수점은 무시하고 정수만 반환한다.
// Number();와 다른 점은 문자가 혼용되어도 동작한다.
    let margin = '10px';
    parseInt(margin); // outcome: 10
    Number(margin); // outcome: NaN

    // 값이 숫자로 시작하지 않으면 NaN으로 반환한다.
    let redColor = 'f3'
    parseInt(redColor); // outcome: NaN

    // 두번째 인수를 받아서 진수를 지정할 수 있다.
    parseInt(redColor, 16); // outcome: 243
    parseInt('11', 2); // outcome: 3


// parsFloat();
// parseInt()와 동일하게 동작하지만, 부동소수점을 반환한다.
    let padding = '18.5%';
    parseInt(padding); // outcome: 18
    parseFloat(padding); // outcome: 18.5


// Math.random();
// 0 ~ 1 사이 무작위 숫자 생성
    Math.random(); // outcome: 0.6809912188642995
    Math.random(); // outcome: 0.8569347395160583

    // 1 ~ 100 사이 임의의 숫자를 뽑고 싶다면?
        Math.floor(Math.random() * 100) + 1;
        // solution
            Math.random();                       // outcome: 0.6789
            Math.random() * 100                  // outcome: 67.89
            Math.floor(Math.random() * 100)      // outcome: 67
            // 랜덤 숫자가 0.0xxx가 나올 수 있다. 버림을 했을 때 0이 나올 수 있기 때문에
            // 구하고자 하는게 0 ~ 100이 아니라 1 ~ 100 이므로 최솟값 1을 더한다. 
            Math.floor(Math.random() * 100) + 1; // outcome: 68


// Math.max();
// Math.min();
// 괄호 안의 인수 중 최솟값, 최댓값을 구한다.
    Math.max(1, 4, -1, 5, 10, 9, 5.54); // outcome: 10
    Math.min(1, 4, -1, 5, 10, 9, 5.54); // outcome: -1


// Math.abs(); 
// 절대값
    Math.abs(-1); // outcome: 1


// Math.pow(n, m);
// 제곱
// n의 m승
    Math.pow(2, 10); // outcome: 1024


// Math.sqrt();
// 제곱근
Math.sqrt(16); // outcome: 4