// buffAr를 추가적인 스코프에 넣고 사용
var getCompletedStr = (function() {
    var buffAr = [
        'I am ',
        '',
        '. I live in ',
        '',
        '. I\'am ',
        '',
        ' years old.',
    ];

    return (function(name, city, age) {
        buffAr[1] = name;
        buffAr[3] = city;
        buffAr[5] = age;

        return buffAr.join('');
    });
})();

var str = getCompletedStr('zzoon', 'seoul', 16);
console.log(str);