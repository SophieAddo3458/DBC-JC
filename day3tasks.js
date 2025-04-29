//factorial
function createFactorial() {
    const cache = {};
  
    return (n) => {
      if (!Number.isInteger(n) || n < 0) {
        return "Invalid input";
      }
  
      if (cache[n]) {
        return cache[n];
      }
  
      let result = 1;
      for (let i = 2; i <= n; i++) {
        result *= i;
      }
  
      cache[n] = result;
      return result;
    };
  }
  
  const factorial = createFactorial();
  
  const testInputs = [5, 7, 5, 1, 3, 10];
  
  testInputs.forEach(input => {
    const result = factorial(input);
    console.log(`Factorial of ${input}: ${result}`);
  });



  ///string formatter
  const formatString = (str, options = { uppercase: false, reverse: false, trim: false }) => {
    if (typeof str !== "string") return "Invalid input";
    let result = str;
    if (options.trim) result = result.trim();
    if (options.uppercase) result = result.toUpperCase();
    if (options.reverse) result = result.split("").reverse().join("");
    return `Formatted: "${result}"`;
  };
  
  console.log(formatString("hello", { uppercase: true }));
  console.log(formatString("World", { reverse: true }));
  console.log(formatString(123, { uppercase: true }));
  
  // Task 3
  const createFilter = (condition) => {
    let count = 0;
    return (arr) => {
      if (!Array.isArray(arr) || !["even", "odd", "positive"].includes(condition)) {
        return "Invalid input";
      }
      count++;
      let result = [];
      if (condition === "even") result = arr.filter(num => num % 2 === 0);
      if (condition === "odd") result = arr.filter(num => num % 2 !== 0);
      if (condition === "positive") result = arr.filter(num => num > 0);
      console.log(`Call ${count}:`, result);
      return result;
    };
  };
  
  const evenFilter = createFilter("even");
  evenFilter([1, 2, 3, 4]);
  evenFilter([6, 7, 8, 10]);
