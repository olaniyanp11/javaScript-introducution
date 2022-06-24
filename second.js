var num1 = parseInt(prompt("number1: "));
var opr = prompt("operation: +,-,*,/");
var num2 = parseInt(prompt("number2: "));
let result;

if (isNaN(num1) || isNaN(num2)) {
  window.prompt("incorrect input please refresh and restart");
} else {
  if ((opr = "+")) {
    result = num1 + num2;
  } else if ((opr = "-")) {
    result = num1 + num2;
  } else if ((opr = "*")) {
    result = num1 + num2;
  } else if ((opr = "/")) {
    result = num1 + num2;
  }
}
alert("=" + result);
