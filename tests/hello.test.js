const assert = require("assert");
const test = require("node:test");
const { sayHello } = require("../hello");

function captureOutput(fn) {
  const originalLog = console.log;
  let output = "";
  console.log = (msg) => {
    output += msg;
  };
  try {
    fn();
  } finally {
    console.log = originalLog;
  }
  return output;
}

test("sayHello prints Hello, Codex!", () => {
  const output = captureOutput(sayHello);
  assert.strictEqual(output, "Hello, Codex!");
});
