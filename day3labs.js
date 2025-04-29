//basic functions
function calculateArea(width, height = 1) {
    return width * height;
  }
  
  console.log(`Area (6, 3): ${calculateArea(6, 3)}`);
  console.log(`Area (9): ${calculateArea(9)}`); 
  

const calculateAreaArrow = (width, height = 1) => width * height;


console.log(`Area (5, 2): ${calculateAreaArrow(5, 2)}`);
console.log(`Area (4): ${calculateAreaArrow(4)}`); 


//scope
let message = "Global greeting";

const sayHello = (name = "User") => {
  let message = "Hello from function";
  return `${message}, ${name}`;
};

console.log(message); 
console.log(sayHello("Sophie")); 
console.log(sayHello());