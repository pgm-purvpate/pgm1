const year = 2012;
let isLeapYear = false;

if (year % 4 === 0){
    if (year % 100 !== 0){
        isLeapYear = true;
    } else if (year % 400 === 0){
        isLeapYear = true;
    }
}

console.log(isLeapYear);