function addNumbers(a, b) {
  return a + b
}

function subtractNumbers(a, b) {
  return a - b
}

function multiplyNumbers(a, b) {
  return a * b
}

function divideNumbers(a, b) {
  if (b === 0) {
    return "Error"
  }
  return a / b
}

module.exports = {addNumbers, subtractNumbers, multiplyNumbers, divideNumbers}