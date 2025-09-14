// This is the initial code using `var` with some issues to fix.

// Variable declaration and initialization
let x = 10; // Redeclaration, works with var but not allowed with let
console.log(x);

let a = 20;
console.log(a); // Hoisting example: variable is used before declaration

if (true) {
    let z = 30; // Variable declared with var is accessible outside block
    console.log(z); // Should cause a scoping issue when switched to let/const
}


let b = 40; // Variable that changes value
b = 50; // Should be let, as it changes value
console.log(b);

//const PI = 3.14; // Declared as a variable but should ideally be a constant
const PI = 3.14159; // This should throw an error when changed to const
console.log(PI);

// Your task:
// 1. Replace `var` declarations with `let` or `const` as appropriate.
// 2. Resolve issues caused by hoisting, redeclaration, and scoping.
// 3. Ensure the program works correctly after refactoring.
