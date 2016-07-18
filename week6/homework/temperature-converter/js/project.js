$('button').onclick = updateFahrenheit;

$('button').onclick = updateCelsius;

$('celsius').value = 0;

// initial value on page load
updateFahrenheit();

function updateFahrenheit() {
  var c = $('celsius').value;
  var f;
  if ( (c == null) || (c == "") || (isNaN(c) ) )
  {
    f = "";
  }
  else
  {
    f = celsiusToFahrenheit(c);
  }
  $('fahrenheit').value = f;
}

function updateCelsius() {
  var f = $('fahrenheit').value;
  var c;
  if ( (f == null) || (f == "") || (isNaN(f) ) )
  {
    c = "";
  }
  else
  {
    c = fahrenheitToCelsius(f);
  }
  $('celsius').value = c;
}

function myround(x) {
  return Math.round(10 * x) / 10;
}

function celsiusToFahrenheit(c) {
  var answer = c * 9 / 5 + 32;
  return myround(answer);
}

function fahrenheitToCelsius(f) {
  var answer = (f - 32) * 5 / 9;
  return myround(answer);
}
