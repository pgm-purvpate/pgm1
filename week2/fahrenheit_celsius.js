let Celcius = parseFloat(10);
let Fahrenheit = parseFloat(50);

function cToF(celsius) 
{
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
  var message = cTemp+' is ' + cToFahr + ' F.';
  console.log(message);
}

function fToC(fahrenheit) 
{
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  var message = fTemp+' F is ' + fToCel + ' C.';
  console.log(message);
} 

cToF(Celcius);
fToC(Fahrenheit);


