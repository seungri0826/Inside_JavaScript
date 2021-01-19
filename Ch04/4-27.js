// 내부 함수의 this 바인딩 문제를 해결하는 코드
var value = 100;

var myObject = {
    value: 1,
    func1: function() {
        var that = this; // 부모 함수의 this를 내부 함수가 접근 가능한 다른 변수인 that에 저장

        this.value += 1;
        console.log('func1() called. this.value : ' + this.value);

        func2 = function() {
            that.value += 1;
            console.log('func2() called. this.value : ' + that.value);

            func3 = function() {
                that.value += 1;
                console.log('func3() called. this.value : ' + that.value);
            }
            func3();
        }
        func2();
    }
};

myObject.func1();