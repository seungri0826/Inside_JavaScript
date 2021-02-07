// (2) 클래스 기반의 상속
function Person(arg) {
    this.name = arg;
}

Person.prototype.setName = function(value) {
    this.name = value;
};

Person.prototype.getName = function() {
    return this.name;
};

function Student(arg) {
    // 빈 채로 두면 부모의 생성자가 호출되지 않아 인스턴스의 초기화가 제대로 이루어지지 않기에 문제 발생할 수 O
    Person.apply(this, arguments);
}

var you = new Person("iamseungri");
Student.prototype = you;

var me = new Student("zzoon");
me.setName("zzoon");
console.log(me.getName());