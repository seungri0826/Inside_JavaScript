// colorsArray 배열
var colorsArray = ['orange', 'yellow', 'green'];
console.log(colorsArray[0]);
console.log(colorsArray[1]);
console.log(colorsArray[2]);

// colorsObj 객체
var colorsObj = {
    '0' : 'orange',
    '1' : 'yellow',
    '2' : 'green'
};
console.log(colorsObj[0]); // []연산자 내에 숫자가 사용될 경우, 해당 숫자를 자동으로 문자열로 바꿔줌
console.log(colorsObj[1]);
console.log(colorsObj[2]);

console.log(typeof colorsArray);
console.log(typeof colorsObj);

console.log(colorsArray.length);
console.log(colorsObj.length);

colorsArray.push('red');
colorsObj.push('red');