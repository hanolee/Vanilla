var guestlist = ["hano","hanoo","jieun", "minjeong"];
var guestName = prompt("What is your name");

if (guestlist.includes(guestName)){
    alert("welcome");
}else 
{
    alert("you are no guest");
}

//
var array = [];
var i = 1;

function simplefizzBuzz(){
    array.push(i++);
    console.log(array);
}

function fizzBuzz(){
    if(i%3 == 1){
        array.push("Fizz");  
        i++
    } else if(i%5 == 2) {
        array.push("Buzz");
        i++
    }else {
        array.push(i++);
    }
    console.log(array);
}