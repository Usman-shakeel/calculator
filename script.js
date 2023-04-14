var screenValue;

// var multiplication;
// var division;
// var subtraction;
// var addition;

document.addEventListener('DOMContentLoaded', () => {
  var inputField = document.querySelector('#screen');
  screenValue = inputField;
// console.log(screenValue.value);
});

function clearScreen() {
  screenValue.value = "";
}

function button(number) {
  screenValue.value += number;
}

function point() {
  if (!screenValue.value.includes('.')) {
    screenValue.value += '.';
  }
}

function percent() {
  var currentValue = parseFloat(screenValue.value);
  var percentValue = currentValue / 100;
  screenValue.value = percentValue.toFixed(2) + "%";
}

function division() {
  if (!screenValue.value.includes('/')) {
    screenValue.value += '/';
  }
}

function multiply() {
  if (!screenValue.value.includes('*')) {
    screenValue.value += '*';
  }
}

function addition() {
  if (!screenValue.value.includes('+')) {
    screenValue.value += '+';
  }
}

function subtraction() {
  if (!screenValue.value.includes('-')) {
    screenValue.value += '-';
  }
}

function equalsTo() {
    var expression = screenValue.value;
    var result = eval(expression);
    screenValue.value = result;  
}

function deleteLastDigit() {
  screenValue.value = screenValue.value.slice(0, -1);
}

