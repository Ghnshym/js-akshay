//async & await 
// async :- async is a keyword thst is used to create async function, async function 
// always returns Promise, sometimes when we return a value from async function it will 
// automatically wrap that value in a promise and return them, so we can say it always 
//returns promise. 

// await :- await is a keyword that can only be used inside an async function 
    // - it always used before Promise, to solve Promise.
    // - it will wait untill promise is resolved that it will print or excute next line


const p = new Promise(function(resolve, reject) {
    setTimeout(function () {
        resolve("Promise resolve value");
    }, 2000);
});

// function getData() {
//     p.then((res) => console.log(res));
//     console.log("Promise completed");
// } // this is handling promise by .then function then it will not wait for it to complete
// // promise and print the next line value instated 
// getData();

// now using async and await functions

async function getPromise() {
    const pro = await p; // it will wait for it to complete before executing next line.
    console.log("Promise resolved");
    console.log(pro);
}

getPromise();