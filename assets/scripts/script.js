let result = document.getElementById('result');
let memory = 0;

function appendToResult(val) {
  result.value += val;
}

function clearResult() {
  result.value = '';
}

function calculateResult() {
  result.value = eval(result.value);
}

function calculateSquareRoot() {
  result.value = Math.sqrt(result.value);
}

function calculateSine() {
  result.value = Math.sin(result.value);
}

function calculateCosine() {
  result.value = Math.cos(result.value);
}

function calculateTangent() {
  result.value = Math.tan(result.value);
}

function storeToMemory() {
  memory += parseFloat(result.value);
  result.value = '';
}

function retrieveFromMemory() {
  result.value = memory;
}

function clearMemory() {
  memory = 0;
}
