// One => Alert
alert("Hello, world!");

// Two => Variable Definition
var x = 5;
let y = "JavaScript";
const z = true;

// Three => Basic Arithmetic
var a = 10;
var b = 5;
console.log(a + b); // output: 15
console.log(a - b); // output: 5
console.log(a * b); // output: 50
console.log(a / b); // output: 2

// Four => Create a function
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("John"); // output: Hello, John!

// Five => Conditional Elements
var age = 18;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are not an adult yet.");
}

// Six => Loops
for (var i = 0; i < 5; i++) {
  console.log(i);
}

var i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

// If you are concerned on the Undefined which comes when there is no execute, then read about REPL (Read Evaluate Print Loop)
// https://blog.bitsrc.io/why-does-console-log-return-undefined-e06d44b4d0f8
