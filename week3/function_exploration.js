/* Begin function */
function checkAge(age) {
    if (age > 18) { // if age higher then 18
      return true; // return true 
    } else { // else
      console.log('Did your parents allow you?'); // log message
    }
  }

/* Stripped else function */

function checkAge_stripped(age) {
    if (age > 18) { // if age higher then 18
      return true; // return true
      console.log('Did your parents allow you?');// Does not work since value already returned
    }
  }

function rewritten_checkAge(age) {
    return (age > 18) ? true : "Did your parents allow you?"; // if age higher then 18 return true else return message
}

function min(a,b){
    return Math.min(a,b) // return min value between 2 values
}

function pow(x, n){
    return Math.pow(x, n); // Getal x tot de macht n
}

console.log(rewritten_checkAge(19))
console.log(min(1,2))
console.log(pow(2,6))