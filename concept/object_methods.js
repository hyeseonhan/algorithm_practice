// 객체 메소드(object methods)
// 계산된 프로퍼티(computed property)


// 계산된 프로퍼티(computed property)
let a = 'age';
const user = {
    name : 'Mike',
    age : 30,
}

let a = 'age';
const user = {
    name : 'Mike',
    [a] : 30,
}
user; // outcome: {name: 'Mike', age: 30}
// age 대신 [a] 
// 변수 a에 할당 된 값이 들어간다. => computed property

const user = {
    [1 + 4] : 5,
    ["안녕" + "하세요" ] : "Hello"
}
user; // outcome: {5: 5, 안녕하세요: 'Hello'}


// 객체에서 사용할 수 있는 methods
Object.assign();
Object.keys();
Object.values();
Object.entries();
Object.fromEntries();

// 객체 복제 Object.assign();
    const user = {
        name : 'Mike',
        age : 30,
    }

    const cloneUser = user; 
        // 이렇게 하면 복제가 안됨. 참조값만 복사가된다. 
        // 하나의 객체에 두개의 변수가 접근하는 것 뿐

    const newUser = Object.assign({}, user);
        //                          {} 빈객체 = 초기값
        // 두번째 매개변수부터 들어온 객체들이 초기값에 병합된다.
        // {} 빈객체에 user가 병합되서 복제된다.

        // {} + {name : 'Mike', age : 30} = {
        //                                    name : 'Mike',
        //                                    age : 30,
        //                                  }

    newUser.name = 'Tom';
    newUser.name // outcome: Tom  
    user.name; // outcome: Mike
        // newUser의 name을 바꿔도 user는 변함이 없다.
        // newUser와 user는 같은 객체가 아니다.

    const anoterUser = Object.assign({gender: 'male'}, user);
        // gender만 있는 객체가 user와 병합
        // 총 세개의 프로퍼티를 가진다.
    anoterUser; // outcome: {gender: 'male', name: 'Mike', age: 30}


    // 병합을 하는데 key가 같다면?
        const otherUser = Object.assign({name: 'Tom'}, user);
        // 같은 key 값('Tom')은 덮어씌워진다.
        otherUser; // outcome: {name: 'Mike', age: 30}


    // 두개 이상의 객체 합치기
        const user = {
            name : 'Mike' 
        }
        const info1 = {
            age : 30
        }
        const info2 = {
            gender : 'male',
        }

        Object.assign(user, info1, info2)
        console.log(user) // outcome: {name: 'Mike', age: 30, gender: 'male'}


// key 배열 반환 Object.keys();
// 객체 프로퍼티의 key를 배열로 반환한다.
const user = {
    name : 'Mike',
    age : 30,
    gender : 'male',
}

Object.keys(user) // outcome: ['name', 'age', 'gender']


// 값(value) 배열 반환 Objet.values();
// 객체의 값을 배열로 반환한다.
const user = {
    name : 'Mike',
    age : 30,
    gender : 'male',
}

Object.values(user) // outcome: ['Mike', 30, 'male']


// key/value 배열 반환 Object.entries();
// 키와 값을 쌍으로 묶어서 배열로 반환한다.
const user = {
    name : 'Mike',
    age : 30,
    gender : 'male',
}

Object.entries(user);
// outcome: 
// 0: (2) ['name', 'Mike']
// 1: (2) ['age', 30]
// 2: (2) ['gender', 'male']


// key/value 배열을 객체로 반환 Object.fromEntries()
const arr = [
    ['name', 'Mike'],
    ['age', 30],
    ['gender', 'male'],
]

Object.fromEntries(arr) // outcome: {name: 'Mike', age: 30, gender: 'male'}


// 계산된 프로퍼티(computed property)
let n = "name";
let a = "age";

const user = {
    [n] : 'Mike',
    [a] : 30,
}

console.log(user) // outcome: {name: 'Mike', age: 30}


function makeObj(key, val){
    return {
        [key] : val
    }
}

const obj = makeObj('나이', 33)

console.log(obj) // outcome: {나이: 33}

// 객체에서 사용할 수 있는 methods
const user = {
name : 'Mike',
age : 30,
}

const user2 = user; // 이런식으로 복사할 수 없다!
console.log(user2) // outcome : {name: 'Mike', age: 30} 잘 복사된 것첨럼 보이지만
user2.name = "Tom"
console.log(user2) // outcome : {name: 'Tom', age: 30}
console.log(user) // outcome : {name: 'Tom', age: 30}
// user2의 name만 변경했을 뿐인데 user의 name도 변경된다. 하나의 객체로 인식한다.

const user2 = Object.assign({}, user); 
console.log(user2) // outcome : {name: 'Tom', age: 30}
console.log(user)  // outcome : {name: 'Mike', age: 30}

Object.keys(user) // outcome : ['name', 'age']
Object.values(user)  // outcome :  ['Mike', 30]
Object.entries(user) // outcome : ['name', 'Mike'] ['age', 30]

let arr = [
['mon', '월'],
['tue', '화']
]
Object.fromEntries(arr) // outcome : {mon: '월', tue: '화'}