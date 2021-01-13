//add(2, 3); // error

// 함수 표현식 방식 ==> 함수 호이스팅 발생 X
var add = function (x, y) {
    return x + y;
}; // semicolon

add(3, 4);