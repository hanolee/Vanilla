function test(){
    var a = "3";
    var b = "8";

    var t = b;
    b = a;
    a = t;

    console.log("a is " + a);
    console.log("b is " + b);

}


var name = prompt("what is your name?");

var firstChar = name.slice(0,1);

var restOfName = name.slice(1,name.length);

var newname = firstChar.toUpperCase() + restOfName;

alert(newname);