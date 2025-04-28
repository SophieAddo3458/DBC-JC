
//control flow
//1.if else statement
let age = 18;
if (age >= 18) {
    console.log("You are an adult");
} else{
    console.log("You are a minor");
}

//ternary operator
let T_age = age = 18;
let result = (T_age >= 18) ? "You are an adult": "You are a minor";
console.log(result);

//if else if statement
let score = 85;
if (score >= 90) {
    console.log("Grade A");
}
else if (score >= 80){
    console.log("Grade B");
} else if (score >= 70){
    console.log("Grade C");
}
    else {
        console.log("Grade D");
    }

//ternary operator
let T_score = 85;
(T_score >= 90) ? "Grade A": (T_score >= 80) ? "Grade B": 
        (T_score >= 70) ? "Grade C" : "Grade D";
        console.log(result);

//for loop
let i = 0;
for (let i = 0; i<11; i++){
    console.log(i);
}

let mixed = [1,3,5,"hello", true, 2.5];

for(let i=0; i < mixed.length; i++){
    console.log(mixed[i]);
}


//do while loop
let x = 0;
do{
    console.log(mixed[x]);
     x++;
     console.log("x is " + x);
}
while (x < mixed.length)
    console.log("x is completed: " + x);
    


