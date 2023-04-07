// 1. Write a JavaScript program that accepts two numbers in two prompts and
//    displays the larger one in the console.
let no1=+prompt("enter 1st no: ");
let no2=+prompt("enter 2nd no: ");
if (no1>no2){
  console.log(no1);
}
else{
  console.log(no2);
}
// 2. Write a JavaScript conditional statement to find the sign of a number. Display
//    an alert box with the specified sign.
let num=+prompt("write an interger: ");
if(num>=0){
  alert("number have +ve sign");
}
else{
  alert("number have -ve sign");
}
//3.Write a java scrift program that accept 5 number in five prompts and display the larger one 
//in the console.
let num1 = prompt+("Enter the first number:");
let num2 = prompt+("Enter the second number:");
let num3 = prompt+("Enter the third number:");
let num4 = prompt+("Enter the fourth number:");
let num5 = prompt+("Enter the fifth number:");

let max = num1;

if (num2 > max) {
  max = num2;
}

if (num3 > max) {
  max = num3;
}

if (num4 > max) {
  max = num4;
}

if (num5 > max) {
  max = num5;
}

console.log("The largest number is: " + max);
// 4. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it
//    will check if the current number is odd or even, and display a message to the
//    screen.
for(let i=1;i<16;i++){
if(i%2===0){
  console.log(i+" is even");
}
else{
  console.log(i+" is odd");
}
}
// 5. Write a JavaScript program which computes the average marks of the
//    following students Then, this average is used to determine the corresponding
//    grade.
let marks=+prompt("enter your marks: ");
if (marks>=90){
  console.log("A");
}
else if(marks>=80){
  console.log("B");
}
else if(marks>=70){
  console.log("C");
}
else if(marks>=60){
  console.log("D");
}
else{
  console.log("F");

//6.write a javascript porgram which litegers from 1 to 100. but for multiples of three 
//print "fizz" instead of the mumber and for the multiples of five print "buzz".
//for numbers which are multiples of both three and five print "fizzBuzz"

}for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
//7.write a javascript program to construct the following pattern ,using a nested for loop.
for (let i = 1; i <= 5; i++) {
  let pattern = "";
  for (let j = 1; j <= i; j++) {
    pattern += "* ";
  }
  console.log(pattern);
}