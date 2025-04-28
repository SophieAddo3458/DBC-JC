//Task 1

let limit = 20;
let prime = [];

for (let num = 2; num <= limit; num++) {
  let isPrime = true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    prime.push(num);
  }
}

prime.forEach(prime => {
  console.log(`Prime: ${prime}`);
});

// Task 2

let text = "Hello World";
let lowerText = text.toLowerCase();
let charCounts = {};

for (let char of lowerText) {
  if (char >= 'a' && char <= 'z') {
    charCounts[char] = (charCounts[char] || 0) + 1;
  }
}

console.log(`Unique character counts: ${JSON.stringify(charCounts, null, 2)}`);
