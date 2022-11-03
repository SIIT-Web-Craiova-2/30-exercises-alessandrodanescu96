function conversionCToF(celsius)
{
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32; //formula conversiei din C in F
  var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.'; //conversia
    console.log(message);
}

function conversionFToC(fahrenheit)
{
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9; //formula conversiei din F in C
  var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    console.log(message);
}
conversionCToF(50); //conversia C to F
conversionFToC(20); //conversia F to C
