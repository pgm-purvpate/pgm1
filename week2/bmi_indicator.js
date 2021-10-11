let length = parseFloat(1.84);
let weight = 94;

let bmi = (weight / Math.pow(length,2)).toFixed(2);
let msg;

if (bmi > 30) {
	msg = ". You are heavily overweight.";
} else if (bmi >= 25 && bmi <= 30) {
	msg = ". You are overweight."
} else if (bmi > 18.5 && bmi < 25) {
	msg = ". You have a good balance."
} else {
	msg = ". You are underweight."
}

console.log("Your BMI is " + bmi + msg);