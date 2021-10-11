let Celcius = parseFloat(10);
let Fahrenheit = parseFloat(50);

let cToF_s = (cTemp) => (cTemp * (9 / 5) + 32);
let fToC_s = (ftemp) => ((ftemp - 31) * 5/9);

console.log(`${Celcius} C is ${cToF_s(Celcius)} F`);
console.log(`${Fahrenheit} F is ${Math.floor(fToC_s(Fahrenheit))} C`);


