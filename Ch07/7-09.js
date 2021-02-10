var print_all = function(arg) {
    for (var i in this) console.log(i + " : " + this[i]);
    for (var i in arguments) console.log(i + " : " + arguments[i]);
}

var myobj = { name : "zzoon" };

var myfunc = print_all.bind(myobj);
myfunc();

var myfunc1 = print_all.bind(myobj, "iamseungri", "others");
myfunc1("insidejs");

/*
name : zzoon
name : zzoon
0 : iamseungri
1 : others
2 : insidejs
 */