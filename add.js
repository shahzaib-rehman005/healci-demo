function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  // BUG: adds instead of multiplying
  return a + b;
}

module.exports = { add, multiply };
