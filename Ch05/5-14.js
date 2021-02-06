// (1) 클로저의 프로퍼티 값이 쓰기 가능하므로 그 값이 여러 번 호출로 항상 변할 수 있음에 유의
function outerFunc(argNum) {
    var num = argNum;
    return function(x) {
        num += x;
        console.log('num: ' + num);
    }
}
var exam = outerFunc(40);
exam(5);    // 45
exam(-10);  // 35