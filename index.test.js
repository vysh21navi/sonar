const { add, isEven, greet } = require("./index");

test("add adds two numbers", () => {
  expect(add(2, 3)).toBe(5);
});

test("isEven detects even numbers", () => {
  expect(isEven(4)).toBe(true);
  expect(isEven(5)).toBe(false);
});

test("greet works with and without a name", () => {
  expect(greet("vysh")).toBe("Hello, vyshnavi!");
  expect(greet()).toBe("Hello, stranger!");
});
