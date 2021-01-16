//bmi calculator

var yourHeight = prompt("Put in your height in m");
var yourWeight = prompt("Put in your Weight in kg");

function getBMI(height, weight) {
    var bmi =  Math.round(weight/(height*height));
    if (bmi < 18.5){
alert("Your BMI is <" + bmi +">, so you are underweight")
    }
    if (18.5<= bmi < 24.9){
alert("Your BMI is <" + bmi +">, so you have a normal weight")
    }
    if (bmi >= 24.9){
        alert("Your BMI is <" + bmi +">, so you are overweight")
    }
    
}

getBMI(yourHeight, yourWeight);
