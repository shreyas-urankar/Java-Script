//FUNCTIONS IN JS

//............................................................


// function myFunction() {
//     document.getElementById("demo").innerHTML = "Shreyas Urankar<br>";
//     document.getElementById("demo").innerHTML += "Shreyas Urankar";
// }

// myFunction();

// ...................................................................

//USING PARAMETER 

//Example 1:

// function newfunction(msg, num)
// {
//     document.getElementById("demo").innerHTML+= msg +" " + num + "<br>";
// }
// newfunction("Shreyas Urankar", 22);
// newfunction("My age is 21.",22);


//...................................................................

//Example 2:

// function sum(x, y)
// {
//     s=x+y;
//     return s;
// }
// let num1=parseInt(prompt("Enter the first number:-"));
// let num2=parseInt(prompt("Enter the second number:"));
// let val=sum(num1, num2);
// document.getElementById("demo").innerHTML=("The sum of two numbers is:"+" " +val); 

//..............................................................................

//ARROW FUNCTION

//EXAMPLE 1:
// const arrowSub=(a, b)=>
// {
//     document.getElementById("demo").innerHTML=("The subtraction of two number is:" + (a-b))
// }
// let num1 = parseInt(prompt("Enter the first number:"));
// let num2 = parseInt(prompt("Enter the second number:"));

// arrowSub(num1, num2);

// ......................................................................

//FOR EACH LOOP IN ARRAY 
// EXAMPLE 1:


// let arr = [1, 2, 3, 4, 5, 6];
// arr.forEach(function printVal(val) {
//     document.getElementById("demo").innerHTML += val + "<br>"; 
// });

// //Using arrow function in array:
// arr.forEach((val)=>{
//     document.getElementById("demo").innerHTML += val + "<br>"; 
    
// });

//.......................................................................

// QUE PRACTICE:For given array of numbers print square of each value using the for each loop.

// let nums=[1,2,3,4,5,6];
// nums.forEach((num)=>{
//     document.getElementById("demo").innerHTML=(num**2);
// });

//.......................................................................



//SOME MORE ARRAY METHODS: 1)MAPS()

// MAP() example
// let nums = [4, 8, 6, 7, 2, 5];
// let numArr = nums.map((val) => {
//     return val * 2;
// });
// document.getElementById("demo").innerHTML = numArr.join(", "); // To display array correctly

// // calcSquare function
// let calcSquare = (num) => {
//     document.getElementById("demo").innerHTML += "<br>"+"<br>" + (num * num); // Append result
// }

// // Example usage of calcSquare
// calcSquare(5); // This will calculate and display 25

// 2)Filter
// let evenArr = [1, 2, 3, 4, 5, 6, 7];
// let filteredArr = evenArr.filter((val) => {
//     return val % 2 === 0;
// });
// document.getElementById("demo").innerHTML = filteredArr.join(", ");


//...........................................................
// 3)Reduce Method()

// let arr=[1,2,3,5,6,7];
// const output=arr.reduce((res, curr)=>{
//     return res + curr;
// });
// document.getElementById("demo").innerHTML=output;

// // If previous value is greater than the current then return previous or return current(MAIN QUE IS TO PRINT THE LARGEST NUMBER IN THE ARRAY.)
// const output1=arr.reduce((prev, current)=>{
//     return prev>current ? prev:curr;
// });
// document.getElementById("demo").innerHTML=output1;

//.........................................................................
//We are given array of marks of students. Filter out of the marks of students that scored 90+.

// let marks = [50,98,85,73,62,95,94,68,100,91] 
// let toppers = marks.filter((val) =>{
//     return val > 90;
// })
// document.getElementById("demo").innerHTML = "The toppers are: " + toppers.join(", ");

// ...................................................................................................

// Take a number n as input from user create an array of numbers from one to N. Use the reduce method to calculate sum of all numbers in the array. You. use the reduce method to calculate product of all numbers in the array.

let n = prompt("Enter a number:");

let array = [];
for (let i=1; i<=n; i++)
{
    array[i-1] = i;
}

document.getElementById("demo").innerHTML = "Array:" + array.join(",");

let sum = array.reduce((res, curr) => {
    return res + curr;
})

document.getElementById("demo").innerHTML += "<br>Sum of Array:" + sum;

let factorial = array.reduce((res, curr) => {
    return res * curr;
})

document.getElementById("demo").innerHTML += "<br>Factorial of Array:" + factorial;