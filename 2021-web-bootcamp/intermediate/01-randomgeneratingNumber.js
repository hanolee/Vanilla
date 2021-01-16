var n = Math.random(); //0이상 1미만 소수

n *= 6*n;
n = Math.floor(n) + 1;
console.log(n);

var loveScore = Math.round(Math.random()*100);

if(loveScore>70){
    alert("Your love score is "+loveScore+"!, great! nice");
}else {
    alert("Your love score is "+loveScore+"!");
}
