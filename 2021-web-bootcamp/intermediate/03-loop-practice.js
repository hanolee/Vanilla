//99bottles song lyrics
var numberOfBottles = 99;

while(numberOfBottles > 0){
    console.log(numberOfBottles + " bottles of beer on the wall, " + numberOfBottles-- + "bottles of beer");
    console.log("Take one down and pass it around, " + numberOfBottles + " bottles of beer of the wall");
}
alert("End!")

//Fibonacci Code


function getFibonacci(fibonacciLength){
    //reset fibonacci
    var fibonacci = [0,1];
    for(i=2; i<fibonacciLength; i++){
        fibonacci.push(fibonacci[i-2] + fibonacci[i-1]);
    }
    console.log(fibonacci);

}
