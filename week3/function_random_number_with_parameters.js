function generateRandomNumber(min, max){
    return Math.floor(Math.random()*(max-min+1)+min); // return random number
}

console.log(generateRandomNumber(20, 30));// Log return value, call function, arg 1 is min, arg 2 is max
console.log(generateRandomNumber(5, 20)); // Log return value, call function, arg 1 is min, arg 2 is max