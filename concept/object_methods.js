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
    user; // outcome: 5: 5, 안녕하세요: 'Hello'}


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

const user = {
    name : 'Mike' 
}
const info1 = {
    age : 30
}
const info1 = {
    age : 30
}

Object.assign({}, user, info1, info2)



