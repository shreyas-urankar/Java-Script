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

//Promise chain
getData(1).then((res)=>{
    console.log(res);
    getData(2).then(()=>{
        console.log(res);
    });
});

// Callback hell


// getData(1, () => {
//   getData(2, () => {
//     getData(3);
//   });
// });

// ......................................................................

//Promises is for eventual compression of tasks. It is an object in JavaScript. It is a solution to callback hell.
//Syntax: let promise=new Promise((resolve, reject)=>{.........})

// let promise= new Promise((resolve, reject)=>{
//     console.log("I am a promise");
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

// ............................................

function asyncFunc1(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("some data1");
            resolve("Success");
        }, 2000);
    });
}

function asyncFunc2(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("some data2");
            resolve("Success");
        }, 4000);
    });
}

console.log("Fetching data1");
asyncFunc1().then((res) =>{
    console.log("Fetching data2");
    asyncFunc2().then((re)=>{});

});

//...................................................
// Async-Await

// Async function myFynction{.....}
// await pause the execution of its surrounding async function until the pomise is settled.

async function hello(){
    console.log("hello");
}

function api()
{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Weather data");
            resolve(200);
        })
    });
}
//Async-Await
async function geAllData(){
    console.log("Getting data1....");
     await getData(1);
     console.log("Getting data2....");
     await getData(2);
     console.log("Getting data3....");
     await getData(3);
}