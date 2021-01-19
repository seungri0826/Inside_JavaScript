function Person(name, age, gender, position) {
    this.name = name;
    this.age = age;
    this.gender = gender;
} // 생성자 함수


var qux = Person('qux', 20, 'man');
console.log(qux);

console.log(window.name);
console.log(window.age);
console.log(window.gender);