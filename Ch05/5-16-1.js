// (3)-1 1,2,3을 1초 간격으로 출력
function countSeconds(howMany) {
    for (var i = 1; i <= howMany; i++) {
        (function (currentI) {
            setTimeout(function() {
                console.log(currentI);
            }, currentI * 1000);
        }(i));
    }
};

countSeconds(3);