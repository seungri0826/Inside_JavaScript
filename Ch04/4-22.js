function add(a, b) {
    console.dir(arguments); // arguments 객체 출력
    return a + b;
}

console.log(add(1));
console.log(add(1,2));
console.log(add(1, 2, 3));