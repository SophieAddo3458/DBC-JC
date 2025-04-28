///if statement
let score = 75;
if (score >= 90) {
    console.log("Score $score earns grade: A");
}else if (score >= 80){
    console.log("Score $score earns grade: B)");
} else if (score >= 70){
    console.log("Score $score earns grade: C");
} else {
        console.log("Score $score earns grade: F");
    }

///for loop
let numbers = [10, 15, 20, 25, 30];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 5 === 0) {
    console.log(numbers[i]);
  }
}


///while
let count = 10;

while (count > 0) {
  console.log(count);
  
  if (count === 5) {
    console.log("Stopped early!");
    break;
  }
  
  count--;
}

   
  

