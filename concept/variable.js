// 변수
// 호이스팅
// TDZ(Temporal Dead Zone)
// 참고 https://noogoonaa.tistory.com/78
// 참고 https://evan-moon.github.io/2019/06/18/javascript-let-const/

// 변수 let const var

// var 한번 선언된 변수를 다시 선언할 수 있다.
// let 다시 선언 할 수 없다.
    var name = 'Mike';
    var name = 'Jane';

// var 선안하기 전에 사용할 수 있다.
// let TDZ 때문에 선언하기 전에 사용할 수 없다.
    console.log(name1);
    var name1 = 'Mike';
        // 동작 과정( => 호이스팅)
        var name1;
        console.log(name1); // undefined(∵ 선언은 호이스팅 되지만, 할당은 호이스팅 되지 않는다.)
        name1 = 'Mike';


// 호이스팅
// 스코프 내부 어디서든 변수 선언은 최상위에 선언된 것 처럼 행동
// 스코프 단위로 호이스팅이 일어난다.

// 스코프(Scope)
// 변수의 유효범위 혹은 생존범위

// 변수 생명주기 : 선언 단계 => 초기화(undefined) 단계 => 할당 단계
    // 선언 단계: 변수를 실행 컨텍스트의 변수 객체에 등록하는 단계.
    // 초기화 단계 : 실행 컨텍스트에 존재하는 변수 객체에 선언 단계의 변수를 위한 메모리를 만드는 단계. 할당된 메모리에는 undefined로 초기화 된다.
    // 할당 단계 : 사용자가 undefined로 초기화된 메모리의 다른 값을 할당한다.
    // var : 변수 선언 전에 선언 단계와 초기화 단계를 동시에 진행된다. 
    // let : 선언 단계와 초기화 단계가 분리되서 진행된다.

// TDZ(Temporal Dead Zone)
// TDZ 영역에 있는 변수들은 사용할 수 없다.
// 스코프의 시작 지점부터 초기화 시작 지점까지의 구간
// 초기화 되지 않은 변수가 있는 곳
// TDZ 구간에 있는 변수 객체는 선언은 되어있지만 아직 초기화가 되지않아 변수에 담길 값을 위한 공간이 메모리에 할당되지 않은 상태
    // let과 const는 TDZ에 영향을 받는다. 할당을 하기 전에는 사용할 수 없다.
    // var 변수를 선언하기 전에 호출을 해도 undefined로 호출이 되는 호이스팅 발생
    // let 선언 전, 실행 컨텍스트 변수 객체에 등록이 되어 호이스팅 되지만, TDZ 구간에 의해 메모리가 할당되질 않아 에러 발생
    const name1 = "Mike"; // 함수 선언 및 할당
    console.log(name1); // 사용가능


    let age = 30; 

    function showAge(){
        console.log(age);
        let age = 20;
    }
    showAge(); // outcome: 에러
    // showAge 함수의 스코프는 함수 내부
    // let age = 20; 이 변수가 호이스팅을 일으킨다.
    // 만약 호이스팅이 일어나지 않았다면 함수 밖의 let age = 30; 이 변수가 나와야한다.


// 변수의 생성과정
    // 1. 선언 단계
    // 2. 초기화 단계: undefined를 할당 해주는 단계
    // 3. 할당 단계

    // var
        // 1. 선언 + 초기화 단계 (∵ 할당 전에 호출하면 에러를 나지 않고 undefined 나온다. )
        // 2. 할당 단계

    // let
        // 1. 선언 단계 
        // 2. 초기화 단계
        // 3. 할당 단계
        // 호이스팅 되면서 선언 단계가 이루어지지만 초기화 단계는 실제 코드에 도달했을 때 이뤄지기 때문에 referrence 에러 발생

    // const
        // 1. 선언 + 초기화 + 할당
            const gender;
            gender = 'male'; // outcome : 에러 (∵ 선언하면서 바로 할당을 하지 않음)


// 스코프(Scope)

    // 블록 스코프(block-scoped)
        // 모든 코드 블록에서 선언된 변수는 코드 블록 내부에서만 유효하며, 외부에서는 접근할 수 없다.
        // 즉, 코드 블록에서 내부에서 선언한 변수는 지역변수이다.
        // 코드 블록이란 함수, if문, for문, while문, try/catch 문 등을 의미

    // 함수 스코프(function-scoped)
        // 함수 내애서 선언된 변수만 그 지역변수가 된다.

    // var : 함수 스코프(function-scoped)
    // let, const : 블록 스코프(block-scoped)

    // 예시
        const age = 30;

        if(age > 19){
            var txt = '성인';
        }

        console.log(txt); // outcome: 성인
        // if문 안에서 var로 선언된 변수는 if문 밖에서 사용가능하다.
        // 하지만 let과 const는 if문 안(중괄호 안)에서만 사용가능하다.

    // 예시
        function add(num1, num2){
            var result = num1 + num2;
        }

        add(2, 3)

        console.log(result) // outcome: 에러
        // 함수 내부에서 var 변수가 선언되면 함수 외부에서 사용할 수 없다.
        // 유일하게 벗어날 수 없는 스코프가 함수라고 기억하기.