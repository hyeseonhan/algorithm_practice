// swithch문
// 복수의 if 조건문은 switch문으로 바꿀 수 있다.

// 하나 이상의 case문으로 구성

let a = 2 + 2;

switch (a) {
  case 3:
    alert( '비교하려는 값보다 작습니다.' );
    break;
  case 4:
    alert( '비교하려는 값과 일치합니다.' );
    break;
  case 5:
    alert( '비교하려는 값보다 큽니다.' );
    break;
  default:
    alert( "어떤 값인지 파악이 되지 않습니다." );
}
// a 와 case 문의 3과 비교, 그 다음 case 문의 4와 비교..