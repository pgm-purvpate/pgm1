function randomIntFromInterval(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

number = 10;
const randomNumber = randomIntFromInterval(1,16);


if(number < randomNumber){
    console.log(`${number} is smaller than ${randomNumber}`)
}else if(number > randomNumber){
    console.log(`${number} is bigger than ${randomNumber}`)
}else if(number == randomNumber){
    console.log(`${number} is equal to ${randomNumber}`)
}

console.log(randomNumber);
