function subClass(obj) {
    var parent = this === global ? Function : this; // Node.js의 경우 global을 사용
    var F = function() {};

    var child = function() {
        var _parent = child.parent;

        if (_parent && _parent !== Function) {
            _parent.apply(this, arguments);
        }

        if (child.prototype._init) {
            child.prototype._init.apply(this, arguments);
        }
    };

    F.prototype = parent.prototype;
    child.prototype = new F();
    child.prototype.constructor = child;
    child.parent = parent;
    child.subClass = arguments.callee;

    for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
            child.prototype[i] = obj[i];
        }
    }
    return child;
}

var person = function(arg) {
    var name = undefined;

    return {
        _init: function(arg) {
            name = arg ? arg : "zzoon";
        },
        getName: function() {
            return name;
        },
        setName: function(arg) {
            name = arg;
        }
    };
}

Person = subClass(person());
var iamseungri = new Person("iamseungri");
console.log(iamseungri.getName());

Student = Person.subClass();
var student = new Student("student");
console.log(student.getName());