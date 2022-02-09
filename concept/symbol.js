// 심볼(Symbol)
// property: 속성이라는 뜻으로, 자바스크립트에서 객체 내부의 속성을 의미한다.

// property key : 문자형
    const obj = {
        1 : '1입니다.',
        false : '거짓'
    }

    Object.keys(obj) // outcome : ['1', 'false']
    // key가 숫자형이나 Boolean형으로 만들어도 Object.keys로 property를 가져오면 문자형으로 반환된다.

    obj['1']     // outcome : '1입니다.'
    obj['false'] // outcome : '거짓'

    // ∴ 객체 프로퍼티(객체내부속성) key는 문자형으로 가능하다.


// symbol형
// new를 붙이지 않는다.
// 유일한 식별자를 만들 때 사용한다.
// 유일성 보장
    const a = Symbol(); 
    const b = Symbol(); 

    console.log(a); // outcome : Symbol()
    console.log(b); // outcome : Symbol()
    console.log(a === b); // outcome : false

    const id = Symbol('id')
    // symbol을 만들때 괄호안에 설명을 넣을 수도 있다.


// property key : 심볼형
// Symbol을 객체의 key로 사용
// 특정 객체에 원본 데이터는 건드리지 않고 속성을 추가할 수 있다.
    const id = Symbol('id')
    const user = {
        name: 'Mike',
        age : 30,
        [id] : 'myid'
    }

    console.log(user); // outcome : {name: 'Mike', age: 30, Symbol(id): 'myid'}
    console.log(user[id]); // outcome : 'myid'

    Object.keys(user); // outcome: ['name', 'age']
    Object.values(user); // outcome: ['Mike', 30]
    Object.entries(user);
    // ∴ 심볼형은 건너뛰고 결과가 나온다.


// Symbol.for(); 전역 심볼
// 코드 어디에서든 사용 가능
// 하나의 심볼만 보장받을 수 있다.(∵ 없으면 만들고, 있으면 가져오기 때문)
// Symbol 함수는 매번 다른 Symbol 값을 생성하지만, 
// Symbol.for 메서드는 하나를 생성한 뒤 키를 통해 같은 Symbol을 공유
    const id1 = Symbol.for('id');
    const id2 = Symbol.for('id');

    console.log(id1 === id2); // outcome: true

    Symbol.keyFor(id1); // outcome: 'id'

// 전역 심볼이 아닌 Symbol은 Symbol.keyFor() 을 사용할 수 없다.
// 대신 description 으로 이름을 알 수 있다.
const id = Symbol.for('id 입니다.');
id.description; // outcome: 'id 입니다.'

// 숨겨진 Symbol key 보는 법
    const id = Symbol('id')
    const user = {
        name: 'Mike',
        age : 30,
        [id] : 'myid'
    }

    Object.getOwnPropertySymbols(user) // outcome: Symbol(id)
    Reflect.ownKeys(user); // outcome: ['name', 'age', Symbol(id)]

    
// 다른 개발자가 만들어 놓은 객체
const user = {
    name: 'Mike',
    age : 30,
}

// 예시
user.showName = function(){}

// 사용자가 접속하면 보는 메세지
for(let key in user){
    console.log(`His ${key} is ${user[key]}`)
};
// outcome:
// His name is Mike
// His age is 30
// His showName is function(){}

// Symbol을 하나 만든다.
const showName = Symbol('show name');
user[showName] = function () {
    console.log(this.name);
};

for(let key in user){
    console.log(`His ${key} is ${user[key]}`)
};
// outcome:
// His name is Mike
// His age is 30
 
user[showName](); // outcome: Mike
