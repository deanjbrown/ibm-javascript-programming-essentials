// Note: execution will when a reference error is generated

// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";

{
  // Block scope
  var blockVar = "I'm a block-scoped var";
  let blockLet = "I'm a block-scoped let";
  const blockConst = "I'm a block-scoped const";
}

// Log the globally scoped variables
console.log(globalVar);
console.log(globalLet);
console.log(globalConst);

// Log the block-scoped variables
console.log(blockVar); // We can log blockVar because it was scoped with var
console.log(blockLet); // We will generate a reference error for blockLet because it is block-scoped and defined with let
console.log(blockConst); // This will also generate a reference error

// Function scope
function show() {
  var functionVar = "I'm a block-scoped var";
  let functionLet = "I'm a block-scoped let";
  const functionConst = "I'm a block-scoped const";
}

// Execute the function
show();

// Attempt to log the variables (These will all generate reference errors because all variables are scoped within the function)
console.log(functionVar);
console.log(functionLet);
console.log(functionConst);
