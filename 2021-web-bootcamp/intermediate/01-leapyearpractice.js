var isDividableBy4 = true
var isDividableBy100 = true
var isDividableBy400 = true
function isLeapYear(year){
    checkDiviable(year);
    if (isDividableBy4 === true) {
        if(isDividableBy100 === true){
            if(isDividableBy400 === true){
                return "Leap year";
            }else{
                return "Not Leap year";
            }
        } else {
            return "Leap year";
        }
    } else {
        return "Not Leap year";
    }
}

function checkDiviable(year){
    if (year%4 === 0){
        isDividableBy4 = true;
    } else {
        isDividableBy4 = false;
    }
    if (year%100 === 0){
        isDividableBy100 = true;
    } else {
        isDividableBy100 = false;
    }
    if (year%400 === 0){
        isDividableBy400 = true;
    } else {
        isDividableBy400 = false;
    }
}
thisYear = prompt("what is year");
isLeapYear();