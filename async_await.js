//async & await 
// async :- async is a keyword thst is used to create async function, async function 
// always returns Promise, sometimes when we return a value from async function it will 
// automatically wrap that value in a promise and return them, so we can say it always 
//returns promise. 

// await :- await is a keyword that can only be used inside an async function 
    // - it always used before Promise, to solve Promise.
    // - it will wait untill promise is resolved that it will print or excute next line


// const p1 = new Promise(function(resolve, reject) {
//     setTimeout(function () {
//         resolve("Promise resolve value");
//     }, 5000);
// });


// const p2 = new Promise(function(resolve, reject) {
//     setTimeout(function () {
//         resolve("Promise resolve value");
//     }, 10000);
// });

// function getData() {
//     p.then((res) => console.log(res));
//     console.log("Promise completed");
// } // this is handling promise by .then function then it will not wait for it to complete
// // promise and print the next line value instated 
// getData();

// now using async and await functions

// async function getPromise() {
//     console.log("Promise before async");
//     const val = await p1; // it will wait for it to complete before executing next line.
//     console.log("Promise resolved");
//     console.log(val);

//     const val2 = await p2; // it will wait for it to complete before executing next line.
//     console.log("Promise resolved 2");
//     console.log(val2);
// }

// getPromise();


//fetch data using api await method :

// const API_URL = "https://api.github.com/users/ghnshym";

// async function getData() {
//     try {
//         const data = await fetch(API_URL);
//         const dataValue = await data.json();
//         console.log(`Name : ${dataValue.name}, Company Name : ${dataValue.company}`);
//         // console.log(dataValue);
//     } catch (err) {
//         console.log(err.message);
//     } 
// }

// getData();