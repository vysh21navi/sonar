function add(a, b) {
  return a + b;
}

function isEven(n) {
  return n % 2 === 0;
}

function greet(name) {
  if (!name) {
    return "Hello, stranger!";
  }
  return `Hello, ${name}!`;
}

module.exports = { add, isEven, greet };
