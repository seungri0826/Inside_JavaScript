function parent() {
    var a = 100;
    var child = function() {
        console.log(a);
    }

    return child;
}

var inner = parent();
inner();