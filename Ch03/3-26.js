var arr = ['bar'];
var obj = { name : 'foo', length : 1 };

arr.push('baz');
console.log(arr);

Array.prototype.push.apply(obj, ['baz']);
console.log(obj);