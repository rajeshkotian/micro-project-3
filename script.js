function appendNumber(num) {
  document.getElementById("result").value += num;
}

 function appendDot() {
        var result = document.getElementById('result').value;
        var lastChar = result[result.length - 1];
        if (lastChar !== '.') {
            document.getElementById('result').value += '.';
        }
    }


function appendOperator(operator) {
  var result = document.getElementById("result").value;
  var lastChar = result[result.length - 1];
  if (
    lastChar !== "+" &&
    lastChar !== "-" &&
    lastChar !== "*" &&
    lastChar !== "/"
  ) {
    document.getElementById("result").value += operator;
  }
}

function calculate() {
  var result = document.getElementById("result").value;
  var calculation = eval(result);
  document.getElementById("result").value = calculation;
}

function clearResult() {
  document.getElementById("result").value = "";
}

function deleteLast() {
  var result = document.getElementById("result").value;
  document.getElementById("result").value = result.slice(0, -1);
}
