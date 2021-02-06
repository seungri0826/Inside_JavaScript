// 문장 템플릿을 전역 변수에 저장하는 방법 (=> buffAr가 전역 변수라서 충돌 가능성 존재)
var buffAr = [
    'I am ',
    '',
    '. I live in ',
    '',
    '. I\'am ',
    '',
    ' years old.',
];

function getCompletedStr(name, city, age) {
    buffAr[1] = name;
    buffAr[3] = city;
    buffAr[5] = age;

    return buffAr.join('');
}

var str = getCompletedStr('zzoon', 'seoul', 16);
console.log(str);