// (3) 루프 안에서 클로저 활용할 때는 주의
function countSeconds(howMany) {
    for (var i = 1; i <= howMany; i++) {
        setTimeout(function() {
            console.log(i);
        }, i * 1000);
    }
};
countSeconds(3);    // 4가 연속 3번 1초 간격으로 출력