function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;

    return {name: 'bar', age: 20, gender: 'woman'};
}

var foo = new Person('foo', 30, 'man');
console.dir(foo);