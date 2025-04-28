// Task 1: Shopping Cart Total with Discounts
const cart = [
  { name: "Shirt", price: 20, quantity: 2 },
  { name: "Pants", price: 40, quantity: 3 },
  { name: "Hat", price: 15, quantity: 1 }
];

let subtotal = 0;
let totalQuantity = 0;

for (let item of cart) {
  subtotal += item.price * item.quantity;
  totalQuantity += item.quantity;
}

let discountRate = 0;
if (totalQuantity > 10) {
  discountRate = 0.2;
} else if (totalQuantity > 5) {
  discountRate = 0.1;
}

const discountAmount = subtotal * discountRate;
const finalTotal = subtotal - discountAmount;

console.log("=== Task 1: Shopping Cart Total ===");
console.log(`Subtotal: $${subtotal.toFixed(2)}`);
console.log(`Discount: $${discountAmount.toFixed(2)}`);
console.log(`Final Total: $${finalTotal.toFixed(2)}`);
console.log("\n");

// Task 2: Type Validator
const values = [42, "hello", true, null, { name: "Bob" }, [1, 2], undefined, function() {}];

const typeCounts = {
  number: 0,
  string: 0,
  boolean: 0,
  object: 0,
  array: 0,
  function: 0,
  undefined: 0,
  null: 0
};

for (let value of values) {
  if (Array.isArray(value)) {
    typeCounts.array++;
  } else if (value === null) {
    typeCounts.null++;
  } else {
    typeCounts[typeof value]++;
  }
}

console.log("=== Task 2: Type Validator ===");
console.log(typeCounts);
console.log("\n");

// Task 3: Compound Interest Calculator
let principal = 1000;
let rate = 0.05;
let years = 5;

if (principal <= 0 || rate <= 0 || years <= 0) {
  console.log("Invalid input! Principal, rate, and years must all be positive numbers.");
} else {
  const finalAmount = principal * Math.pow(1 + rate, years);
  const interestEarned = finalAmount - principal;

  const results = {
    finalAmount: finalAmount.toFixed(2),
    interestEarned: interestEarned.toFixed(2)
  };

  console.log("=== Task 3: Compound Interest Calculator ===");
  console.log(results);
}
