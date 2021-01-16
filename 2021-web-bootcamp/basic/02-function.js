//BMI Calculator

function getBMI(height, weight){
    return round(weight/(height*height));
}

var myheight = prompt("Send your height in meter");
var myweight = prompt("Send your Weight in kilogram");

alert(getBMI(myheight,myweight));