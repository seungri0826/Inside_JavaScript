// 생성자 함수
function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

var foo = {}; // 빈 객체 생성

//Person.apply(foo, ['foo', 30, 'man']);
Person.call(foo, 'foo', 30, 'man');
console.dir(foo);