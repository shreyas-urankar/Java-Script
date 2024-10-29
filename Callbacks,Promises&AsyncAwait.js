// Synchronous in javascript:
// Definition: synchronous means the code runs in a particular sequence of instructions given in the program Each instruction waits for the previous instruction to complete its execution.

// A synchronous in Java script:
// Definition: Due to synchronous programming, sometimes important instructions get blocked due to some previous instruction which causes a delay in the UI Asynchronous code execution allows to execute next instruction immediately and does not block the flow.

console.log("one");
console.log("tow");
console.log("three");

setTimeout(() => {
  console.log("hello");
}, 4000);

console.log("four");
console.log("five");

// Callbacks: A callback is a function passed as an argument to another function.

function sum(a, b) {
  console.log(a + b);
}

function calculator(a, b, sumCallback) {
  sumCallback(a, b);
}

calculator(1, 2, sum);

// Call Beck Hill: Nested Colwyn stacked below one another, forming a pyramid structure, pyramid of doom. This style of programming becomes difficult to understand and manage.

function getData(dataId, getNextData) {
  setTimeout(() => {
    console.log("data:", dataId);
    if (getNextData) {
      getNextData();
    }
  }, 3000);
}

getData(1, () => {
  getData(2, () => {
    getData(3);
  });
});


//Promises is for eventual compression of tasks. It is an object in JavaScript. It is a solution to callback hell.
// let promise=new Promise((resolve, reject)=>{.........})

// let promise= new Promise((resolve, reject)=>{
//     console.log("I am a romise");
//     reject("Success");
// });

// ............................................

// function getData(dataId, getNextData) {
//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//         console.log("data:", dataId);
//         resolve("Success");
//         if (getNextData) {
//             getNextData();
//         }
//         }, 5000);
//     });
//   }

// .............................................

// const getPromise=()=>{
//     return new Promise((resolve, reject)=>{
//         console.log("I am a promise.");
//         resolve("Success");
//         // reject("Network Error");
//     });
// };

// let promise=getPromise();
// promise.then((res)=>{
//     console.log("Promise fulfilled", res);
// });

// promise.catch((err)=>{
//     console.log("Rejected", err);
// })