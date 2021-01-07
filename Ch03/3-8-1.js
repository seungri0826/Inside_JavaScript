var foo = {
    name : 'foo',
    nickname : 'babo'
};

console.log(foo.nickname);
delete foo.nickname;
console.log(foo.nickname); // undefined 출력

delete foo;
console.log(foo.name);