function add(a, b) {
  // BUG (retest): should add, but subtracts
  return a - b;
}

module.exports = { add };
