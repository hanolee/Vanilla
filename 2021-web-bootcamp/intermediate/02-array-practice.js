var nameArray = ["Angella","Mike","John","Hano","Boo"];

var nameSended = prompt("Who does go to eat the lunch");

firstchar = nameSended.slice(0,1);
rest = nameSended.slice(1,nameArray.length);
nameSended = firstchar.toUpperCase() + rest;

if(nameArray.includes(nameSended)){
    alert((nameSended + " is ounside for lunch"));
} else {
    alert("that person not here");
    console.log(nameArray);
}

