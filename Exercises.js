// Data Types in JavaScript

// const name = "Antony";
// let studentAge = 28;
// let studentMark = 85;
// let isPassed = true;

// console.log(name);
// console.log(studentAge);
// console.log(studentMark);
// console.log(typeof(isPassed));

// Functions in JavaScript

// function calculateTotalMarks(mark1, mark2, mark3) {
//     let totalMarks = mark1 + mark2 + mark3;
//     return totalMarks;
// }

// let total = calculateTotalMarks(85, 90, 78);
// console.log("Total Marks: " + total);

// const calculateTotal = (price, quantity) => {
//             let total = price * quantity;
//             return total;
// }

// const totalPrice = calculateTotal(75, 3.5);
// console.log("Total Price: " + totalPrice);

// const calculateDiscount = (price, discountPercentage) => {
//     return price - (price * (discountPercentage / 100));
// }

// const AmountTobepay = calculateDiscount(1000, 15);
// console.log("Amount to be paid after discount: " + AmountTobepay);


// Conditions in JavaScript

// function checkGrade(score) {
//     if (score >= 90) {
//         return "A";
//     }
//     else if(score >= 80) {
//         return "B";
//     }
//     else if(score >= 70) {
//         return "C";
//     }
//     else if(score >= 60) {
//         return "D";
//     }
//     else if(score >= 50) {
//         return "E";
//     }
//     else if(score < 40){
//         return "FAILED";
//     }
// }

// const grade = checkGrade(39);
// console.log("Grade: " + grade);

// Scope in JS

// const college = "ABC College";

// function displayStudent() {
//     const name = "Antony";
//     console.log(name);
//     console.log(college);
// }

// displayStudent();


// function createCounter() {
//     let count = 0;

//     return function () {
//         count++;
//         return count;
//     };
// }

// const counter = createCounter();

// console.log(counter()); // 1
// console.log(counter()); // 2
// console.log(counter()); // 3

//? Todays Exercise WORKS

//? WORK 1

// const finalSalary = (basicSalary, bonusPercentage) => {
//     return basicSalary + (basicSalary * (bonusPercentage / 100));
// }

// const salaryAmount = finalSalary(10000, 10);
// console.log("Your Total Salary Amount: " + salaryAmount);

//? Work 2

// const evenorodd = (number) => {
//     return number % 2 === 0;
// }
// const isEven = evenorodd(1)
// if (isEven) {
//     console.log("The number is Even");
// }
// else{
//     console.log("The number is Odd");
// }

//? Work 3

// const largestNumber = (n1,n2,n3) => {
//     if (n1>n2 && n1>n3) {
//         console.log(n1 + " is largest Number")
//     } else if(n2> n1 && n2>n3 ) {
//          console.log(n2 + " is largest Number")
//     }
//     else if(n3> n1 && n3 > n2 ) {
//          console.log(n3 + " is largest Number")
//     }
// }

// largestNumber(48,15,20);

//? Work 4

// const studentGradeCalculate = (mark) =>{
//     if (mark >= 90 & mark<= 100 ) {
//         console.log("Student Grade is A");
//     }
//     else if(mark >= 75 & mark <= 89) {
//         console.log("Student Grade is B")
//     }
//      else if(mark >= 60 & mark <= 74) {
//         console.log("Student Grade is C")
//     }
//      else if(mark >= 50 & mark <= 59) {
//         console.log("Student Grade is D")
//     }
//     else if(mark< 50) {
//         console.log("Sorry You are Failed Try Again")
//     }
//     else if (mark > 100) {
//         console.log("You are entered a wrong number")
//     }
// }

// studentGradeCalculate(91);