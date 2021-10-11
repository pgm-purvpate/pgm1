let percentage = 91;

let msg = "";
let amount = 0;

if (percentage >= 90) {
    msg += "grootste onderscheiding en de gelukwensen van de examencommissie";
    amount = 5;
} else if (percentage >= 85) {
    msg += "grootste onderscheiding";
    amount = 4;
} else if (percentage >= 77) {
    msg += "grote onderscheiding";
    amount = 3;
} else if (percentage >= 68) {
    msg += "onderscheiding";
    amount = 2;
} else if (percentage >= 50) {
    msg += "op voldoende wijze";
    amount = 1;
} else {
    msg += "GEBUIST";
    amount = 0;
}

let trophy = "";

for (let i=0; i < amount; i++) {
    trophy += "🏆";
}

console.log(msg + ' ' + trophy);